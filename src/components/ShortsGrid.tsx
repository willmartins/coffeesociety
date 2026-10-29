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
  return (
    <section className="px-5 py-[70px]">
      <h2 className="m-0 font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] tracking-[-1.5px] md:text-[63px] xl:text-[90px] xl:tracking-[-5px]">
        {heading}
        <br />
        {kicker}
      </h2>
      <ul className="mx-auto mt-8 grid max-w-[1400px] list-none gap-5 p-0 md:grid-cols-3">
        {shorts.map((short) => (
          <li key={short.slug}>
            <a
              href={`/shorts/${short.slug}/`}
              className="coffee-bg-treated flex min-h-[280px] items-end bg-cover bg-center p-4 no-underline text-white md:min-h-[400px]"
              style={{ backgroundImage: `url(${short.imageUrl})` }}
            >
              <span className="filter-avoid font-[hoss-sharp,sans-serif] text-[18px] font-bold uppercase">
                {short.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
