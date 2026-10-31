export function ClosingBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="closing-banner">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="stamp" src="https://coffee-society.co.uk/wp-content/uploads/2025/11/CS-Stamp-Offset.png" alt="" />
    </section>
  );
}
