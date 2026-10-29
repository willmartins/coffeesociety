export type Block = {
  type: string;
  text: string;
  href?: string;
};

export type NavLink = { label: string; href: string };

export type NavGroup = { label: string; links: NavLink[] };

export type NavItem = { label: string; groups: NavGroup[] };

export type Trainer = { name: string; role: string };

export type VideoDoc = {
  slug: string;
  title: string;
  excerpt: string;
  kind: "video";
  categorySlug: string;
  categoryTitle: string;
  categoryDescription: string;
  imageUrl: string;
  beforeVideoUrl: string;
  afterVideoUrl: string;
  previousSlug: string;
  nextSlug: string;
  previousTitle: string;
  nextTitle: string;
  sortOrder: number;
};

export type ShortDoc = {
  slug: string;
  title: string;
  kicker: string;
  kind: "short";
  imageUrl: string;
  beforeVideoUrl: string;
  afterVideoUrl: string;
  sortOrder: number;
};

export type CourseDoc = {
  slug: string;
  title: string;
  duration: string;
  courseType: string;
  summary: string;
  outcomes: string;
  keyTopics: string[];
  imageUrl: string;
  viewAllHref: string;
  enquireHref: string;
  newsletterHref: string;
  sortOrder: number;
};

export type CourseTypeDoc = {
  slug: string;
  title: string;
  description: string;
  cards: { title: string; blurb: string }[];
};

export type TrackDoc = {
  slug: string;
  title: string;
  description: string;
  sortOrder: number;
};

export type CategoryDoc = {
  slug: string;
  title: string;
  description: string;
  sortOrder: number;
};

export type SiteSeed = {
  settings: {
    siteTitle: string;
    logoUrl: string;
    badgeUrl: string;
    footerBadgeUrl: string;
    cookieTitle: string;
    cookieBody: string;
  };
  navigation: NavItem[];
  footer: {
    quickLinks: NavLink[];
    compliance: NavLink[];
    legal: string;
  };
  home: {
    heroTitle: string;
    joinTitle: string;
    joinBody: string;
    joinHref: string;
    joinLabel: string;
    featuredTitle: string;
    collections: { label: string; href: string; imageUrl: string }[];
    shortsHeading: string;
    shortsKicker: string;
    closingTitle: string;
    closingSubtitle: string;
    latteImageUrl: string;
  };
  trainers: Trainer[];
  categories: CategoryDoc[];
  videos: VideoDoc[];
  shorts: ShortDoc[];
  courses: CourseDoc[];
  courseTypes: CourseTypeDoc[];
  tracks: TrackDoc[];
  pages: Record<string, Block[]>;
  forms: {
    login: {
      originalAction: string;
      redirectTo: string;
      title: string;
      intro: string;
    };
    comment: { originalAction: string };
  };
};
