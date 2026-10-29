import type { Block } from "@/content/types";

export function RichPage({ title, blocks }: { title: string; blocks: Block[] }) {
  return (
    <article className="mx-auto max-w-[900px] px-5 py-28">
      <h1 className="font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] md:text-[60px]">
        {title}
      </h1>
      {blocks.map((block, index) => {
        if (block.type === "h1") return null;
        if (block.type === "h2" || block.type === "h3" || block.type === "h4") {
          const Tag = block.type;
          return (
            <Tag key={`${block.type}-${index}`} className="mt-8 font-[hoss-sharp,sans-serif] uppercase">
              {block.text}
            </Tag>
          );
        }
        if (block.type === "li") {
          return <li key={`${block.type}-${index}`}>{block.text}</li>;
        }
        if (block.type === "a" && block.href) {
          return (
            <p key={`${block.type}-${index}`}>
              <a className="pill" href={block.href}>
                {block.text}
              </a>
            </p>
          );
        }
        return <p key={`${block.type}-${index}`}>{block.text}</p>;
      })}
    </article>
  );
}
