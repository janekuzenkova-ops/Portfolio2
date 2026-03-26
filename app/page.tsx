import ScaleWrapper from "@/components/ScaleWrapper";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ConceptCarousel from "@/components/ConceptCarousel";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <ScaleWrapper>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <div style={{ height: '40px' }} />
        <ConceptCarousel />
        <div style={{ height: '20px' }} />

        <div id="cases" className="flex flex-col gap-5">
          <CaseStudy
            headerImage="/images/case1-header.png"
            title="ECOS — редизайн экрана верификации"
            buttonPos={{ top: "58.5%", left: "74%" }}
            subCards={[
              { src: "/images/case1-sub1.png", bg: "#dee2e6" },
              { src: "/images/case1-sub2.png", bg: "#282a2c" },
            ]}
          />

          <CaseStudy
            headerImage="/images/case2-header.png"
            title="ECOS — а/б тестирование посадочной страницы промо"
            buttonPos={{ top: "58.5%", left: "74%" }}
          />

          <CaseStudy
            headerImage="/images/case3-header.png"
            title="ECOS — редизайн флоу авторизации и регистрации"
            buttonPos={{ top: "58.5%", left: "74%" }}
            subCards={[
              { src: "/images/case3-sub1.png", bg: "#dee2e6" },
              { src: "/images/case3-sub2.png", bg: "#dee2e6" },
            ]}
          />
        </div>

        <Experience />
        <Footer />
      </main>
    </ScaleWrapper>
  );
}
