import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(`*[_id == "homePage"][0]{
  heroTitle, joinTitle, joinBody, joinHref, joinLabel, featuredTitle,
  collections[]{label, href, imageUrl},
  shortsHeading, shortsKicker, closingTitle, closingSubtitle, latteImageUrl
}`);

export const SETTINGS_QUERY = defineQuery(`*[_id == "siteSettings"][0]{
  siteTitle, logoUrl, badgeUrl, footerBadgeUrl, cookieTitle, cookieBody
}`);

export const NAVIGATION_QUERY = defineQuery(`*[_id == "navigation"][0].items`);

export const FOOTER_QUERY = defineQuery(`*[_id == "footer"][0]{
  quickLinks[]{label, href}, compliance[]{label, href}, legal
}`);

export const VIDEOS_QUERY = defineQuery(`*[_type == "video" && kind == "video"] | order(sortOrder asc) {
  "slug": slug.current, title, excerpt, kind, imageUrl, beforeVideoUrl, afterVideoUrl,
  "categorySlug": category->slug.current, "categoryTitle": category->title,
  categoryDescription, sortOrder,
  "previousSlug": previous->slug.current, "nextSlug": next->slug.current,
  "previousTitle": previous->title, "nextTitle": next->title
}`);

export const SHORTS_QUERY = defineQuery(`*[_type == "video" && kind == "short"] | order(sortOrder asc) {
  "slug": slug.current, title, kicker, kind, imageUrl, beforeVideoUrl, afterVideoUrl, sortOrder
}`);

export const CATEGORIES_QUERY = defineQuery(`*[_type == "videoCategory"] | order(sortOrder asc) {
  "slug": slug.current, title, description, sortOrder
}`);

export const COURSES_QUERY = defineQuery(`*[_type == "trainingOption"] | order(sortOrder asc) {
  "slug": slug.current, title, duration, summary, outcomes, keyTopics, imageUrl,
  viewAllHref, enquireHref, newsletterHref, sortOrder,
  "courseType": courseType->slug.current
}`);

export const COURSE_TYPES_QUERY = defineQuery(`*[_type == "courseType"]{
  "slug": slug.current, title, description
}`);

export const TRACKS_QUERY = defineQuery(`*[_type == "teamTrack"] | order(sortOrder asc) {
  "slug": slug.current, title, description, sortOrder
}`);

export const PAGE_QUERY = defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  title, blocks
}`);

export const TRAINERS_QUERY = defineQuery(`*[_id == "homePage"][0].trainers`);
