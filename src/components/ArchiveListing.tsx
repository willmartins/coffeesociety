import type { Trainer } from "@/content/types";
import { Trainers } from "./Trainers";

type Item = { title: string; href: string };

export function ArchiveListing({
  title,
  description,
  videos,
  shorts,
  courses,
  trainers,
  emptyVideos = false,
  emptyCourses = false,
}: {
  title?: string;
  description?: string;
  videos?: Item[];
  shorts?: Item[];
  courses?: Item[];
  trainers: Trainer[];
  emptyVideos?: boolean;
  emptyCourses?: boolean;
}) {
  return (
    <div className="pt-28">
      {title ? (
        <header className="pattern-overlay pattern-slash px-5 py-16 text-white">
          <div className="mx-auto max-w-[1400px]">
            <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] md:text-[60px]">
              {title}
            </h1>
            {description ? <p className="max-w-[70ch]">{description}</p> : null}
          </div>
        </header>
      ) : (
        <div className="h-8" />
      )}
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-10">
        {(videos || emptyVideos) && (
          <section>
            <h2>Videos</h2>
            {videos && videos.length > 0 ? (
              <ul className="archive-list">
                {videos.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty">No data was found</p>
            )}
          </section>
        )}
        {shorts && shorts.length > 0 ? (
          <section>
            <h2>Shorts</h2>
            <ul className="archive-list">
              {shorts.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        {(courses || emptyCourses) && (
          <section>
            <h2>Courses</h2>
            {courses && courses.length > 0 ? (
              <ul className="archive-list">
                {courses.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="empty">No data was found</p>
            )}
          </section>
        )}
      </div>
      <Trainers trainers={trainers} />
    </div>
  );
}
