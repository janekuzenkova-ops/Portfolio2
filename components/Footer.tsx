import Link from "next/link";

const socialLinks = [
  { label: "telegram", href: "https://t.me/jane_kuzenkova" },
  { label: "e-mail", href: "mailto:p-janni@bk.ru" },
  { label: "linkedin", href: "https://www.linkedin.com/in/jane-kuzenkova/" },
  { label: "dribbble", href: "https://dribbble.com/Kuzenkova" },
  { label: "cv", href: "/cv.pdf" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="px-5 footer-section"
      style={{
        marginTop: "140px",
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "#484a4d",
      }}
    >
      <div className="flex items-center justify-between footer-inner">
        <div className="flex items-center gap-10 footer-links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`footer-link${link.label === "cv" ? " cv-link" : ""}`}
              {...(link.label === "cv" ? { download: true } : {})}
            >
              {link.label}
              {link.label === "cv" && (
                <svg
                  className="cv-icon"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
              )}
            </a>
          ))}
        </div>

        <Link href="/" className="footer-link footer-copy">
          2026 © евгения кузенкова
        </Link>
      </div>
    </footer>
  );
}
