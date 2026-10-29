"use client";

import { FormEvent, useState } from "react";

export function CommentForm() {
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/forms/comment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment: form.get("comment"),
        author: form.get("author"),
        email: form.get("email"),
        url: form.get("url"),
      }),
    });
    setMessage(response.ok ? "Submitted." : "Something went wrong. Try again.");
  }

  return (
    <form className="comment-form" onSubmit={onSubmit}>
      <h2>Leave a Reply</h2>
      <p>Your email address will not be published. Required fields are marked *</p>
      <label htmlFor="comment">
        Comment *
        <textarea id="comment" name="comment" required rows={6} />
      </label>
      <label htmlFor="author">
        Name *
        <input id="author" name="author" type="text" required />
      </label>
      <label htmlFor="email">
        Email *
        <input id="email" name="email" type="email" required />
      </label>
      <label htmlFor="url">
        Website
        <input id="url" name="url" type="url" />
      </label>
      <label>
        <input type="checkbox" name="wp-comment-cookies-consent" /> Save my name, email, and website in this browser for the next time I comment.
      </label>
      <button type="submit">Post Comment</button>
      {message ? <p role="status">{message}</p> : null}
    </form>
  );
}
