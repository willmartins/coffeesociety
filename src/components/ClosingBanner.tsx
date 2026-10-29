export function ClosingBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section
      className="grid min-h-[520px] content-center px-5 text-[#1c3567] xl:min-h-[720px]"
      style={{
        backgroundImage: "url(https://coffee-society.co.uk/wp-content/uploads/2025/11/CS-Stamp-Offset.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "58% auto",
      }}
    >
      <h2 className="m-0 font-[hoss-sharp,sans-serif] text-[64px] font-bold uppercase leading-[0.8] tracking-[-2px] md:text-[120px] xl:text-[175px]">
        {title}
      </h2>
      <p className="m-0 font-[hoss-sharp,sans-serif] text-[22px] font-bold uppercase">{subtitle}</p>
    </section>
  );
}
