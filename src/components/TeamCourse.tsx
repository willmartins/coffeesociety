import courses from "@/content/team-courses.json";
import { Trainers } from "./Trainers";
import type { Trainer } from "@/content/types";

export type TeamCourseDoc = (typeof courses)[number];

export function TeamCourse({ course, trainers }: { course: TeamCourseDoc; trainers: Trainer[] }) {
  return (
    <article>
      <header className="team-course-hero">
        <div className="wrap">
          <p className="chip chip--sm chip--olive chip--cream rot--2">In Person Training</p>
          <h1 className="mid">{course.title}</h1>
          {course.duration ? <p>Course Duration: {course.duration}</p> : null}
        </div>
      </header>
      <div className="team-course-stack">
        <section className="team-course-band">
          <h2 className="mid">Course Information</h2>
          <p>{course.intro}</p>
          <p>{course.body}</p>
        </section>
        <section className="team-topics">
          <div className="team-topics-copy">
            {course.topics.map((topic) => (
              <h2 key={topic}>{topic}</h2>
            ))}
          </div>
        </section>
        <section className="team-links">
          <div className="team-links-row">
          <div className="team-links-main">
            <h2>Useful Links</h2>
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
          </div>
          <div className="team-links-help">
            <h2>Here to help!</h2>
            <p>Want to learn more about Lavazza training and education? Contact our training team.</p>
            <a
              className="team-contact"
              href="mailto:keira.ebdon@lavazza.com?subject=I+want+to+know+more+about+my+Lavazza+training!+-+Web+Enquiry"
            >
              Contact
            </a>
          </div>
          </div>
        </section>
      </div>
      <Trainers trainers={trainers} />
    </article>
  );
}
