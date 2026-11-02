# Fidelity audit: coffee-society.co.uk

Compared with the live Elementor site on 30 October 2026. Values come from the live Elementor CSS (`post-6`, `post-645`, `post-2795`, `post-136`, `post-1436`, `post-227`, `post-340`, `post-774`, `post-763`, `post-1444`, `post-1056`, `post-1063`, `post-1987`, `post-1008`, `post-1020`, `post-20`, `post-36`) and from `getComputedStyle` on the replica after the fix. Breakpoints follow Elementor: 1440 and 1024 as desktop/tablet, 768 inside the tablet band, 390 inside the mobile band (max-width 767px).

Videos stay empty. Copy is taken from the live pages. Design-audit “improvements” (larger footer padding, one button style, removing the 2 degree rotation, and so on) were not applied.

## Issues

| # | Page | Breakpoint | Element | Live | Replica before | Status |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Home | 1440 / 1024 / 390 | Featured card titles | Navy `#1C3567` block, 2deg, hot pink type, padding 15px 30px, Hoss Sharp 60 / 44 / 30px. Second card beige `#D9D2C4`, −3deg | Plain white text, no block | Fixed |
| 2 | Home | 1440 / 1024 / 390 | Shorts card titles | Olive `#627C2F` block, 2deg, cream `#D9D2C4` type, padding 15px 30px, 18px | White text on the photo | Fixed |
| 3 | Home | 1440 | Shorts grid | 4 columns, card min-height 450px | 3 columns | Fixed. 3 columns at max-width 1024px, 1 column at 390px |
| 4 | Home | 1440 | Hero heading | 240px, line-height 0.75em, letter-spacing −9px, `#FD26DC` | Same sizes, badge not rotated | Fixed. Badge 356px, −7deg, padding-left 67px |
| 5 | Home | 1024 | Hero offset | `margin-top: -168px`, heading 168px / −4px | No negative margin | Fixed. 0 at 390px, heading 68px / −1.5px |
| 6 | Home | 390 | Hero badge | Width 402px, margin-bottom −41px | Hidden under `md` | Fixed |
| 7 | Home | 1440 / 1024 / 390 | Join photo | −4deg, 10px olive border, radius 180px, height 392 / 500 / 175px | Border and radius only | Fixed |
| 8 | Home | 1440 | Join band | Min-height 650px, gap 60px, padding-top 100px, heading cream display type, body 22px / 600 | Generic grid | Fixed |
| 9 | Home | 1440 | Featured band | Pink `#FFA7B2`, padding 70px 0 80px, spoon graphic, cards 49% / min-height 360px / padding 56px, gradient overlay | Simplified cards | Fixed. Padding 24px from 1024px down |
| 10 | Home | 1440 / 1024 / 390 | Closing line | 200px / line-height 150px / −5px, then 175px, then 79px. Subtitle 69px weight 600 aqua, then 28px. Stamp 58% | Smaller type, no blend | Fixed |
| 11 | All | 1440 | Page background | Vintage sketch pad, repeat-y, contain, cream `#EFE9DC` | Spoon pattern, cover | Fixed |
| 12 | All | 1440 | Header menu | Montserrat 16px / 600, uppercase, aqua `#00A6C2`, padding 10px 20px 10px 27px, hover navy | 16px navy, even padding | Fixed |
| 13 | All | 1440 | Header dropdown | 400px, group titles Hoss Sharp 25px / 800 olive | Small grey labels | Fixed |
| 14 | All | 1440 / 390 | Logo | 175×130px desktop, 120×119px mobile | 175×130 and 120×90 | Fixed |
| 15 | All | 390 | Mobile menu | Icon button, off-canvas about 80% wide, white | Text button “Menu” | Fixed |
| 16 | All | 1440 / 1024 / 390 | Footer | Padding 12px 0, badge 95 / 154 / 90px, columns 50/25/25 then 40/30/30, legal Poppins 12px | Padding 28px, legal 12px Montserrat | Fixed |
| 17 | Course type | 1440 / 1024 / 390 | Hero | 184 / 95 / 55px aqua, letter-spacing −9 / −4 / −1.5px, slash on navy, badge −7deg | 90px white heading | Fixed |
| 18 | Course type | 1440 | Course cards | White row, image 50% height 423px object-position bottom, title chip aqua −1deg, “Learn more” uppercase. Hover lifts 8px | Translucent blocks, no images | Fixed. Mobile card width 1600px kept as on the live template |
| 19 | Course type, archives | 1440 / 768 / 390 | Trainers | Photo cards, bio in white, name on a coloured chip (pink 4deg, aqua 2deg, beige −2deg, olive −2deg). 4 / 2 / 1 columns | Name and role as text | Fixed |
| 20 | Archives | 1440 | Empty listings | “Videos” then “No data was found” twice, “Courses” twice. Shorts archive heading is the Barista Skills introduction | One empty line, plain list | Fixed |
| 21 | Topic archives | 1440 / 1024 / 390 | Video cards | Photo card, title Hoss Sharp 45px hot pink with a navy highlighter behind each line. Shorts use the olive chip. Empty line still prints above the cards | Text links only | Fixed |
| 22 | Video | 1440 | Lesson | Aqua field, spoon graphic, title twice, player radius 20px, margin-top 145px | Single title, square player | Fixed. Player stays empty |
| 23 | Short | 1440 | Lesson | Title on an aqua bar, kicker on a pink chip at −2deg, frame rotated 2deg, radius 50px | Plain heading | Fixed |
| 24 | Lavazza team | 1440 / 1024 / 390 | Team picker | Photo cards, Poppins 18px / 500 white, radius 5px, 3 / 2 / 1 columns, dark gradient | Text pills | Fixed |
| 25 | Customer portal | 1440 | Login | White band, display heading, uppercase labels, square aqua button | Navy pill on cream | Fixed |
| 26 | Portal | 1440 | Hub | “welcome back”, heading “Fallback”, video rows (the same ten titles twice) and an empty “No data was found” | Login form | Fixed |
| 27 | Terms, cookies, challenge | 1440 / 390 | Article | Margin-top about 120px, heading 60 / 44 / 30px, white sheet | Tight cream column | Fixed for the type and sheet. Challenge decorations from `post-3671.css` could not be read (the file 404s) |
| 28 | Training single | 1440 | Hero | Slash hero, mid display title, pink pill radius 58px | Small heading | Fixed for the hero and buttons. The long run of decorative bands on `post-1987` is only partly carried over |
| 29 | Home shorts, cards | 1440 | Hover | Card lifts 8px, cubic-bezier return | None | Fixed on course cards (`.niz-bounce`) |
| 30 | All | 1440 | Body type | Montserrat 16px, line-height 1.2, colour `#051521` | Inherited size | Fixed |

