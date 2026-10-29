"use client";

import { FormEvent, useState } from "react";

export function PortalLogin({
  title,
  intro,
  redirectTo,
}: {
  title: string;
  intro: string;
  redirectTo: string;
}) {
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/forms/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        log: form.get("log"),
        pwd: form.get("pwd"),
        redirect_to: form.get("redirect_to"),
      }),
    });
    setMessage(response.ok ? "Submitted." : "Something went wrong. Try again.");
  }

  return (
    <section className="mx-auto max-w-[720px] px-5 py-28">
      <h1 className="font-[hoss-sharp,sans-serif] text-[40px] uppercase">{title}</h1>
      <p>{intro}</p>
      <form className="portal-form" aria-label="Login form" onSubmit={onSubmit}>
        <input type="hidden" name="redirect_to" value={redirectTo} />
        <label htmlFor="user">
          Username
          <input id="user" name="log" type="text" required autoComplete="username" />
        </label>
        <label htmlFor="password">
          Password
          <input id="password" name="pwd" type="password" required autoComplete="current-password" />
        </label>
        <button type="submit">Log In</button>
        {message ? <p role="status">{message}</p> : null}
      </form>
    </section>
  );
}
