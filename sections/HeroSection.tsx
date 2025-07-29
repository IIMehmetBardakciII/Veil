import Image from "next/image"
import Link from "next/link"

const HeroSection = () => {
  return (
    <header className="w-full  h-fit sm:mt-section_desktop_margin mt-section_mobile_margin relative  z-[5] ">
      <div className="sm:w-full     l:h-[640px] sm:h-[540px] h-[303px] relative overflow-clip  ">
      <Image src={"/images/HeroImage.png"} fill alt="image" className="object-cover absolute z-[-1]" />
      <h1 className="display text-center       z-10">VEIL</h1>
      <div className="relative sm:w-[406px] sm:h-[588.33px] w-[202.5px] h-[293.5px] sm:-top-[150px] -top-[70px] left-1/2 -translate-x-1/2   ">
      <Image src={"/images/HeroPerfume.png"} alt="perfumeImage" fill className="object-contain" />
      </div>
      </div>
      <div className="mt-6 w-full h-fit ">
        <h5 className="h5-saudagar text-center">Where scent first whispers its secret</h5>
        <div className="w-full justify-center flex h-fit ">
        <Link href={"#"} className="p-mont  sm:mt-8 mt-6 underline hover:brightness-75 w-fit transition-all duration-300  " >Discover the Scents</Link>
        </div>
      </div>
    </header>

  
  )
}

export default HeroSection