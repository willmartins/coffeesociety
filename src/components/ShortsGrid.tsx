"use client";

import { useEffect, useRef, useState } from "react";
import type { ShortDoc } from "@/content/types";

const orders = {
  desktop: [
    "why-does-my-shot-run-slow-and-taste-bitter",
    "why-is-my-shot-running-fast-and-taste-sour",
    "why-doesnt-my-coffee-have-crema",
    "why-does-my-espresso-taste-dirty",
    "why-does-my-coffee-only-come-out-of-one-side-of-the-portafilter",
    "why-is-my-coffee-puck-watery",
  ],
  tablet: [
    "why-is-my-shot-running-fast-and-taste-sour",
    "why-doesnt-my-coffee-have-crema",
    "why-does-my-espresso-taste-dirty",
    "why-does-my-coffee-only-come-out-of-one-side-of-the-portafilter",
    "why-is-my-coffee-puck-watery",
    "why-does-my-shot-run-slow-and-taste-bitter",
  ],
  mobile: [
    "why-doesnt-my-coffee-have-crema",
    "why-does-my-espresso-taste-dirty",
    "why-does-my-coffee-only-come-out-of-one-side-of-the-portafilter",
    "why-is-my-coffee-puck-watery",
    "why-does-my-shot-run-slow-and-taste-bitter",
    "why-is-my-shot-running-fast-and-taste-sour",
  ],
};

function band(): keyof typeof orders {
  if (typeof window === "undefined") return "desktop";
  if (window.innerWidth <= 767) return "mobile";
  if (window.innerWidth <= 1024) return "tablet";
  return "desktop";
}

export function ShortsGrid({
  heading,
  kicker,
  shorts,
}: {
  heading: string;
  kicker: string;
  shorts: ShortDoc[];
}) {
  const scroller = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);
  const [mode, setMode] = useState<keyof typeof orders>("desktop");
  useEffect(() => {
    const apply = () => setMode(band());
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);
  const liveOrder = orders[mode];
  const ordered = [...shorts].sort(
    (a, b) => liveOrder.indexOf(a.slug) - liveOrder.indexOf(b.slug),
  );
  const shift = (dir: number) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("li");
    const width = card ? card.getBoundingClientRect().width + 20 : node.clientWidth;
    node.scrollBy({ left: width * dir, behavior: "smooth" });
    setIndex((value) => Math.min(ordered.length - 1, Math.max(0, value + dir)));
  };

  return (
    <section className="shorts-band">
      <div className="wrap">
        <h2 className="display">
          {heading}
          <br />
          {kicker}
        </h2>
      </div>
      <div className="shorts-slider">
        <ul className="shorts-grid" ref={scroller}>
            {ordered.map((short) => (
              <li key={short.slug}>
                <a
                  href={`/shorts/${short.slug}/`}
                  className="short-card coffee-bg-treated"
                  style={{ backgroundImage: `url(${short.imageUrl})` }}
                >
                  <span className="chip chip--md chip--olive chip--cream rot-2 filter-avoid">{short.title}</span>
                </a>
              </li>
            ))}
          </ul>
        <button type="button" className="shorts-arrow shorts-arrow--prev" aria-label="Previous" onClick={() => shift(-1)}>
          ‹
        </button>
        <button type="button" className="shorts-arrow" aria-label="Next" onClick={() => shift(1)}>
          ›
        </button>
      </div>
      <div className="shorts-dots" aria-hidden="true">
        {ordered.map((short, dot) => (
          <span key={short.slug} className={dot === index ? "is-on" : ""} />
        ))}
      </div>
    </section>
  );
}
