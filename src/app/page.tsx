const cards = [
  {
    href: "/topic/barista-foundation-course/",
    label: "BARISTA SKILLS",
    image:
      "https://coffee-society.co.uk/wp-content/uploads/2025/09/Screenshot-2025-09-16-at-15.37.43.png",
  },
  {
    href: "/topic/coffee-crews/",
    label: "COFFEE CREWS",
    image:
      "https://coffee-society.co.uk/wp-content/uploads/2025/11/Coffee-Crews-Thumbnail-1.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section className="pattern-overlay pattern-slash pattern-slash--home flex items-end px-6 pb-10">
        <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[68px] font-bold uppercase leading-[0.75] tracking-[-1.5px] text-[#fd26dc] md:text-[168px] md:tracking-[-4px] xl:text-[240px] xl:tracking-[-9px]">
          CARING ABOUT COFFEE
        </h1>
      </section>

      <section className="pattern-overlay pattern-spoonbackground px-5 pb-20 pt-10">
        <h2 className="m-0 max-w-[1400px] font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] tracking-[-1.5px] text-[#051521] md:text-[63px] md:tracking-[-4px] xl:text-[90px] xl:tracking-[-5px]">
          Featured
          <br />
          Collections
        </h2>
        <div className="mx-auto mt-8 grid max-w-[1400px] gap-5 md:grid-cols-2">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              className="coffee-bg-treated flex min-h-[360px] items-end justify-center bg-cover bg-center p-6 no-underline"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <span className="filter-avoid font-[hoss-sharp,sans-serif] text-[18px] font-bold uppercase text-white">
                {card.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}