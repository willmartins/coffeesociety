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
      <header className="pattern-overlay pattern-slash pattern-slash--training px-5 py-28 text-white">
        <div className="mx-auto max-w-[1100px]">
          <h1 className="m-0 font-[hoss-sharp,sans-serif] text-[40px] font-bold uppercase leading-[0.9] md:text-[60px]">
            {course.title}
          </h1>
          {course.duration ? <p>Course Duration: {course.duration}</p> : null}
          {course.enquireHref ? (
            <a className="pill" href={course.enquireHref}>
              ENQUIRE NOW
            </a>
          ) : null}
        </div>
      </header>
      <div className="mx-auto grid max-w-[1100px] gap-8 px-5 py-12">
        {course.imageUrl ? (
          <MediaFrame src={course.imageUrl} alt="" width={1024} height={700} />
        ) : null}
        <section>
          <h2>Course Information</h2>
          <p>{course.summary}</p>
        </section>
        <section>
          <h2>Course Outcomes</h2>
          <p>{course.outcomes}</p>
        </section>
        <section>
          <h2>Key Topics</h2>
          <ol>
            {course.keyTopics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ol>
        </section>
        <section>
          <h2>Useful Links</h2>
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
          <h2>Enquire Now</h2>
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
