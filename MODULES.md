# Modules

| Name | Component file | Sanity schema type | Where it is used | Description |
| --- | --- | --- | --- | --- |
| Site shell | `src/app/(site)/layout.tsx` | `siteSettings`, `navigation`, `footer` | Site pages, not `/studio` | Header, footer and cookie notice for the public site. |
| Site header | `src/components/SiteHeader.tsx` | `navigation` | Site pages, not `/studio` | Logo, mega menu and portal login link. |
| Site footer | `src/components/SiteFooter.tsx` | `footer` | Site pages, not `/studio` | Badge, quick links, compliance links and legal line. |
| Cookie notice | `src/components/CookieNotice.tsx` | `siteSettings` | Site pages, not `/studio` | Cookie banner with the live notice copy. |
| Hero banner | `src/components/HeroBanner.tsx` | `homePage` | Home | Caring about coffee hero with the slash texture. |
| Join society | `src/components/JoinSociety.tsx` | `homePage` | Home | Navy mailing-list band and latte image. |
| Featured collections | `src/components/FeaturedCollections.tsx` | `homePage` | Home | Pink band, spoon graphic, two collection cards. |
| Shorts grid | `src/components/ShortsGrid.tsx` | `video` | Home | Six society shorts with the grain treatment. |
| Closing banner | `src/components/ClosingBanner.tsx` | `homePage` | Home | Coffee Society closing line and stamp. |
| Archive listing | `src/components/ArchiveListing.tsx` | `videoCategory`, `teamTrack` | Video, shorts, training and topic archives, team tracks | Shared archive, including the live empty states. |
| Course type listing | `src/components/CourseTypeListing.tsx` | `courseType` | `/course-type/[slug]` | Education programme cards on the cup pattern. |
| Video single | `src/components/VideoSingle.tsx` | `video` | `/video/[slug]` | Lesson page. Video files stay empty. |
| Short single | `src/components/ShortSingle.tsx` | `video` | `/shorts/[slug]` | Short page with an empty player. |
| Training programme | `src/components/TrainingProgramme.tsx` | `trainingOption` | `/training/[slug]` | In-person course detail. |
| Team hub | `src/components/TeamHub.tsx` | `page` | `/lavazza-team` | Lavazza team picker. |
| Portal login | `src/components/PortalLogin.tsx` | `form` | `/customer-portal`, `/portal` | Static login. It does not authenticate. |
| Rich page | `src/components/RichPage.tsx` | `page` | Terms, cookies, challenge | Heading and paragraph pages. |
| Comment form | `src/components/CommentForm.tsx` | `form` | `/hello-world` | WordPress comment fields, logged and not stored. |
| Trainers | `src/components/Trainers.tsx` | `homePage` | Archives and course pages | Dave, Mia, Christian and Teela. |
| Video placeholder | `src/components/VideoPlaceholder.tsx` | `video` | Video and short pages | Empty player frame. No video file. |
| Media frame | `src/components/MediaFrame.tsx` | `siteSettings` | Header, footer, join band | Image helper for local and live assets. |
