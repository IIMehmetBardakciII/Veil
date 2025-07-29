"use client";
import SectionTitle from "@/components/SectionTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Image from "next/image";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger, SplitText);
const CodexSection = () => {
  const imageRef1 = useRef<HTMLDivElement | null>(null);
  // let tl=useRef<gsap.core.Timeline|null>(null);
  const CodexSection=useRef<HTMLElement|null>(null);
  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add(
      {
        isMobile: "(max-width:744px)",
        isTablet: "(max-width:1279px)",
        isDesktop: "(min-width:1280px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions!;
        if (!imageRef1.current) return;
        gsap.to(imageRef1.current, {
          opacity: 1,
          width: "100%",
          ease:"none",
          scrollTrigger: {
            trigger: imageRef1.current.parentElement, // <-- Burayı değiştirdik: Parent'ı pinliyoruz
            start: isMobile ? "top center" : "top top",
            end: "bottom 80%",
            // pin: true,
            // pinSpacing: true,
            // pinType: "transform",
            scrub: true,
          },
        });

        document.fonts.ready.then(() => {
          const paragraph = document.querySelectorAll(".storie-text");
          paragraph.forEach((p) => {
            const split = new SplitText(p, { type: "chars" });
            gsap.from(split.chars, {
              opacity: 0.2,
              stagger: 0.01,
              scrollTrigger: {
                trigger: p,
                start: isMobile ? "top 60%" : "top 80%",
                end: isMobile ? "top 90%" : "top 20%",
                scrub: true,
              },
            });
          });
        });
      }
    );
  },{scope:CodexSection});

  return (
    <section id="CodexSection" ref={CodexSection} className="w-full h-full  sm:mt-section_desktop_margin mt-section_mobile_margin">
      <SectionTitle
        title="Codex of <br> Origins"
        subtitle="The story embroidered in every drop."
      />
      <div className="w-full flex justify-center">
        <div
          ref={imageRef1}
          className=" max-l:w-full w-[1175px] mx-auto  relative sm:h-[900px] h-[300px]     opacity-60 "
        >
          <Image
            src={"/images/CodexImage.png"}
            alt="codexImage"
            fill
            className="object-top object-cover  "
          />
        </div>
      </div>
      <div className="flex flex-col gap-6 l:w-[922px] w-full l:pl-[108px] relative z-[20] sm:mt-10 mt-6 ">
        <p className="p-storie storie-text">
          Inspired by the molten grace of ancient goldsmiths, VEIL unveils the
          invisible shroud of scent.
        </p>
        <p className="p-storie storie-text">
          Each drop holds the warmth of gold — a timeless veil that caresses
          emotion.
        </p>
        <p className="p-saudagar storie-text">
          Born from a ritual that honors nature at every step.
        </p>
      </div>
    </section>
  );
};

export default CodexSection;
