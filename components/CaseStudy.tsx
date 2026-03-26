import Image from "next/image";
import CaseButton from "./CaseButton";

interface CaseStudyProps {
  headerImage: string;
  title: string;
  subCards?: { src: string; bg: string }[];
  buttonPos?: { top: string; left: string };
}

export default function CaseStudy({
  headerImage,
  title,
  subCards,
  buttonPos = { top: "44%", left: "73%" },
}: CaseStudyProps) {
  return (
    <section className="px-5 flex flex-col gap-5">
      <div
        className="relative w-full rounded-2xl overflow-hidden ring-1 ring-white/10"
        style={{ aspectRatio: "1400/810" }}
      >
        <Image
          src={headerImage}
          alt={title}
          fill
          className="object-cover"
          style={{ pointerEvents: "none" }}
        />
        <CaseButton top={buttonPos.top} left={buttonPos.left} />
      </div>

      {subCards && subCards.length > 0 && (
        <div className="flex gap-4">
          {subCards.map((card, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl overflow-hidden"
              style={{ backgroundColor: card.bg, aspectRatio: "692/520" }}
            >
              <Image
                src={card.src}
                alt=""
                width={1384}
                height={1040}
                className="w-full h-full object-contain"
                style={{ objectPosition: "center calc(50% + 15px)" }}
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
