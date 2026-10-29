import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./src/sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";

const singletons = [
  { id: "siteSettings", type: "siteSettings", title: "Site settings" },
  { id: "navigation", type: "navigation", title: "Navigation" },
  { id: "footer", type: "footer", title: "Footer" },
  { id: "homePage", type: "homePage", title: "Home" },
];

export default defineConfig({
  name: "coffee-society",
  title: "Coffee Society",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            ...singletons.map((item) =>
              S.listItem()
                .title(item.title)
                .id(item.id)
                .child(S.document().schemaType(item.type).documentId(item.id)),
            ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !singletons.some((singleton) => singleton.type === item.getId()),
            ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
