import Image from "next/image";
import { conceptCards } from "@/content/home";

export default function ConceptCarousel() {
  const oneSet = [...conceptCards, ...conceptCards];
  const allCards = [...oneSet, ...oneSet];

  return (
    <section
      id="concepts"
      className="w-full overflow-hidden"
      style={{
        marginLeft: "calc(-1 * var(--carousel-bleed, 0px))",
        marginRight: "calc(-1 * var(--carousel-bleed, 0px))",
        borderRadius: "var(--carousel-radius, 16px)",
      }}
    >
      <div className="flex gap-4 animate-marquee w-fit">
        {allCards.map((card, i) => (
          <article
            key={`${card.id}-${i}`}
            className="shrink-0 w-[338px] h-[400px] carousel-card rounded-2xl overflow-hidden bg-[#dee2e6] cursor-pointer group flex flex-col"
          >
            <div className="relative flex-1 min-h-0 w-full">
              <Image
                src={card.image}
                alt={card.alt}
                width={676}
                height={800}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