## Not fully closed

- **Cookie notice.** The live site loads Cookiebot. The replica keeps the notice copy from the seed and does not embed the Cookiebot script.
- **Challenge page decorations.** `post-3671.css` returns 404, so the challenge page uses the shared article layout and the existing copy, not the missing stylesheet.
- **Training single interior.** Outcomes, topics and links are present. The live page also stacks several one-off image bands that are not rebuilt one for one.
- **Header mega menu.** The open panel is the full-width Elementor layer (1440×194) with the 400×175 white card. It does not add icon rows that are not in the live menu markup.
- **Some trainer photographs** returned 403 to headless Chrome in this environment (`lavazzateam.jpg`). The URLs match the live page and respond 200 to a normal fetch.

## Round log

Pixel diffs use pixelmatch at threshold 0.2 on full-page screenshots scaled to 480px wide, with the shorter page padded in white. Side-by-side images are in the fidelity artifacts folder. Live pages are loaded through a fetch that uses a non-browser user agent, because headless Chrome is challenged by the host. A failed remote image therefore shows up as a difference even when the markup matches.

### Round 1

Baseline on commit `d66dafd`, before this round’s fixes. 1440px and 1024px covered all 82 crawled pages. 768px was cut off when the capture process stopped (18 pages). 390px was not captured in this pass.

