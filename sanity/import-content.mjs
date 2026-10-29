import { createClient } from "@sanity/client";
import { createReadStream, existsSync, readFileSync } from "node:fs";
import path from "node:path";

const token = process.env.SANITY_API_WRITE_TOKEN;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5zo2zgif";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

if (!token) {
  console.error("Set SANITY_API_WRITE_TOKEN before importing.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-02-01",
  token,
  useCdn: false,
});

const file = new URL("./seed/seed.ndjson", import.meta.url);
const lines = readFileSync(file, "utf8").split("\n").filter(Boolean);

function localFile(url) {
  if (!url || !url.startsWith("/")) return null;
  const absolute = path.join(process.cwd(), "public", url);
  return existsSync(absolute) ? absolute : null;
}

const documents = [];
for (const line of lines) {
  const doc = JSON.parse(line);
  if (doc.imageUrl) {
    const assetPath = localFile(doc.imageUrl);
    if (assetPath) {
      const asset = await client.assets.upload("image", createReadStream(assetPath), {
        filename: path.basename(assetPath),
      });
      doc.imageUrl = asset.url;
    }
  }
  documents.push(doc);
}

const transaction = client.transaction();
for (const doc of documents) {
  transaction.createOrReplace(doc);
}
await transaction.commit();

console.info(`Imported ${documents.length} documents into ${projectId}/${dataset} in one transaction.`);
