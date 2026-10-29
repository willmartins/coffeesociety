# Design audit of coffee-society.co.uk

Measured from the live Elementor CSS (kit `post-6.css`, home `post-645.css`, course type `post-340.css`, training single `post-1987.css`, header `post-2795.css`, footer `post-136.css`) and from the rendered HTML. These are notes only. Nothing here has been applied to the replica.

## Spacing and layout

1. **Home hero, negative margin.** Page `/`, container `13a056e`. Desktop `margin-top: -168px` while the header is `position: absolute`. The hero is pulled under the header, then the heading is `240px` with `letter-spacing: -9px` and `line-height: 0.75em`. On a 1440px window the last letters can collide with the badge. **Fix:** set hero `margin-top` to `0`, keep the header in normal flow, and cap the heading at `90px` / `line-height: 0.9` / `letter-spacing: -2px` (the kit display size).

2. **Shorts section padding typo.** Page `/`, container `69249e7`. `padding-bottom: 080px` (the same as `80px`) next to `padding-top: 70px`. The 10px difference is accidental. **Fix:** use `padding: 80px 0` on both edges.

3. **Two container widths.** Kit and home use `max-width: 1400px`. Course-type and training-track templates use `1600px` (`post-340` listing, and the mobile rule on template `227` sets a card to `width: 1600px`). Cards jump wider on course pages than on the home page. **Fix:** one content width, `1400px`, including course listings.

4. **Widget gap versus section gap.** Kit sets `--widgets-spacing: 20px` and `.elementor-widget:not(:last-child) { margin-block-end: 20px }`. Home join band uses `gap: 60px` and `min-height: 650px`. Featured band uses `gap: 20px` but `padding-bottom: 80px` and `padding-top: 40px`. The rhythm is 20, 40, 60 and 80 with no scale. **Fix:** section padding `80px 20px`, internal gaps `20px`, and drop the extra 60px join gap.

5. **Header logo size changes by breakpoint without a matching header height.** Desktop logo `175×130px` (`post-2795`). Tablet/mobile logo `120×119px`. Menu titles use `padding: 10px 20px 10px 27px` (4px more on the left than the right). **Fix:** one logo box, `140×48px`, and even `12px 16px` title padding.

6. **Footer padding is tighter than every other band.** Footer container `a7a2811` is `padding: 12px 0` on background `#1C3567`, while body text is 16px. The legal line is `12px`. **Fix:** footer padding `40px 20px 24px`, legal line `14px`.

## Type

7. **Display scale is overridden per section.** Kit display is Hoss Sharp `90 / 63 / 40px` and mid headings `60 / 44 / 30px`. The home hero ignores that and uses `240px`, then `168px` under `1024px`, then `68px` under `767px`. The closing line is `200px` / `175px` with `line-height: 0.8em` and `letter-spacing: -5px`. **Fix:** use only the kit steps. Do not set a one-off size above `90px`.

8. **Duplicate headings.** Single video template `763` outputs the title and summary twice (two heading widgets and two text widgets for the same lesson). **Fix:** one `h1` and one summary.

9. **Archive pages reuse the wrong introduction.** `/video/` shows the Lavazza BLUE category text, then “Videos / No data was found” and “Courses / No data was found”, even though 28 videos exist. `/shorts/` shows the Barista Skills introduction and the same empty lines. `/training/` and every `/training-track/` page also print “No data was found” for videos and courses. Yoast still emits `rel="next"` to `/video/page/2/` and `/training/page/2/`. **Fix:** point each archive query at its own post type, remove the empty JetEngine blocks, and remove the next link when the list fits on one page.

10. **Team copy is unfinished.** Operations track: “This for the Operations team”. Retail Sales Team title includes a trailing zero-width space (`U+200B`). **Fix:** “This is for the Operations team.” and delete the invisible character.

## Colour, alignment and behaviour

11. **Portal and terms disagree.** The login form on `/customer-portal/` posts to `wp-login.php` with `redirect_to=/portal/`. Terms say: “We operate this website without any form of user accounts”. `/portal/` is reachable without signing in. **Fix:** remove the login, or put the hub behind a real sign-in and rewrite the terms.

12. **Hello world is published.** `/hello-world/` is the default WordPress post, with a public comment form. **Fix:** unpublish the post and the comment endpoint.

13. **Every course “View All Courses” link goes to `/course-type/sca-certified/`**, including the four Lavazza courses. **Fix:** Lavazza courses link to `/course-type/lavazza/`.

14. **Footer year.** The legal line says `©2025` while page CSS and uploads are dated 2026. **Fix:** set the year from the publish date, currently 2026.

15. **Button padding is not one rule.** Kit buttons are often `15px 30px`. The home join button is a `40px` pill on `#FFA7B2`. Header portal buttons are `#1C3567` with no shared padding token. Shorts titles use `padding: 15px 30px` on an olive chip (`#627C2F`) rotated `2deg`. **Fix:** one pill, `padding: 15px 30px`, radius `40px`, colour `#1C3567` on cream and white on navy. Remove the 2 degree rotation.
