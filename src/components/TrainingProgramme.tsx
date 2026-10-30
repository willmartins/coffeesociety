import type { CourseDoc, Trainer } from "@/content/types";
import { MediaFrame } from "./MediaFrame";
import { Trainers } from "./Trainers";

export function TrainingProgramme({
  course,
  trainers,
}: {
  course: CourseDoc;
  trainers: Trainer[];
}) {
  return (
    <article>
      <header className="pattern-overlay pattern-slash pattern-slash--training train-hero">
        <div className="wrap">
          <h1 className="mid">{course.title}</h1>
          {course.duration ? <p>Course Duration: {course.duration}</p> : null}
          {course.enquireHref ? (
            <a className="pill pill--round pill--pink" href={course.enquireHref}>
              ENQUIRE NOW
            </a>
          ) : null}
        </div>
      </header>
      <div className="section-pad wrap">
        {course.imageUrl ? (
          <MediaFrame src={course.imageUrl} alt="" width={1024} height={700} />
        ) : null}
        <section>
          <h2 className="mid">Course Information</h2>
          <p>{course.summary}</p>
        </section>
        <section>
          <h2 className="mid">Course Outcomes</h2>
          <p>{course.outcomes}</p>
        </section>
        <section>
          <h2 className="mid">Key Topics</h2>
          <ol>
            {course.keyTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="mid">Useful Links</h2>
          {course.newsletterHref ? (
            <p>
              <a href={course.newsletterHref}>Sign up to the Coffee Society Newsletter</a>
            </p>
          ) : null}
          <p>
            <a href={course.viewAllHref}>View All Courses</a>
          </p>
          <p>
            Links to external sites are for your convenience; we do not control their content or privacy practices. Please note you’ll be leaving our website.
          </p>
        </section>
        <section>
          <h2 className="mid">Enquire Now</h2>
          <p>Want to learn more about Lavazza training and education? Contact our training team.</p>
          {course.enquireHref ? (
            <a className="pill" href={course.enquireHref}>
              CONTACT
            </a>
          ) : null}
        </section>
      </div>
      <Trainers trainers={trainers} />
    </article>
  );
}
