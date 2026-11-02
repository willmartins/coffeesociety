import { notFound } from "next/navigation";
import { TeamCourse } from "@/components/TeamCourse";
import courses from "@/content/team-courses.json";
import { pageMeta } from "@/lib/meta";
import { getTrainers } from "@/sanity/load";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  return pageMeta(course ? `${course.title} - Coffee Society by Lavazza` : "Course", course?.intro ?? "");
}

export default async function TeamCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();
  const trainers = await getTrainers();
  return (
    <main>
      <TeamCourse course={course} trainers={trainers} />
    </main>
  );
}
