"use client";
import { useRef } from "react";
import SliderItem from "./SliderItem";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const PerfumeSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const slider = sliderRef.current;
    const controller = controllerRef.current;
    if (!slider || !controller) return;


    const children = Array.from(controller.children) as HTMLElement[];


    const getAmountScroll=()=>{
    const totalWidth = controller.scrollWidth;
    const viewportWidth = slider.offsetWidth;
    const amountScroll = totalWidth - viewportWidth;
    return amountScroll;
    };

    const amountScroll=getAmountScroll();
    // gap value (in px)
    const style = getComputedStyle(controller); //getComputedStyle: Bir DOM öğesinin tarayıcı tarafından hesaplanmış stil bilgilerini döner.

    const gap = parseFloat(style.columnGap || style.gap) || 0;
    // width of a single item
    const itemWidth = children[0].offsetWidth;
    // calculate the pixel offsets at which each item is centered
    const idealXs = children.map(
      (_, i) => i * (itemWidth + gap)   // 1*(1392 + 20)
      // (_, i) => i * (itemWidth + gap) - (viewportWidth / 2 - itemWidth / 2) //* If  sliderWrapper width bigger than > itemWidth we need to use this method. 

    );

    // normalize to progress values between 0 and 1
    const snaps = idealXs.map((x) => {
      const clamped = Math.max(0, Math.min(x, amountScroll));
      return clamped / amountScroll;
    });

    gsap.to(controller, {
      x: ()=>-getAmountScroll(),
      ease: "none",

      scrollTrigger: {
        trigger: slider,
        start: "top top",
        end: `+=${getAmountScroll()}`,
        scrub: true,
        pin: true,
        pinType: "transform",
        snap: {
          snapTo: snaps,
          duration: 0.5,
          ease: "power1.inOut",
        },
        invalidateOnRefresh:true
      },
    });
  },{scope:sliderRef});

  return (
    <div
      ref={sliderRef}
      className="sm:mt-[112px] mt-[76px] w-full  l:h-fit sm:h-[754px] h-[549px] flex overflow-clip      "
    >
      <div ref={controllerRef} className=" flex gap-5 w-full    ">
        <SliderItem
          image={"/images/Perfume1.png"}
          perfumeName="Nocturne Aurum"
          perfumeDesc="Where shadow meets gold."
          topNotes="Black saffron, bergamot"
          heartNotes="Ambergris, dark patchouli, burning resin"
          baseNotes="Oud (agarwood), iris root, leather"
        />
        <SliderItem
          image={"/images/Perfume2.png"}
          perfumeName="Veil de Pluie"
          perfumeDesc="Softness caught between sky and skin."
          topNotes=" White tea, Japanese citrus (Yuzu)"
          heartNotes=" Rose petal, iris, soft musk"
          baseNotes="Damp cedarwood, benzoin, pure vanilla"
        />
        <SliderItem
          image={"/images/Perfume3.png"}
          perfumeName="Silken Ember"
          perfumeDesc="Fire woven in silk."
          topNotes="Pure saffron, coconut husk"
          heartNotes="Tobacco leaf, warm amber, myrrh"
          baseNotes="Leather accord, incense, vanilla sandalwood"
        />
      </div>
    </div>
  );
};

export default PerfumeSlider;
