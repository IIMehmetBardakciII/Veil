import Navbar from "@/components/Navbar";
import CodexSection from "@/sections/CodexSection";
import CollectionSection from "@/sections/CollectionSection";
import EthosSection from "@/sections/EthosSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";

const HomePage = () => {
  return (
   <>
    <div className="max-w-[90rem] mx-auto  sm:px-[24px] px-[12px] h-full ">
      <Navbar />
      <HeroSection />
      <main>
        <CodexSection />
        <CollectionSection />
        <EthosSection />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default HomePage;
