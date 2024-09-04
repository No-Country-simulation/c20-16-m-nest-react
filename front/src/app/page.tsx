import AboutUs from "@/components/UI/AboutUs";
import ContactUs from "@/components/UI/ContactUs";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import Collage from "@/components/collage/Collage";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <Collage />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
