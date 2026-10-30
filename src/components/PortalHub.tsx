import type { VideoDoc } from "@/content/types";

const portalOrder = [
  "Coffee Duos – Trailer",
  "Coffee Crews – Main Teaser",
  "Espresso",
  "Dough & Ioana",
  "Coffee Crews – Episode 1",
  "History of Lavazza",
  "History of Coffee",
  "Foaming & Texturing Milk",
  "Mel & Cierra",
  "Coffee Crews – Episode 2",
];

const links = [
  { label: "Lavazza Barista Challenge UK – 2027", href: "/lavazza-barista-challenge-uk-2027/" },
  { label: "SCA Introduction to Coffee", href: "/training/sca-introduction-to-coffee/" },
  { label: "Terms and Conditions", href: "/terms-conditions/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Lavazza Team Portal", href: "/lavazza-team/" },
];

export function PortalHub({ videos }: { videos: VideoDoc[] }) {
  const picked = portalOrder
    .map((title) => videos.find((video) => video.title === title))
    .filter((video): video is VideoDoc => Boolean(video));
  const rows = [picked, picked];

  return (
    <div className="portal-hub">
      <section className="portal-hero">
        <div>
          <p className="portal-kicker">welcome back</p>
          <h1>Fallback</h1>
          <p className="lede">YOUR HOME FOR ALL THINGS COFFEE TRAINING & LAVAZZA.</p>
        </div>
      </section>
      <section className="section-pad" style={{ background: "#efe9dc" }}>
        <div className="wrap">
          <h2 className="mid">GOOD STUFF TO HELP YOU OUT</h2>
          <p>From dial-in tweaks to menu ready recipes, it’s all here when you need it.</p>
        </div>
      </section>
      <section className="section-pad" style={{ background: "#627c2f", color: "#fff" }}>
        <div className="wrap">
          <h2 className="mid" style={{ color: "#efe9dc" }}>
            READY FOR FACE-TO-FACE TRAINING?
          </h2>
          <p>Get hands-on support from a Lavazza trainer. Reach out to book or chat options.</p>
        </div>
      </section>
      {rows.map((row, index) => (
        <section className="pink-band" key={index}>
          <div className="wrap">
            <h2 className="mid">VIDEO SERIES</h2>
            <p className="empty">No data was found</p>
            <div className="card-grid card-grid--3">
              {row.map((video) => (
                <a
                  key={`${index}-${video.slug}`}
                  href={`/video/${video.slug}/`}
                  className="vid-card"
                  style={{ backgroundImage: `url(${video.imageUrl})` }}
                >
                  <span className="chip chip--title">
                    <span>{video.title}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
      <section className="section-pad">
        <ul className="archive-list wrap">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
