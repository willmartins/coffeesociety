import type { Trainer } from "@/content/types";
import { Trainers } from "./Trainers";

type Card = { title: string; blurb: string; href?: string };

export function CourseTypeListing({
  courseType,
  trainers,
}: {
  courseType: { title: string; description: string; cards: Card[] };
  trainers: Trainer[];
}) {
  return (
    <div>
      <header className="pattern-overlay pattern-slash flex min-h-[55vh] items-end px-6 pb-12 xl:min-h-[80vh]">
        <div className="mx-auto w-full max-w-[1600px] text-white">
          <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] md:text-[63px] xl:text-[90px]">
            {courseType.title}
          </h1>
          <p className="max-w-[70ch]">{courseType.description}</p>
        </div>
      </header>
      <section className="pattern-overlay pattern-cups px-5 py-16 text-white">
        <div className="card-grid mx-auto max-w-[1600px]">
          {courseType.cards.map((card) => (
            <article key={card.title} className="bg-white/10 p-6">
              <h2 className="m-0 font-[hoss-sharp,sans-serif] text-[28px] font-bold uppercase leading-[0.9]">
                {card.title}
              </h2>
              <p>{card.blurb}</p>
              {card.href ? (
                <a className="pill" href={card.href}>
                  Learn more
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
      <Trainers trainers={trainers} />
    </div>
  );
}
