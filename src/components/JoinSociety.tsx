import { MediaFrame } from "./MediaFrame";

export function JoinSociety({
  title,
  body,
  href,
  label,
  imageUrl,
}: {
  title: string;
  body: string;
  href: string;
  label: string;
  imageUrl: string;
}) {
  return (
    <section className="grid items-center gap-8 bg-[#1c3567] px-5 py-16 text-white md:grid-cols-2 md:px-10">
      <MediaFrame src={imageUrl} alt="" width={1024} height={548} className="h-auto w-full rounded-[180px] border-[10px] border-[#627c2f] object-cover" />
      <div>
        <h2 className="m-0 font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] tracking-[-1.5px] md:text-[63px] xl:text-[90px] xl:tracking-[-5px]">
          {title}
        </h2>
        <p>{body}</p>
        <a className="pill bg-[#ffa7b2] text-[#051521]" href={href}>
          {label}
        </a>
      </div>
    </section>
  );
}
