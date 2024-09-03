import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import ContactUs from "@/components/UI/ContactUs";
import Footer from "@/components/UI/Footer";
import Header from "@/components/UI/Header";
import { useTestCont } from "@/context/zustang";
import { FaHouseChimney } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  );
}
