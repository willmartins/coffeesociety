export function HeroBanner({ title, badgeUrl }: { title: string; badgeUrl: string }) {
  return (
    <section className="pattern-overlay pattern-slash pattern-slash--home flex items-end justify-between gap-6 px-6 pb-10">
      <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[68px] font-bold uppercase leading-[0.75] tracking-[-1.5px] text-[#fd26dc] md:text-[168px] md:tracking-[-4px] xl:text-[240px] xl:tracking-[-9px]">
        {title}
      </h1>
      {/* next/image does not render this SVG badge cleanly. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={badgeUrl} alt="" className="hidden w-40 md:block" />
    </section>
  );
}
