import type { Trainer } from "@/content/types";
import { trainerChips, trainerImages } from "@/content/live-media";

export function Trainers({ trainers }: { trainers: Trainer[] }) {
  return (
    <section className="section-pad">
      <div className="wrap">
        <h2 className="mid">MEET YOUR TRAINERS</h2>
        <ul className="trainer-grid">
          {trainers.map((trainer, index) => (
            <li
              key={trainer.name}
              className="trainer-card coffee-bg-treated"
              style={{ backgroundImage: `url(${trainerImages[index] ?? ""})` }}
            >
              <h3 className="filter-avoid">{trainer.role}</h3>
              <span className={`chip chip--sm filter-avoid ${trainerChips[index] ?? ""}`}>{trainer.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
