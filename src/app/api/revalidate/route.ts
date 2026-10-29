import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";
import { type NextRequest, NextResponse } from "next/server";

type WebhookBody = { _type?: string };

export async function POST(request: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "Revalidate secret is not set." }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<WebhookBody>(request, secret);
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature." }, { status: 401 });
  }
  if (!body?._type) {
    return NextResponse.json({ message: "Missing document type." }, { status: 400 });
  }

  revalidateTag(body._type);
  return NextResponse.json({ revalidated: true, tag: body._type });
}
