import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemsSection from "@/components/ProblemsSection";
import SolutionsSection from "@/components/SolutionsSection";
import DemoVideoSection from "@/components/DemoVideoSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionsSection />
      <DemoVideoSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  );
}
