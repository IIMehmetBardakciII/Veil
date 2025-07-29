import EthosItem from "@/components/EthosItem"
import SectionTitle from "@/components/SectionTitle"

const EthosSection = () => {
  return (
    <section id="EthosSection" className="w-full sm:mt-section_desktop_margin mt-section_mobile_margin overflow-x-auto">
      <SectionTitle title="Ethos of <br> Craft"   subtitle="Luxury measured in mindful moments."/>
      <div className="flex w-full gap-8 sm:pl-[108px] pb-20 max-sm:flex-col">
        <EthosItem img="/images/Ethos1.png" title="Recycled Elegance " subTitle="100% recyclable glass & gold accents" />
      <EthosItem img="/images/Ethos2.png" title="Artisanal Alchemy " subTitle="Natural essences, toxin‑free" />
      <EthosItem img="/images/Ethos3.png" title="Conscious Creation " subTitle="Carbon‑neutral production" />
            <span className="span-mont cursor-pointer self-center    flex sm:self-end h-fit text-accent2 relative before:content-[''] before:absolute before:bg-accent2 before:w-full before:h-[1px] before:bottom-0 before:left-0 before:origin-left before:scale-x-0 before:transition-transform h hover:before:scale-x-100 ">Learn More</span>

      </div>
    </section>
  )
}

export default EthosSection