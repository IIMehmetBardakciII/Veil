import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="UnveilSection" className="sm:mt-section_desktop_margin mt-section_mobile_margin mb-4 border">
      <SectionTitle title="Unveil What’s <br> Rare" />
      <div className="sm:pl-[108px] w-full h-full mt-6">
        <span className=" text-accent2 text-[24px] font-saudagar leading-[31.2px] tracking-normal max-sm:text-base">
          Become the first to unveil new editions, limited offers, and exclusive
          sample ceremonies.
        </span>
        <div className="l:mt-12 sm:mt-[108px] mt-8 flex gap-6 max-sm:flex-col">
          <input
            type="text"
            name="email"
            placeholder="Enter an email"
            className="sm:w-[571px] w-[296px] rounded-full text-primary bg-accent2 px-5 py-5 placeholder:text-primary smal-mont"
          />
          <button className="p-mont  cursor-pointer">
            <span className=" cursor-pointer self-center    flex sm:self-end h-fit text-secondary relative before:content-[''] before:absolute before:bg-secondary before:w-full before:h-[1px] before:bottom-0 before:left-0 before:origin-left before:scale-x-0 before:transition-transform h hover:before:scale-x-100 ">
              Learn More
            </span>
          </button>
        </div>

        {/* Navigation and logo */}
        <div className="sm:mt-[136px] mt-12 flex justify-between w-full sm:items-center max-sm:flex-col max-sm:gap-4">
            <div className=" flex gap-0.5 items-center">
            <span className="smal-mont  ">Instagram</span>
            <Image src="/images/Star.svg" alt="start svg" width={19} height={19} />
            <span className="smal-mont  ">Tiktok</span>
            <Image src="/images/Star.svg" alt="start svg" width={19} height={19} />
            <span className="smal-mont  ">X</span>
            <Image src="/images/Star.svg" alt="start svg" width={19} height={19} />
            <span className="smal-mont  ">Facebook</span>

        </div>
        <Image src={"/images/Logo.svg"} alt="Logo" width={95.41} height={58.97} />
        <span className="smal-mont sm:pr-[108px]">Developed & Design By Mehmet Bardakci</span>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
