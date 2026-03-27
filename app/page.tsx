import ScaleWrapper from "@/components/ScaleWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConceptCarousel from "@/components/ConceptCarousel";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { homeCases } from "@/content/home";

export default function Home() {
  return (
    <ScaleWrapper>
      <main className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
        <Navbar />
        <Hero />
        <div style={{ height: "40px" }} />
        <ConceptCarousel />
        <div style={{ height: "20px" }} />

        <div id="cases" className="flex flex-col gap-5">
          {homeCases.map((c) => (
            <CaseStudy key={c.id} data={c} />
          ))}
        </div>

        <Experience />

        <Footer />
      </main>
    </ScaleWrapper>
  );
}
