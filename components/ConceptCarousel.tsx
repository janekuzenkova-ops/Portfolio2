import Image from "next/image";

const cards = [
  { src: "/images/concept-1.png", alt: "Concept 1" },
  { src: "/images/concept-2.png", alt: "Concept 2" },
  { src: "/images/concept-3.png", alt: "Concept 3" },
  { src: "/images/concept-4.png", alt: "Concept 4" },
];

export default function ConceptCarousel() {
  const allCards = [...cards, ...cards];

  return (
    <section id="concepts" className="w-full overflow-hidden">
      <div className="flex gap-4 animate-marquee w-fit px-5">
        {allCards.map((card, i) => (
          <div
            key={i}
            className="shrink-0 w-[338px] h-[400px] rounded-2xl overflow-hidden bg-[#dee2e6]
              transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <Image
              src={card.src}
              alt={card.alt}
              width={676}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
