import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import RegisterSection from "@/components/RegisterSection";
import Overview from "@/components/Overview";
import Location from "@/components/Location";
import Schools from "@/components/Schools";
import Amenities from "@/components/Amenities";
import Caivan from "@/components/Caivan";
import Investment from "@/components/Investment";
import FAQ from "@/components/FAQ";
import Agent from "@/components/Agent";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import StickyFormShortcut from "@/components/StickyFormShortcut";
import ExitIntent from "@/components/ExitIntent";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RegisterSection />
        <Overview />
        <Location />
        <Schools />
        <Amenities />
        <Caivan />
        <Investment />
        <FAQ />
        <Agent />
      </main>
      <Footer />
      <FloatingCTA />
      <StickyFormShortcut />
      <ExitIntent />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
