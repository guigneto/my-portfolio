import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col bg-black">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection />
      <AboutSection />
    </div>
    <Footer />
  </main>
  );
}
