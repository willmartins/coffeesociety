import { notFound } from "next/navigation";

const listings: Record<
  string,
  { title: string; cards: { title: string; blurb: string }[] }
> = {
  lavazza: {
    title: "Coffee Courses",
    cards: [
      {
        title: "Lavazza Barista Skills Foundation",
        blurb:
          "The perfect Lavazza-focused introduction to professional espresso preparation and fundamental barista skills.",
      },
      {
        title: "Lavazza Barista Skills Intermediate",
        blurb:
          "A focused course to enhance speed, consistency, and beverage quality using the renowned Lavazza methodology.",
      },
      {
        title: "Lavazza Latte Art Milk Steaming",
        blurb:
          "A focused, intense session dedicated to mastering the perfect texture and temperature of milk for all latte art.",
      },
      {
        title: "Lavazza Latte Art Pouring",
        blurb:
          "Learn to transform perfectly steamed milk into classic latte art patterns like hearts and tulips.",
      },
    ],
  },
  "sca-certified": {
    title: "SCA Certified Courses",
    cards: [
      {
        title: "SCA Introduction to Coffee",
        blurb:
          "A comprehensive introduction to coffee, following the journey from farm to cup and building a strong foundation for anyone starting their coffee education.",
      },
      {
        title: "SCA Barista Foundation",
        blurb:
          "SCA Certified introduction to the core skills and essential knowledge required to operate an espresso machine and grinder in a professional setting.",
      },
      {
        title: "SCA Barista Intermediate",
        blurb:
          "SCA Certified. A crucial two-day course building on Foundation skills, focusing on the quality, efficiency, and scientific principles of espresso and milk preparation.",
      },
      {
        title: "SCA Barista Professional",
        blurb:
          "SCA Certified. The highest-level certification, focusing on advanced technical skills, troubleshooting, and management for true coffee professionals.",
      },
      {
        title: "SCA Brewing Foundation",
        blurb:
          "SCA Certified introduction to the science and art of filter coffee, covering fundamental extraction principles and various brewing methods.",
      },
      {
        title: "SCA Brewing Intermediate",
        blurb:
          "SCA Certified. Delve into the science of brewing, focusing on advanced measurement and control to achieve highly repeatable and superior extraction.",
      },
      {
        title: "SCA Brewing Professional",
        blurb:
          "SCA Certified. Achieve expert status in the complex application of brewing science and comprehensive quality management.",
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(listings).map((slug) => ({ slug }));
}

export default async function CourseTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = listings[slug];
  if (!listing) notFound();

  return (
    <main>
      <section className="pattern-overlay pattern-slash flex min-h-[55vh] items-end px-6 pb-12 xl:min-h-[80vh]">
        <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] text-white md:text-[63px] xl:text-[90px]">
          {listing.title}
        </h1>
      </section>
      <section className="pattern-overlay pattern-cups px-5 py-16 text-white">
        <div className="mx-auto grid max-w-[1600px] gap-8 md:grid-cols-2">
          {listing.cards.map((card) => (
            <article key={card.title}>
              <h2 className="m-0 font-[hoss-sharp,sans-serif] text-[28px] font-bold uppercase leading-[0.9]">
                {card.title}
              </h2>
              <p>{card.blurb}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}