| Width | Pages measured | Mean diff | Median |
| --- | --- | --- | --- |
| 1440 | 82 | 51.49% | 51.57% |
| 1024 | 82 | 60.50% | 61.07% |
| 768 | 18 | 51.77% | 54.56% |

Worst at 1440px: short lessons about 76% (the replica page was a tall stack; the live page is one short row), training archive 72% (a dark slash block the live page does not open with), video lessons about 55–59%. Best: cookie policy 20%, Lavazza team 22%, hello world 27%, home 36%.

What differed, from the side-by-side images and the live DOM:

- Menu titles are white pills (radius 40px, aqua type). The portal control is a navy pill, radius 43px.
- Short lessons put the aqua title and the pink “society shorts” chip beside a small player, then the footer.
- Home shorts are a horizontal slider with arrows and dots, not a static grid.
- The closing stamp sits to the right of the words, as its own image.
- The training archive opens with the olive badge and a navy band with the pink cup, not a full slash hero.
- Video players were an empty navy frame. The live player is a Presto/Vimeo frame. Posters in the HTML are empty, so the replica now fills the same 16:9 frame with that lesson’s live thumbnail.

Fixed in this round: those header pills, the short-lesson row, the shorts slider, the stamp, the training-archive top, thumbnail-filled players, the seven `/lavazza-team/courses/` lessons with copy taken from the live pages, and `/video/page/3/`.

### Round 2

Full capture after round 1, all 82 pages at 1440, 1024, 768 and 390. One page errored.

| Width | Mean diff |
| --- | --- |
| 1440 | 53.27% |
| 1024 | 56.82% |
| 768 | 58.11% |
| 390 | 61.09% |

Short lessons fell from about 76% to 18–28%. Training archive fell from 72% to 61%. Home rose from 36% to 50% because the closing stamp and the shorts slider shifted the lower half of the page. Video lessons rose to about 68%: the page was the wrong height, so every row below the title was compared with the wrong band.

### Round 3

Section boxes were measured with `getBoundingClientRect` on the live DOM and copied onto the replica:

- Home featured 712px, shorts 921px, closing 795px, footer 208px. Those four now start at the same scroll positions as the live page (1370, 2082, 3003, 3798).
- A video lesson’s top band is 617px from y=145, and the category band under it is 506px. The replica uses the lesson thumbnail inside that player frame.
- Archives without a title (training, team courses) open with a 720px badge band and a 540px navy band, which is what `/training/` measures.

Full capture of all 82 pages, no errors:

| Width | Round 1 mean | Round 2 mean | Round 3 mean |
| --- | --- | --- | --- |
| 1440 | 51.49% | 53.27% | 45.92% |
| 1024 | 60.50% | 56.82% | 54.57% |
| 768 | 51.77% (18 pages) | 58.11% | 53.04% |
| 390 | not captured | 61.09% | 57.95% |

At 1440px, short lessons are about 17–31% (from 76%). Video lessons average 47% (from 68% in round 2). The training archive is 34% (from 72% in round 1). Home is 50%: the bands now start at the same scroll positions as the live page, and the remaining red is photo crop, chip position and font edges. Customer portal was 72% because the live form sits on the right (x=860, width 520); that card is now right-aligned. Challenge page and team-course lessons stay around 55–62% where the live page has one-off decoration this pass does not rebuild shape for shape.

What still differs, and why:

- Home and course heroes: the photograph crop and the exact place of the title chip inside each card. The section boxes match; the pixels inside them do not.
- Video player: the live frame is a Presto/Vimeo player with an empty poster attribute. The replica uses that lesson’s live thumbnail at 16:9 in the same box. It is not a screenshot of the Vimeo chrome.
- Mega menu: closed state is white pills, which matches the measured menu title. The open Elementor panel (icons, hover lift) is a dropdown.
- Cookiebot is not embedded.
- `post-3671.css` for the challenge page still 404s on the live host.

### Round 4

Same 82 pages, now waiting for `document.fonts.ready` and images, with animation off and the cookie banner hidden. Full-page means barely moved, because most pages were not part of this pass. Section boxes on the home page tell the real story at 1440px:

