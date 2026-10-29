import seedJson from "@/content/seed.json";
import type {
  Block,
  CategoryDoc,
  CourseDoc,
  CourseTypeDoc,
  NavItem,
  ShortDoc,
  SiteSeed,
  TrackDoc,
  Trainer,
  VideoDoc,
} from "@/content/types";
import { client } from "./client";
import {
  CATEGORIES_QUERY,
  COURSES_QUERY,
  COURSE_TYPES_QUERY,
  FOOTER_QUERY,
  HOME_QUERY,
  NAVIGATION_QUERY,
  PAGE_QUERY,
  SETTINGS_QUERY,
  SHORTS_QUERY,
  TRACKS_QUERY,
  TRAINERS_QUERY,
  VIDEOS_QUERY,
} from "./queries";

const seed = seedJson as SiteSeed;

async function load<T>(
  query: string,
  params: Record<string, string>,
  tag: string,
  fallback: T,
): Promise<T> {
  if (!process.env.SANITY_API_READ_TOKEN) return fallback;
  try {
    const data = await client.fetch<T | null>(query, params, {
      next: { tags: [tag] },
    });
    if (data == null) return fallback;
    if (Array.isArray(data) && data.length === 0) return fallback;
    return data;
  } catch {
    return fallback;
  }
}

export function getSeed() {
  return seed;
}

export async function getSettings() {
  return load(SETTINGS_QUERY, {}, "siteSettings", seed.settings);
}

export async function getNavigation() {
  const items = await load(NAVIGATION_QUERY, {}, "navigation", seed.navigation);
  return (items ?? seed.navigation) as NavItem[];
}

export async function getFooter() {
  return load(FOOTER_QUERY, {}, "footer", seed.footer);
}

export async function getHome() {
  return load(HOME_QUERY, {}, "homePage", seed.home);
}

export async function getTrainers() {
  return load(TRAINERS_QUERY, {}, "homePage", seed.trainers) as Promise<Trainer[]>;
}

export async function getVideos() {
  return load(VIDEOS_QUERY, {}, "video", seed.videos) as Promise<VideoDoc[]>;
}

export async function getShorts() {
  return load(SHORTS_QUERY, {}, "video", seed.shorts) as Promise<ShortDoc[]>;
}

export async function getCategories() {
  return load(CATEGORIES_QUERY, {}, "videoCategory", seed.categories) as Promise<
    CategoryDoc[]
  >;
}

export async function getCourses() {
  return load(COURSES_QUERY, {}, "trainingOption", seed.courses) as Promise<CourseDoc[]>;
}

export async function getCourseTypes() {
  const remote = await load(COURSE_TYPES_QUERY, {}, "courseType", seed.courseTypes);
  const types = (remote ?? seed.courseTypes) as CourseTypeDoc[];
  return types.map((type) => {
    const local = seed.courseTypes.find((item) => item.slug === type.slug);
    return { ...type, cards: type.cards?.length ? type.cards : local?.cards ?? [] };
  });
}

export async function getTracks() {
  return load(TRACKS_QUERY, {}, "teamTrack", seed.tracks) as Promise<TrackDoc[]>;
}

export async function getPage(slug: string, fallbackKey: string) {
  const fallback = { title: slug, blocks: seed.pages[fallbackKey] ?? [] };
  const page = await load(PAGE_QUERY, { slug }, "page", fallback);
  const blocks = (page as { blocks?: Block[] } | null)?.blocks;
  if (!blocks?.length) return fallback;
  return page as { title: string; blocks: Block[] };
}
