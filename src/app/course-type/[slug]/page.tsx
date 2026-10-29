import { notFound } from "next/navigation";
import { CourseTypeListing } from "@/components/CourseTypeListing";
import { pageMeta } from "@/lib/meta";
import { getCourses, getCourseTypes, getTrainers } from "@/sanity/load";

export async function generateStaticParams() {
  const types = await getCourseTypes();
  return types.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const types = await getCourseTypes();
  const type = types.find((item) => item.slug === slug);
  return pageMeta(type?.title ?? "Courses", type?.description ?? "");
}

export default async function CourseTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [types, courses, trainers] = await Promise.all([
    getCourseTypes(),
    getCourses(),
    getTrainers(),
  ]);
  const type = types.find((item) => item.slug === slug);
  if (!type) notFound();
  const cards = type.cards.map((card) => {
    const course = courses.find((item) => item.title === card.title);
    return { ...card, href: course ? `/training/${course.slug}/` : undefined };
  });
  return (
    <main>
      <CourseTypeListing courseType={{ ...type, cards }} trainers={trainers} />
    </main>
  );
}