| Section | Diff |
| --- | --- |
| Hero | 13.4% |
| Join | 14.1% |
| Featured | 31.8% |
| Shorts | 43.7% |
| Closing | 13.9% |
| Footer | 3.8% |
| Full page | 49.2% |

The hero badge, heading and featured card now share the live page’s measured boxes at 1440px (badge 772×405, card 34,1632 676×360). At 390px the badge is 147×168 against the live 146×167.

| Width | Round 3 full page | Round 4 full page |
| --- | --- | --- |
| 1440 | 45.92% | 45.77% |
| 1024 | 54.57% | 54.61% |
| 768 | 53.04% | 53.04% |
| 390 | 57.95% | 57.98% |

### Round 5

Player frames were captured from the live Presto player and stored in `public/assets/placeholders/`. Video lessons put that still on the left and the aqua title on the right. Course “Learn more” is navy. Team lessons use a navy spoon hero and a pink information band. Menu pills gained the live chevron.

| Width | Round 4 | Round 5 |
| --- | --- | --- |
| 1440 | 45.77% | 43.92% |
| 1024 | 54.61% | 55.58% |
| 768 | 53.04% | 53.71% |
| 390 | 57.98% | 56.54% |

At 1440px, video lessons moved from 46.7% to 43.0% (the player band on Pouring & Latte Art from 67% to 47%). Team-course lessons moved from 55.5% to 48.9%. Short lessons stayed near 25%. Home sections were unchanged from round 4: hero 13.4%, join 14.1%, featured 31.8%, shorts 43.7%, closing 13.9%, footer 3.8%.

The shorts section stays high because the comparison fetch often does not paint the live card photographs, so a filled replica card is scored against a blank live card. The olive chips, four-up row, arrows and dots are in place.

### Round 6

The home shorts row was reordered to the live listing (crema, dirty, one side, watery, slow, fast). A further full 82-page pass was not run for that reorder alone. Priority sections after rounds 4 and 5:

| Page / section | 1440 diff |
| --- | --- |
| Home hero | 13.4% |
| Home join | 14.1% |
| Home featured | 31.8% |
| Home shorts | 43.7% |
| Home closing | 13.9% |
| Home footer | 3.8% |
| Course card | 29.4% |
| Video player band | 47.1% |
| Video category band | 24.1% |

What remains after round 6:

- Featured cards and the home shorts row. Chip type matches (navy/beige, 2° and −3°, 15px 30px). The leftover is photograph grading and, for shorts, images the comparison host does not return.
- Video player chrome. The still is a capture of the live player, but the column widths beside the cream text panel are not identical, so the band is still about 47%.
- Team-course lessons, about 49%. The pink band and navy hero are in. The live page has more one-off blocks around the trainers.
- The open mega menu is a white panel under the pill (olive heading, aqua links, chevron on the pill). It is not the full Elementor content width with every icon.
- Challenge decorations. `post-3671.css` still 404s.
- Cookiebot is not embedded.

### Round 7

Same 82 pages, fonts ready, images waited, animation off, cookie banner hidden. Section diffs are scaled to 400px wide at pixelmatch threshold 0.2, same as the full page.

| Width | Round 5 full page | Round 7 full page |
| --- | --- | --- |
| 1440 | 43.92% | 38.32% |
| 1024 | 55.58% | 46.50% |
| 768 | 53.71% | 48.02% |
| 390 | 56.54% | 55.37% |

Home sections at 1440px, before this round and after:

| Section | Round 5 | Round 7 |
| --- | --- | --- |
| Hero | 13.4% | 13.37% |
| Join | 14.1% | 14.10% |
| Featured | 31.8% | 2.68% |
| Shorts | 43.7% | 4.97% |
| Closing | 13.9% | 40.14% |
| Footer | 3.8% | 3.84% |
| Open menu | not measured | 7.71% |

Other priority sections at 1440px: course card 29.4% to 7.42%. Pouring & Latte Art player band 47.1% to 16.74% (category band stayed 24.13%). Team lesson hero 26.0%, pink band 20.82%, useful-links split 13.12%. The lesson page fell from about 49% to 29.8%, and the seven team lessons together average 28.8% (from 48.9%). Video lessons average 36.46% (from 43.0%).

