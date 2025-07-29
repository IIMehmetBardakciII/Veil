import PerfumeSlider from "@/components/PerfumeSlider";
import SectionTitle from "@/components/SectionTitle";

const CollectionSection = () => {
  return (
    <section id="CollectionSection" className="w-full relative sm:mt-section_desktop_margin mt-section_mobile_margin">
        <SectionTitle title={"The Collection<br> of Rarities"} subtitle="250 limited‑edition voyages" />
        <PerfumeSlider />
    </section>
  );
};

export default CollectionSection;
