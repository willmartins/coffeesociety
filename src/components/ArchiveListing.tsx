import type { Trainer } from "@/content/types";
import { oliveBadge, pinkCup } from "@/content/live-media";
import { Trainers } from "./Trainers";

type Item = { title: string; href: string; imageUrl?: string };

export function ArchiveListing({
  title,
  description,
  videos,
  shorts,
  videoEmpties = 0,
  courseEmpties = 0,
  trainers,
}: {
  title?: string;
  description?: string;
  videos?: Item[];
  shorts?: Item[];
  videoEmpties?: number;
  courseEmpties?: number;
  trainers: Trainer[];
}) {
  return (
    <div>
      {title ? (
        <header className="pattern-overlay pattern-slash page-hero">
          <div className="page-hero-row wrap">
            <h1>{title}</h1>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={oliveBadge} alt="" className="hero-badge" />
          </div>
        </header>
      ) : (
        <header className="archive-mark">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={oliveBadge} alt="" />
        </header>
      )}
      <section className="intro-band">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pinkCup} alt="" />
        {description ? <p>{description}</p> : null}
      </section>
      {videoEmpties > 0 || (videos && videos.length > 0) ? (
        <section className="pink-band">
          <div className="wrap">
            <h3>Videos</h3>
            {Array.from({ length: videoEmpties }).map((_, index) => (
              <p className="empty" key={`video-empty-${index}`}>
                No data was found
              </p>
            ))}
            {videos && videos.length > 0 ? (
              <div className="card-grid card-grid--3">
                {videos.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="vid-card coffee-bg-treated"
                    style={item.imageUrl ? { backgroundImage: `url(${item.imageUrl})` } : undefined}
                  >
                    <span className="chip chip--title filter-avoid">
                      <span>{item.title}</span>
                    </span>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
      {shorts && shorts.length > 0 ? (
        <section className="pink-band">
          <div className="wrap">
            <h3>Shorts</h3>
            <p className="empty">No data was found</p>
            <ul className="shorts-grid">
              {shorts.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="short-card coffee-bg-treated"
                    style={item.imageUrl ? { backgroundImage: `url(${item.imageUrl})` } : undefined}
                  >
                    <span className="chip chip--md chip--olive chip--cream rot-2 filter-avoid">{item.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
      {courseEmpties > 0 ? (
        <section className="pink-band">
          <div className="wrap">
            <h3>Courses</h3>
            {Array.from({ length: courseEmpties }).map((_, index) => (
              <p className="empty" key={`course-empty-${index}`}>
                No data was found
              </p>
            ))}
          </div>
        </section>
      ) : null}
      <Trainers trainers={trainers} />
    </div>
  );
}
