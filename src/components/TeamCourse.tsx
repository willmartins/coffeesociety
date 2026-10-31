import courses from "@/content/team-courses.json";
import { Trainers } from "./Trainers";
import type { Trainer } from "@/content/types";

export type TeamCourseDoc = (typeof courses)[number];

export function TeamCourse({ course, trainers }: { course: TeamCourseDoc; trainers: Trainer[] }) {
  return (
    <article>
      <header className="pattern-overlay pattern-slash pattern-slash--training train-hero">
        <div className="wrap">
          <p className="chip chip--sm chip--olive chip--cream rot--2">In Person Training</p>
          <h1 className="mid">{course.title}</h1>
          {course.duration ? <p>Course Duration: {course.duration}</p> : null}
        </div>
      </header>
      <div className="section-pad wrap">
        <section>
          <h2 className="mid">Course Information</h2>
          <p>{course.intro}</p>
          <p>{course.body}</p>
        </section>
        <section>
          <h2 className="mid">Key Topics</h2>
          <ul className="topic-list">
            {course.topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mid">Useful Links</h2>
          <p>Here to help!</p>
          <ul>
            {course.links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <p>
            Links to external sites are for your convenience; we do not control their content or privacy practices. Please note you’ll be leaving our website.
          </p>
        </section>
        <section>
          <h2 className="mid">Enquire Now</h2>
          <p>Want to learn more about Lavazza training and education? Contact our training team.</p>
        </section>
      </div>
      <Trainers trainers={trainers} />
    </article>
  );
}
