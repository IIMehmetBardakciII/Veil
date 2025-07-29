import Image from "next/image"
import Base from "./icons/Base"
import Heart from "./icons/Heart"
import Top from "./icons/Top"

type sliderItemProps={
    image:string,
    perfumeName:string,
    perfumeDesc:string,
    topNotes:string,
    heartNotes:string,
    baseNotes:string,
}
const SliderItem = ({image,perfumeDesc,perfumeName,baseNotes,heartNotes,topNotes}:sliderItemProps) => {
  return (
   <div className="flex w-full flex-col justify-center items-center relative  shrink-0 overflow-clip bg-accent1 slider-item  ">
        {/* Image container */}
        <div className="sm:w-[225px] sm:h-[446px] w-[126px] h-[249px] relative z-[5]">
          <Image
            src={image}
            alt="Perfume image 1"
            fill
            className="object-cover"
          />
        </div>
        {/* Material */}
        <div className="absolute w-full h-full left-1/2 sm:translate-x-[160px] translate-x-[80px]  z-[10] flex flex-col gap-4 max-sm:gap-0">
           <Image src={"/images/perfume1/topImage.png"} alt="Top ımage" width={87} height={87} className="object-cover border border-secondary rounded-full max-sm:scale-75" /> 
           <Image src={"/images/perfume1/heartImage.png"} alt="Top ımage" width={87} height={87} className="object-cover border border-secondary rounded-full max-sm:scale-75" /> 
           <Image src={"/images/perfume1/baseImage.png"} alt="Top ımage" width={87} height={87} className="object-cover border border-secondary rounded-full max-sm:scale-75" /> 
        </div>
        {/* Name... content */}
        <div className="relative z-[11]">
            <h4 className="h4-mont sm:mt-8 mt-4">{perfumeName}</h4>
            <p className="p-saudagar sm:mt-6 mt-4 text-center">{perfumeDesc}</p>
        </div>
     <div className="max-l:flex max-l:mb-10 max-sm:flex-col  justify-center  w-fit h-fit  items-center">
        <div className="mt-6 flex sm:gap-4 z-20 max-l:flex-col">
         <div className="flex gap-2 items-center">
            <Top  />
            <span className="smal-mont w-full">{topNotes}</span>
        </div>
         <div className="flex gap-2 items-center">
            <Heart />
            <span className="smal-mont w-full">{heartNotes}</span>
        </div>
         <div className="flex gap-2 items-center">
            <Base />
            <span className="smal-mont w-full">{baseNotes}</span>
        </div>
  
       </div>

       {/* Button */}
      <div className="w-full flex justify-center">
         <button className="span-mont cursor-pointer hover:opacity-80 duration-300 transition-all px-5 py-[10px] rounded-full bg-secondary text-accent1 sm:mt-2   ">
        Shop Now
       </button>
      </div>
     </div>
        {/* Bg light */}
        <span className="inline-block top-20 w-[400px] h-[400px]  bg-secondary absolute z-[2] rounded-full blur-[80px] opacity-70"></span>
      </div>
  )
}

export default SliderItem