export function ClosingBanner({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="closing-banner">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
