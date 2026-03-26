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
      className="px-5"
      style={{ marginTop: "140px", paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        <span style={{ color: "#484a4d", fontSize: "28px", fontWeight: 500 }}>
          2026 © евгения кузенкова
        </span>
      </div>
    </footer>
  );
}
