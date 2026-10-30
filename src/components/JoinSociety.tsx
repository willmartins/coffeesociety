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
    <section className="join">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={imageUrl} alt="" className="join-photo coffee-treated" width={1024} height={548} />
      <div className="join-copy">
        <h2 className="display">{title}</h2>
        <p className="lede">{body}</p>
        <a className="pill pill--pink" href={href}>
          {label}
        </a>
      </div>
    </section>
  );
}