What changed: both featured chips are centred, with the live coffee filter, grain and a 10% dark overlay. Short cards are 310px with a 20px gap, resting on slow, fast, crema, dirty. The video row is 883px and 455px with 45px of cream padding. Course cards are 550×423 with the photograph anchored to the bottom. Team lessons gained the cream and navy useful-links panel and the Contact button from the live template. The open menu is a 1440×194 layer with the 400×175 white card at x=371.

The closing band rose to 40% because the stamp was still a side image while the live stamp is a centred background. That is corrected after this capture and scored in the next round.

### Round 8

The closing stamp is now the live centred background, the shorts band is 883px so the closing and footer start on the live scroll positions, and the card rows use the live width at each breakpoint (310px at 1440, three-up at 1024 and 768, full width at 390). Featured cards land on the measured boxes at every width.

| Width | Round 7 full page | Round 8 full page | Home full page |
| --- | --- | --- | --- |
| 1440 | 38.32% | 38.99% | 22.00% (was 43.34%) |
| 1024 | 46.50% | 47.60% | 25.38% (was 52.56%) |
| 768 | 48.02% | 49.88% | 32.34% (was 53.20%) |
| 390 | 55.37% | 55.10% | 40.50% (was 58.74%) |

Home sections at 1440px: hero 13.37%, join 14.10%, featured 2.68%, shorts 6.26%, closing 42.23%, footer 3.84%, open menu 7.71%. Featured at 1024 fell from 34.54% to 3.45%, and at 390 from 13.81% to 2.38%. The player band on Pouring & Latte Art is 15.76% at 1440 and 21.35% at 1024 (was 55.68% before the columns stacked the way the live lesson does).

The site-wide mean barely moved because the stamp was still fully opaque. The live stamp is a 50% overlay blend. Shorts at 1024, 768 and 390 stayed near 40% because the resting slide is not the desktop window: tablet opens on the fast shot, and 390 opens on crema.

### Round 9

The stamp uses the live 50% overlay blend. Below 1025px the shorts row opens on the live resting slide (the fast shot at 1024 and 768, crema at 390). One page timed out at 390px (`/topic/coffee-duos/`).

| Width | Round 8 full page | Round 9 full page | Home |
| --- | --- | --- | --- |
| 1440 | 38.99% | 39.11% | 22.00% |
| 1024 | 47.60% | 47.80% | 25.71% |
| 768 | 49.88% | 49.64% | 32.60% |
| 390 | 55.10% | 55.00% (81 pages) | 39.90% |

Home sections at 1440px: hero 13.37%, join 14.10%, featured 6.85%, shorts 6.26%, closing 42.31%, footer 3.84%, open menu 7.71%. The player band is 16.74%. Course cards are 7.42% (SCA) and 6.18% (Lavazza). Team lesson hero 26.0%, pink band 20.82%, useful-links panel 13.12%.

The closing section stayed near 42% because the headline column was the full content width, so “Bringing coffee people together” sat on one line. The live column is 858px from x=20, and the line wraps. After round 9 that column was set to 858px with the heading 169px from the top of the band. A home-only reshoot, same method, put the closing section at 2.89% (from 42.31%) and the home page at 21.32% (from 22.00%).

## What remains

- Hero and join photographs. The boxes match. The leftover is about 13% to 14% and is mostly the photograph edges and the display type.
- Shorts below 1440px stay near 40%. The card widths and the resting titles match. The comparison browser often does not paint the live card photographs, so a filled card is scored against a blank one.
- Course cards below 1440px (about 35% to 43%). At 1440px they are about 6% to 7%.
- Team lesson hero below 1440px (about 50% to 57%). The desktop hero, pink band and split links panel are in.
- Video category band, about 24% at 1440px. The player column is 16.74% with the live still in the 883×527 frame.
- Challenge decorations. `post-3671.css` still 404s.
- Cookiebot is not embedded.

## Checks

`pnpm typecheck` passes. `pnpm lint` still warns on the existing Typekit link. `pnpm build` passes (89 pages).
