"use client";

import { useState } from "react";

export function CookieNotice({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(true);
  const [details, setDetails] = useState(false);
  if (!open) return null;
  return (
    <aside className="cookie-banner" aria-label="Cookie notice">
      <h2>{title}</h2>
      <p>{body}</p>
      {details ? (
        <p>Necessary cookies help make a website usable by enabling basic functions like page navigation.</p>
      ) : null}
      <button type="button" onClick={() => setDetails((value) => !value)}>
        Show details
      </button>
      <button type="button" onClick={() => setOpen(false)}>
        Allow all
      </button>
    </aside>
  );
}
