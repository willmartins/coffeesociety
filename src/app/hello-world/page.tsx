import { CommentForm } from "@/components/CommentForm";
import { pageMeta } from "@/lib/meta";

export const metadata = pageMeta(
  "Hello world! - Coffee Society by Lavazza",
  "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
);

export default function HelloWorldPage() {
  return (
    <main className="mx-auto max-w-[800px] px-5 py-28">
      <h1>Hello world!</h1>
      <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
      <CommentForm />
    </main>
  );
}
