import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-5 py-28">
      <h1>Page not found</h1>
      <p>That page is not on Coffee Society.</p>
      <Link href="/">Back to the home page</Link>
    </main>
  );
}
