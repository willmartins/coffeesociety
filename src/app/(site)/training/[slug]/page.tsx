import { notFound } from "next/navigation";
import { TrainingProgramme } from "@/components/TrainingProgramme";
import { pageMeta } from "@/lib/meta";
import { getCourses, getTrainers } from "@/sanity/load";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const courses = await getCourses();
  const course = courses.find((item) => item.slug === slug);
  return pageMeta(course?.title ?? "Training", course?.summary ?? "");
}

export default async function TrainingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [courses, trainers] = await Promise.all([getCourses(), getTrainers()]);
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();
  return (
    <main>
      <TrainingProgramme course={course} trainers={trainers} />
    </main>
  );
}
