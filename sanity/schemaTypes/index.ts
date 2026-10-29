import { defineArrayMember, defineField, defineType } from "sanity";

const link = defineArrayMember({
  type: "object",
  name: "link",
  fields: [
    defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "href", title: "Link", type: "string", validation: (rule) => rule.required() }),
  ],
});

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", title: "Site title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "logoUrl", title: "Logo", type: "url", description: "Header wordmark." }),
    defineField({ name: "badgeUrl", title: "Hero badge", type: "url" }),
    defineField({ name: "footerBadgeUrl", title: "Footer badge", type: "url" }),
    defineField({ name: "cookieTitle", title: "Cookie notice title", type: "string" }),
    defineField({ name: "cookieBody", title: "Cookie notice text", type: "text" }),
  ],
});

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "items",
      title: "Menu items",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({
              name: "groups",
              title: "Groups",
              type: "array",
              of: [
                defineArrayMember({
                  type: "object",
                  fields: [
                    defineField({ name: "label", title: "Group label", type: "string" }),
                    defineField({ name: "links", title: "Links", type: "array", of: [link] }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});

export const footer = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({ name: "quickLinks", title: "Quick links", type: "array", of: [link] }),
    defineField({ name: "compliance", title: "Compliance links", type: "array", of: [link] }),
    defineField({ name: "legal", title: "Legal line", type: "text" }),
  ],
});

export const homePage = defineType({
  name: "homePage",
  title: "Home",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "joinTitle", title: "Join title", type: "string" }),
    defineField({ name: "joinBody", title: "Join text", type: "text" }),
    defineField({ name: "joinHref", title: "Join link", type: "url" }),
    defineField({ name: "joinLabel", title: "Join button label", type: "string" }),
    defineField({ name: "featuredTitle", title: "Featured heading", type: "string" }),
    defineField({
      name: "collections",
      title: "Featured collections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "label", type: "string", title: "Label" }),
            defineField({ name: "href", type: "string", title: "Link" }),
            defineField({ name: "imageUrl", type: "url", title: "Image" }),
          ],
        }),
      ],
    }),
    defineField({ name: "shortsHeading", title: "Shorts heading", type: "string" }),
    defineField({ name: "shortsKicker", title: "Shorts kicker", type: "string" }),
    defineField({ name: "closingTitle", title: "Closing title", type: "string" }),
    defineField({ name: "closingSubtitle", title: "Closing subtitle", type: "string" }),
    defineField({ name: "latteImageUrl", title: "Join image", type: "url" }),
    defineField({
      name: "trainers",
      title: "Trainers",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", type: "string", title: "Name" }),
            defineField({ name: "role", type: "text", title: "Description" }),
          ],
        }),
      ],
    }),
  ],
});

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({
      name: "blocks",
      title: "Content",
      description: "Headings and paragraphs in reading order.",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "type", title: "Kind", type: "string" }),
            defineField({ name: "text", title: "Text", type: "text" }),
            defineField({ name: "href", title: "Link", type: "string" }),
          ],
        }),
      ],
    }),
  ],
});

export const videoCategory = defineType({
  name: "videoCategory",
  title: "Video category",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Description", type: "text" }),
    defineField({ name: "sortOrder", title: "Order", type: "number" }),
  ],
});

export const video = defineType({
  name: "video",
  title: "Video",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({
      name: "kind",
      title: "Kind",
      type: "string",
      options: { list: ["video", "short"] },
      validation: (rule) => rule.required(),
    }),
    defineField({ name: "excerpt", title: "Summary", type: "text" }),
    defineField({ name: "kicker", title: "Kicker", type: "string" }),
    defineField({ name: "imageUrl", title: "Thumbnail", type: "url", description: "Poster image. Leave the video files empty until they are carried over." }),
    defineField({ name: "beforeVideoUrl", title: "Before video", type: "url", description: "Optional. Leave blank until the file is ready." }),
    defineField({ name: "afterVideoUrl", title: "After video", type: "url", description: "Optional. Leave blank until the file is ready." }),
    defineField({ name: "category", title: "Category", type: "reference", to: [{ type: "videoCategory" }] }),
    defineField({ name: "categoryDescription", title: "Category blurb", type: "text" }),
    defineField({ name: "previous", title: "Previous video", type: "reference", to: [{ type: "video" }] }),
    defineField({ name: "next", title: "Next video", type: "reference", to: [{ type: "video" }] }),
    defineField({ name: "sortOrder", title: "Order", type: "number" }),
  ],
});

export const courseType = defineType({
  name: "courseType",
  title: "Course type",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Introduction", type: "text" }),
  ],
});

export const trainingOption = defineType({
  name: "trainingOption",
  title: "Training option",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "duration", title: "Duration", type: "string" }),
    defineField({ name: "summary", title: "Course information", type: "text" }),
    defineField({ name: "outcomes", title: "Course outcomes", type: "text" }),
    defineField({ name: "keyTopics", title: "Key topics", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "imageUrl", title: "Image", type: "url" }),
    defineField({ name: "courseType", title: "Course type", type: "reference", to: [{ type: "courseType" }] }),
    defineField({ name: "viewAllHref", title: "View all link", type: "string" }),
    defineField({ name: "enquireHref", title: "Enquire link", type: "string" }),
    defineField({ name: "newsletterHref", title: "Newsletter link", type: "url" }),
    defineField({ name: "sortOrder", title: "Order", type: "number" }),
  ],
});

export const teamTrack = defineType({
  name: "teamTrack",
  title: "Team track",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Team", type: "string", validation: (rule) => rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (rule) => rule.required() }),
    defineField({ name: "description", title: "Introduction", type: "text" }),
    defineField({ name: "sortOrder", title: "Order", type: "number" }),
  ],
});

export const form = defineType({
  name: "form",
  title: "Form",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "originalAction",
      title: "Original destination",
      type: "url",
      description: "Where the WordPress form used to post. This site logs the submission and does not forward it.",
    }),
    defineField({
      name: "fields",
      title: "Fields",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "name", title: "Field name", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "fieldType", title: "Type", type: "string" }),
            defineField({ name: "required", title: "Required", type: "boolean" }),
          ],
        }),
      ],
    }),
  ],
});

export const schemaTypes = [
  siteSettings,
  navigation,
  footer,
  homePage,
  page,
  videoCategory,
  video,
  courseType,
  trainingOption,
  teamTrack,
  form,
];
