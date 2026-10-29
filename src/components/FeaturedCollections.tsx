export function FeaturedCollections({
  title,
  collections,
}: {
  title: string;
  collections: { label: string; href: string; imageUrl: string }[];
}) {
  return (
    <section className="pattern-overlay pattern-spoonbackground px-5 pb-20 pt-10">
      <h2 className="m-0 max-w-[1400px] font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] tracking-[-1.5px] text-[#051521] md:text-[63px] md:tracking-[-4px] xl:text-[90px] xl:tracking-[-5px]">
        {title.includes(" ") ? (
          <>
            {title.split(" ")[0]}
            <br />
            {title.split(" ").slice(1).join(" ")}
          </>
        ) : (
          title
        )}
      </h2>
      <div className="mx-auto mt-8 grid max-w-[1400px] gap-5 md:grid-cols-2">
        {collections.map((card) => (
          <a
            key={card.href}
            href={card.href}
            className="coffee-bg-treated flex min-h-[360px] items-end justify-center bg-cover bg-center p-6 no-underline"
            style={{ backgroundImage: `linear-gradient(180deg, #00000030 0%, #000000 100%), url(${card.imageUrl})` }}
          >
            <span className="filter-avoid font-[hoss-sharp,sans-serif] text-[18px] font-bold uppercase text-white">
              {card.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
