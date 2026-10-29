import type { Trainer } from "@/content/types";

export function Trainers({ trainers }: { trainers: Trainer[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-12">
      <h2 className="font-[hoss-sharp,sans-serif] text-[30px] font-bold uppercase">MEET YOUR TRAINERS</h2>
      <ul className="mt-6 grid list-none gap-6 p-0 md:grid-cols-2">
        {trainers.map((trainer) => (
          <li key={trainer.name}>
            <p className="m-0">{trainer.role}</p>
            <p className="m-0 font-semibold">{trainer.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
