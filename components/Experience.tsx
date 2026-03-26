const experiences = [
  {
    company: "алтгту",
    role: "UX UI Designer",
    period: "Ноябрь 2010 - Январь 2019",
    tags: ["edtech", "web", "ui/ux", "visual design"],
  },
  {
    company: "maximus",
    role: "UX UI Designer",
    period: "Январь 2019 - Ноябрь 2021",
    tags: ["e-commerce", "ui/ux", "web/mobile"],
  },
  {
    company: "сплав",
    role: "UX UI Designer",
    period: "Декабрь 2021 - Декабрь 2022",
    tags: ["fintech", "ui/ux", "a/b", "product design"],
  },
  {
    company: "ecos",
    role: "Product Designer",
    period: "Январь 2023 - наст. время",
    tags: ["fintech", "ai", "a/b", "crypto"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-5" style={{ paddingTop: '120px' }}>
      <div className="flex flex-col gap-10">
        <h2 style={{ fontSize: '48px', fontWeight: 500, lineHeight: '60px', color: '#ffffff' }}>
          oпыт работы
        </h2>

        <div className="flex gap-4">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="flex-1 bg-[#191919] rounded-2xl flex flex-col justify-between"
              style={{ padding: '20px', height: '302px' }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 style={{ fontSize: '28px', fontWeight: 500, lineHeight: '35px', color: '#ffffff' }}>
                    {exp.company}
                  </h3>
                  <p style={{ fontSize: '21px', fontWeight: 500, lineHeight: '26px', color: 'rgba(255,255,255,0.6)' }}>
                    {exp.role}
                  </p>
                </div>
                <p style={{ fontSize: '18px', fontWeight: 500, lineHeight: '22px', color: 'rgba(255,255,255,0.2)' }}>
                  {exp.period}
                </p>
              </div>

              <div className="flex flex-wrap gap-[10px]">
                {exp.tags.map((tag, j) => (
                  <span
                    key={j}
                    style={{
                      backgroundColor: '#313131',
                      fontSize: '21px',
                      fontWeight: 500,
                      color: '#ffffff',
                      padding: '8px 13px',
                      borderRadius: '10px',
                      lineHeight: '26px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
