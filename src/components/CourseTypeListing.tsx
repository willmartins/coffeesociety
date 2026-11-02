import type { Trainer } from "@/content/types";
import { courseCardImages, oliveBadge, pinkCup } from "@/content/live-media";
import { Trainers } from "./Trainers";

type Card = { title: string; blurb: string; href?: string; imageUrl?: string };

export function CourseTypeListing({
  courseType,
  trainers,
  badgeUrl,
}: {
  courseType: { title: string; description: string; cards: Card[] };
  trainers: Trainer[];
  badgeUrl: string;
}) {
  return (
    <div>
      <header className="pattern-overlay pattern-slash page-hero">
        <div className="page-hero-row wrap-wide">
          <h1>{courseType.title}</h1>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={badgeUrl} alt="" className="hero-badge" />
        </div>
      </header>
      <section className="intro-band">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pinkCup} alt="" />
        <p>{courseType.description}</p>
      </section>
      <section className="pattern-overlay pattern-cups cups-band">
        <div className="card-grid card-grid--2 wrap-wide">
          {courseType.cards.map((card) => {
            const image = card.imageUrl || courseCardImages[card.title];
            const inner = (
              <>
                {image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={image} alt="" className="coffee-treated" />
                ) : null}
                <div>
                  <h2 className="chip chip--sm chip--aqua chip--white rot--1">{card.title}</h2>
                  <p>{card.blurb}</p>
                  <p className="learn-more">Learn more</p>
                </div>
              </>
            );
            return card.href ? (
              <a key={card.title} className="course-card niz-bounce" href={card.href}>
                {inner}
              </a>
            ) : (
              <article key={card.title} className="course-card">
                {inner}
              </article>
            );
          })}
        </div>
      </section>
      <Trainers trainers={trainers} />
    </div>
  );
}

export const archiveBadge = oliveBadge;
