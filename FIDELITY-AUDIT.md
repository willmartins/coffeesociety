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
- **Lavazza team courses** (`/lavazza-team/courses/` and the seven lesson URLs) use template `post-2122`. Those routes are not in this replica.
- **Challenge page decorations.** `post-3671.css` returns 404, so the challenge page uses the shared article layout and the existing copy, not the missing stylesheet.
- **Training single interior.** Outcomes, topics and links are present. The live page also stacks several one-off image bands that are not rebuilt one for one.
- **Header mega menu.** Labels, colour, type and panel size match. The live menu is an Elementor mega menu with icon rows and a lift on hover. The replica uses a dropdown.
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

## Checks

`pnpm typecheck` and `pnpm lint` are run on each round. `pnpm build` is run before the last push.
