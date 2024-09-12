import AboutUs from "@/components/AboutUs/AboutUs";
import Collage from "@/components/collage/Collage";
import ContactUs from "@/components/ContactUs/ContactUs";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Services />
      <Collage />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
