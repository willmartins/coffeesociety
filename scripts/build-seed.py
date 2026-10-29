#!/usr/bin/env python3
"""Build sanity/seed/seed.ndjson and src/content/seed.json from the crawl."""

from __future__ import annotations

import json
import re
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
CRAWL = Path("/tmp/cs")
CONTENT = json.loads((CRAWL / "content.json").read_text())
PAGES = CRAWL / "pages"
MEDIA = ROOT / "public" / "media"
PATTERNS = ROOT / "public" / "assets" / "patterns"

SHORT_THUMBS = {
    "why-doesnt-my-coffee-have-crema": "https://coffee-society.co.uk/wp-content/uploads/2025/11/no-coffee-crema-thumbnail.jpg",
    "why-does-my-espresso-taste-dirty": "https://coffee-society.co.uk/wp-content/uploads/2025/11/Taste-dirty.png",
    "why-does-my-coffee-only-come-out-of-one-side-of-the-portafilter": "https://coffee-society.co.uk/wp-content/uploads/2025/11/One-side-of-portafilter.png",
    "why-is-my-coffee-puck-watery": "https://coffee-society.co.uk/wp-content/uploads/2025/11/Wet-puck.png",
    "why-does-my-shot-run-slow-and-taste-bitter": "https://coffee-society.co.uk/wp-content/uploads/2025/11/slow-and-taste-bitter-thumbnail.jpg",
    "why-is-my-shot-running-fast-and-taste-sour": "https://coffee-society.co.uk/wp-content/uploads/2025/11/Running-Sour.png",
}


def localise(url: str) -> str:
    if not url:
        return ""
    name = url.split("/")[-1].split("?")[0]
    if (MEDIA / name).exists():
        return f"/media/{name}"
    if (PATTERNS / name).exists():
        return f"/assets/patterns/{name}"
    return url


def blocks_from_page(filename: str) -> list[dict]:
    soup = BeautifulSoup((PAGES / filename).read_text(errors="ignore"), "lxml")
    root = soup.select_one('[data-elementor-type="wp-page"]')
    blocks: list[dict] = []
    if not root:
        return blocks
    for widget in root.select("[data-widget_type]"):
        if widget.find_parent(attrs={"data-widget_type": True}):
            continue
        kind = widget["data-widget_type"]
        container = widget.select_one(".elementor-widget-container") or widget
        if kind == "heading.default":
            heading = container.find(["h1", "h2", "h3", "h4"])
            text = " ".join((heading or container).get_text(" ", strip=True).split())
            if text:
                blocks.append({"type": heading.name if heading else "h2", "text": text})
        elif kind == "text-editor.default":
            for node in container.find_all(["h2", "h3", "h4", "p", "li"]):
                if node.find_parent(["p", "li"]):
                    continue
                text = " ".join(node.get_text(" ", strip=True).split())
                if text:
                    blocks.append({"type": node.name, "text": text})
        elif kind == "button.default":
            link = container.find("a", href=True)
            text = " ".join(container.get_text(" ", strip=True).split())
            if text:
                blocks.append(
                    {
                        "type": "a",
                        "text": text,
                        "href": link["href"] if link else "",
                    }
                )
    return blocks


def slug_id(prefix: str, slug: str) -> str:
    return f"{prefix}-{slug}"


