import Image from "next/image";

const cards = [
  { src: "/images/concept-1.png", alt: "Concept 1" },
  { src: "/images/concept-2.png", alt: "Concept 2" },
  { src: "/images/concept-3.png", alt: "Concept 3" },
  { src: "/images/concept-4.png", alt: "Concept 4" },
];

export default function ConceptCarousel() {
  const oneSet = [...cards, ...cards];
  const allCards = [...oneSet, ...oneSet];

  return (
    <section
      id="concepts"
      className="w-full overflow-hidden"
      style={{
        marginLeft: "calc(-1 * var(--carousel-bleed, 0px))",
        marginRight: "calc(-1 * var(--carousel-bleed, 0px))",
      }}
    >
      <div className="flex gap-4 animate-marquee w-fit">
        {allCards.map((card, i) => (
          <div
            key={i}
            className="shrink-0 w-[338px] h-[400px] rounded-2xl overflow-hidden bg-[#dee2e6] cursor-pointer group"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={676}
              height={800}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
