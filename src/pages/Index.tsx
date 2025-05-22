
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Footer from "@/components/Footer";
import WhatsappButton from "@/components/WhatsappButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Index;