def main() -> None:
    categories = []
    for index, topic in enumerate(CONTENT["topics"]):
        categories.append(
            {
                "slug": topic["slug"],
                "title": topic["title"],
                "description": topic["description"],
                "sortOrder": index,
            }
        )

    videos = []
    for index, video in enumerate(CONTENT["videos"]):
        videos.append(
            {
                "slug": video["slug"],
                "title": video["title"],
                "excerpt": video["excerpt"],
                "kind": "video",
                "categorySlug": video.get("categorySlug") or "",
                "categoryTitle": video.get("categoryTitle") or "",
                "categoryDescription": video.get("categoryDescription") or "",
                "imageUrl": "",
                "beforeVideoUrl": "",
                "afterVideoUrl": "",
                "previousSlug": video.get("previousSlug") or "",
                "nextSlug": video.get("nextSlug") or "",
                "previousTitle": video.get("previousTitle") or "",
                "nextTitle": video.get("nextTitle") or "",
                "sortOrder": index,
            }
        )

    shorts = []
    for index, short in enumerate(CONTENT["shorts"]):
        shorts.append(
            {
                "slug": short["slug"],
                "title": short["title"],
                "kicker": short.get("kicker") or "society shorts",
                "kind": "short",
                "imageUrl": localise(SHORT_THUMBS.get(short["slug"], short.get("thumbnail") or "")),
                "beforeVideoUrl": "",
                "afterVideoUrl": "",
                "sortOrder": index,
            }
        )

    courses = []
    for index, course in enumerate(CONTENT["courses"]):
        view_all = next((link["href"] for link in course["links"] if "View" in link["text"]), "/course-type/sca-certified/")
        enquire = next((link["href"] for link in course["links"] if link["text"] in {"ENQUIRE NOW", "CONTACT"}), "")
        newsletter = next((link["href"] for link in course["links"] if "Newsletter" in link["text"]), "")
        courses.append(
            {
                "slug": course["slug"],
                "title": course["title"],
                "duration": course.get("duration") or "",
                "courseType": course["courseType"],
                "summary": course["paragraphs"][0] if course["paragraphs"] else "",
                "outcomes": course["paragraphs"][1] if len(course["paragraphs"]) > 1 else "",
                "keyTopics": course.get("keyTopics") or [],
                "imageUrl": localise(course["images"][0] if course["images"] else ""),
                "viewAllHref": view_all,
                "enquireHref": enquire,
                "newsletterHref": newsletter,
                "sortOrder": index,
            }
        )

    course_types = []
    for course_type in CONTENT["courseTypes"]:
        course_types.append(
            {
                "slug": course_type["slug"],
                "title": course_type["title"],
                "description": course_type["description"],
                "cards": [
                    {"title": card["title"], "blurb": card["blurb"]}
                    for card in course_type.get("cards", [])
                ],
            }
        )

    tracks = []
    for index, track in enumerate(CONTENT["tracks"]):
        tracks.append(
            {
                "slug": track["slug"],
                "title": track["title"],
                "description": track["description"],
                "sortOrder": index,
            }
        )

    trainers = [
        {
            "name": "Dave",
            "role": "Head of Training for Northern Europe. Talks a lot about coffee. Also cares about the people making it.",
        },
        {
            "name": "Mia",
            "role": "UK Coffee Trainer who's obsessed with coffee. Australian by birth, anti-mayo by choice, makes sure baristas know their stuff.",
        },
        {
            "name": "Christian",
            "role": "UK Coffee Trainer and latte art specialist. From dance floors in Italy to coffee counters in the UK — making baristas look good, one espresso at a time.",
        },
        {
            "name": "Teela",
            "role": "Coffee Trainer, Denmark. Originally from East London, now a lover of musicals, backwards caps and guiding baristas through the art of coffee",
        },
    ]

    seed = {
        "settings": {
            "siteTitle": "Coffee Society by Lavazza",
            "logoUrl": "/media/Lavazza-Lighter-Blue.svg",
            "badgeUrl": "/media/Lavazza_Coffee_Society_Master_Badge_Aqua_Rgb.svg",
            "footerBadgeUrl": "/media/Lavazza_Coffee_Society_Stand_Alone_Badge_White_Rgb_900px_w_72ppi-865x1024.png",
            "cookieTitle": "We use cookies on our site",
            "cookieBody": "We use cookies to analyse our website performance and inform future improvements. This data may be shared with our analytics partners to help us enhance your experience.",
        },
        "navigation": [
            {
                "label": "BARISTA TRAINING",
                "groups": [
                    {
                        "label": "In Person Training",
                        "links": [
                            {"label": "SCA Certified Courses", "href": "/course-type/sca-certified/"},
                            {"label": "Coffee Courses", "href": "/course-type/lavazza/"},
                        ],
                    },
                    {
                        "label": "Video Courses",
                        "links": [
                            {"label": "Barista Skills – Foundation", "href": "/topic/barista-foundation-course/"},
                            {"label": "Lavazza BLUE Capsule System", "href": "/topic/lavazza-blue-system/"},
                        ],
                    },
                ],
            },
            {
                "label": "Video Courses",
                "groups": [
                    {
                        "label": "Video Courses",
                        "links": [
                            {"label": "Barista Skills – Foundation", "href": "/topic/barista-foundation-course/"},
                            {"label": "Lavazza BLUE Capsule System", "href": "/topic/lavazza-blue-system/"},
                        ],
                    }
                ],
            },
            {
                "label": "Community Content",
                "groups": [
                    {
                        "label": "Video Series",
                        "links": [
                            {"label": "Coffee Crews", "href": "/topic/coffee-crews/"},
                            {"label": "Coffee Duos", "href": "/topic/coffee-duos/"},
                        ],
                    },
                    {
                        "label": "Community Events",
                        "links": [
                            {"label": "Lavazza Barista Challenge", "href": "/lavazza-barista-challenge-uk-2027/"},
                        ],
                    },
                ],
            },
        ],
        "footer": {
            "quickLinks": [
                {"label": "Barista Skills - Foundation", "href": "/topic/barista-foundation-course/"},
                {"label": "SCA Certified Courses", "href": "/course-type/sca-certified/"},
                {"label": "Coffee Courses", "href": "/course-type/lavazza/"},
            ],
            "compliance": [
                {"label": "Privacy Policy", "href": "https://www.lavazza.co.uk/en/privacy-policy"},
                {"label": "Terms & Conditions", "href": "/terms-conditions/"},
                {"label": "Cookie Policy", "href": "/cookie-policy/"},
            ],
            "legal": "©2025 Luigi Lavazza SPA. All rights reserved - VAT no. 00470550013 - Business Registry no. 257143 - share capital € 25.090.000 paid in full",
        },
        "home": {
            "heroTitle": "CARING ABOUT COFFEE",
            "joinTitle": "JOIN OUR COFFEE SOCIETY",
            "joinBody": "Join our mailing list today and be a part of the knowledgeable and passionate coffee people who are forming the new generation of the UK coffee scene.",
            "joinHref": "https://cloud.crm.lavazza.com/coffee-society",
            "joinLabel": "JOIN US",
            "featuredTitle": "Featured Collections",
            "collections": [
                {
                    "label": "BARISTA SKILLS",
                    "href": "/topic/barista-foundation-course/",
                    "imageUrl": "https://coffee-society.co.uk/wp-content/uploads/2025/09/Screenshot-2025-09-16-at-15.37.43.png",
                },
                {
                    "label": "COFFEE CREWS",
                    "href": "/topic/coffee-crews/",
                    "imageUrl": "https://coffee-society.co.uk/wp-content/uploads/2025/11/Coffee-Crews-Thumbnail-1.jpg",
                },
            ],
            "shortsHeading": "BARISTA FOUNDATION",
            "shortsKicker": "Shorts",
            "closingTitle": "COFFEE SOCIETY",
            "closingSubtitle": "BRINGING COFFEE PEOPLE TOGETHER",
            "latteImageUrl": "/media/latteart-142-e1770998072764-1024x548.jpg",
        },
        "trainers": trainers,
        "categories": categories,
        "videos": videos,
        "shorts": shorts,
        "courses": courses,
        "courseTypes": course_types,
        "tracks": tracks,
        "pages": {
            "terms": blocks_from_page("terms_conditions.html"),
            "cookies": blocks_from_page("cookie_policy.html"),
            "challenge": blocks_from_page("lavazza_barista_challenge_uk_2027.html"),
            "hello": [
                {
                    "type": "p",
                    "text": "Welcome to WordPress. This is your first post. Edit or delete it, then start writing!",
                }
            ],
            "portal": blocks_from_page("customer_portal.html"),
            "team": blocks_from_page("lavazza_team.html"),
        },
        "forms": {
            "login": {
                "originalAction": "https://coffee-society.co.uk/wp-login.php",
                "redirectTo": "/portal/",
                "title": "Welcome!",
                "intro": "Your Lavazza experience starts here. Log in to access curated courses, shorts and resources created especially for Lavazza customers and partners.",
            },
            "comment": {
                "originalAction": "https://coffee-society.co.uk/wp-comments-post.php",
            },
        },
    }

    out_json = ROOT / "src" / "content" / "seed.json"
    out_json.parent.mkdir(parents=True, exist_ok=True)
    out_json.write_text(json.dumps(seed, ensure_ascii=False, indent=2) + "\n")

    docs: list[dict] = []
    docs.append({"_id": "siteSettings", "_type": "siteSettings", **seed["settings"]})
    docs.append({"_id": "navigation", "_type": "navigation", "items": seed["navigation"]})
    docs.append({"_id": "footer", "_type": "footer", **seed["footer"]})
    docs.append({"_id": "homePage", "_type": "homePage", **seed["home"], "trainers": trainers})
    docs.append(
        {
            "_id": "form-login",
            "_type": "form",
            "name": "Portal login",
            "originalAction": seed["forms"]["login"]["originalAction"],
            "fields": [
                {"name": "log", "label": "Username", "fieldType": "text", "required": True},
                {"name": "pwd", "label": "Password", "fieldType": "password", "required": True},
                {"name": "redirect_to", "label": "Redirect", "fieldType": "hidden", "required": False},
            ],
        }
    )
    docs.append(
        {
            "_id": "form-comment",
            "_type": "form",
            "name": "Comment",
            "originalAction": seed["forms"]["comment"]["originalAction"],
            "fields": [
                {"name": "comment", "label": "Comment", "fieldType": "textarea", "required": True},
                {"name": "author", "label": "Name", "fieldType": "text", "required": True},
                {"name": "email", "label": "Email", "fieldType": "email", "required": True},
                {"name": "url", "label": "Website", "fieldType": "url", "required": False},
            ],
        }
    )
    for key, slug, title in [
        ("terms", "terms-conditions", "Terms & conditions"),
        ("cookies", "cookie-policy", "Cookie Policy"),
        ("challenge", "lavazza-barista-challenge-uk-2027", "Lavazza Barista Challenge UK - 2027"),
        ("hello", "hello-world", "Hello world!"),
        ("portal", "customer-portal", "Customer Portal"),
        ("team", "lavazza-team", "Lavazza Team"),
    ]:
        docs.append(
            {
                "_id": f"page-{slug}",
                "_type": "page",
                "title": title,
                "slug": {"_type": "slug", "current": slug},
                "blocks": seed["pages"][key],
            }
        )
    for category in categories:
        docs.append(
            {
                "_id": slug_id("videoCategory", category["slug"]),
                "_type": "videoCategory",
                "title": category["title"],
                "slug": {"_type": "slug", "current": category["slug"]},
                "description": category["description"],
                "sortOrder": category["sortOrder"],
            }
        )
    for video in videos:
        doc = {
            "_id": slug_id("video", video["slug"]),
            "_type": "video",
            "title": video["title"],
            "slug": {"_type": "slug", "current": video["slug"]},
            "kind": "video",
            "excerpt": video["excerpt"],
            "imageUrl": video["imageUrl"],
            "beforeVideoUrl": "",
            "afterVideoUrl": "",
            "sortOrder": video["sortOrder"],
            "categoryDescription": video["categoryDescription"],
        }
        if video["categorySlug"]:
            doc["category"] = {
                "_type": "reference",
                "_ref": slug_id("videoCategory", video["categorySlug"]),
            }
        if video["previousSlug"]:
            doc["previous"] = {"_type": "reference", "_ref": slug_id("video", video["previousSlug"])}
        if video["nextSlug"]:
            doc["next"] = {"_type": "reference", "_ref": slug_id("video", video["nextSlug"])}
        docs.append(doc)
    for short in shorts:
        docs.append(
            {
                "_id": slug_id("short", short["slug"]),
                "_type": "video",
                "title": short["title"],
                "slug": {"_type": "slug", "current": short["slug"]},
                "kind": "short",
                "kicker": short["kicker"],
                "imageUrl": short["imageUrl"],
                "beforeVideoUrl": "",
                "afterVideoUrl": "",
                "sortOrder": short["sortOrder"],
            }
        )
    for course_type in course_types:
        docs.append(
            {
                "_id": slug_id("courseType", course_type["slug"]),
                "_type": "courseType",
                "title": course_type["title"],
                "slug": {"_type": "slug", "current": course_type["slug"]},
                "description": course_type["description"],
            }
        )
    for course in courses:
        docs.append(
            {
                "_id": slug_id("trainingOption", course["slug"]),
                "_type": "trainingOption",
                "title": course["title"],
                "slug": {"_type": "slug", "current": course["slug"]},
                "duration": course["duration"],
                "summary": course["summary"],
                "outcomes": course["outcomes"],
                "keyTopics": course["keyTopics"],
                "imageUrl": course["imageUrl"],
                "viewAllHref": course["viewAllHref"],
                "enquireHref": course["enquireHref"],
                "newsletterHref": course["newsletterHref"],
                "sortOrder": course["sortOrder"],
                "courseType": {
                    "_type": "reference",
                    "_ref": slug_id("courseType", course["courseType"]),
                },
            }
        )
    for track in tracks:
        docs.append(
            {
                "_id": slug_id("teamTrack", track["slug"]),
                "_type": "teamTrack",
                "title": track["title"],
                "slug": {"_type": "slug", "current": track["slug"]},
                "description": track["description"],
                "sortOrder": track["sortOrder"],
            }
        )

    ndjson_path = ROOT / "sanity" / "seed" / "seed.ndjson"
    ndjson_path.parent.mkdir(parents=True, exist_ok=True)
    with ndjson_path.open("w", encoding="utf-8") as handle:
        for doc in docs:
            handle.write(json.dumps(doc, ensure_ascii=False) + "\n")
    print(f"seed.json {out_json.stat().st_size} ndjson docs {len(docs)}")


if __name__ == "__main__":
    main()
