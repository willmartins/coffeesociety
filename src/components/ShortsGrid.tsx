"use client";

import { useRef, useState } from "react";
import type { ShortDoc } from "@/content/types";

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
  const shift = (dir: number) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("li");
    const width = card ? card.getBoundingClientRect().width + 10 : node.clientWidth;
    node.scrollBy({ left: width * dir, behavior: "smooth" });
    setIndex((value) => Math.min(shorts.length - 1, Math.max(0, value + dir)));
  };

  return (
    <section className="shorts-band">
      <div className="wrap">
        <h2 className="display">
          {heading}
          <br />
          {kicker}
        </h2>
        <div className="shorts-slider">
          <ul className="shorts-grid" ref={scroller}>
            {shorts.map((short) => (
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
          {shorts.map((short, dot) => (
            <span key={short.slug} className={dot === index ? "is-on" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}
