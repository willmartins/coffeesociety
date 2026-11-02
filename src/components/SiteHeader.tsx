"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/content/types";
import { MediaFrame } from "./MediaFrame";

export function SiteHeader({
  logoUrl,
  items,
}: {
  logoUrl: string;
  items: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<string | null>(null);

  return (
    <header className="site-header">
      <Link href="/" className="logo" aria-label="Coffee Society by Lavazza">
        <MediaFrame src={logoUrl} alt="" width={175} height={130} priority />
      </Link>
      <nav className="menu" aria-label="Menu">
        {items.map((item) => (
          <div className="menu-item" key={item.label}>
            <button type="button" aria-expanded="false">
              {item.label}
            </button>
            <div className="dropdown">
              <div className="dropdown-card">
                {item.groups.map((group) => (
                  <div key={group.label}>
                    <h2>{group.label}</h2>
                    {group.links.map((link) => (
                      <a key={link.href + link.label} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </nav>
      <a className="portal-link" href="/customer-portal/">
        Customer Portal Login
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
        <span className="visually-hidden">Menu</span>
      </button>
      <div id="mobile-menu" className={open ? "mobile-panel open" : "mobile-panel"}>
        {items.map((item) => (
          <div key={item.label}>
            <button type="button" onClick={() => setSection(section === item.label ? null : item.label)}>
              {item.label}
            </button>
            {section === item.label
              ? item.groups.map((group) => (
                  <div key={group.label}>
                    <h2>{group.label}</h2>
                    {group.links.map((link) => (
                      <a key={link.href + link.label} href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </header>
  );
}
