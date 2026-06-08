import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Location from "@/components/Location";
import Schools from "@/components/Schools";
import Amenities from "@/components/Amenities";
import Caivan from "@/components/Caivan";
import Investment from "@/components/Investment";
import FAQ from "@/components/FAQ";
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
        <Overview />
        <Location />
        <Schools />
        <Amenities />
        <Caivan />
        <Investment />
        <FAQ />
      </main>
      <Footer />
      <FloatingCTA />
      <StickyFormShortcut />
      <ExitIntent />
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </>
  );
}
