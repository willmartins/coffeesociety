import type { NavLink } from "@/content/types";
import { MediaFrame } from "./MediaFrame";

export function SiteFooter({
  badgeUrl,
  quickLinks,
  compliance,
  legal,
}: {
  badgeUrl: string;
  quickLinks: NavLink[];
  compliance: NavLink[];
  legal: string;
}) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <MediaFrame src={badgeUrl} alt="Coffee Society by Lavazza" width={180} height={210} />
        <div>
          <h2>Quick Links</h2>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Compliance</h2>
          <ul>
            {compliance.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="legal">{legal}</p>
    </footer>
  );
}
