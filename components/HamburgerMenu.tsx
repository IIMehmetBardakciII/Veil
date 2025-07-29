"use client";
import Image from "next/image";
import HamburgerButton from "./HamburgerButton";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
type Props = {
  toggle: boolean;
  setToggle: (value: boolean) => void;
};
gsap.registerPlugin(ScrollToPlugin) 


const HamburgerMenu = ({ toggle, setToggle }: Props) => {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  // useGSAP(
  //   () => {
  //     tl.current = gsap.timeline();
  //     const tml = tl.current;
  //     tml.fromTo(
  //       menuRef.current,
  //       {
  //         yPercent: -100, // ✔️ string değil, number
  //       },
  //       {
  //         yPercent: 0, // ✔️ y değil, yPercent kullan
  //         duration: 0.5,
  //         ease: "power2.out",
  //       }
  //     );
  //   },
  //   { scope: menuRef }
  // );

  useGSAP(
    () => {
      if (!menuRef.current) return;

      gsap.set(menuRef.current, {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 0%)", // başlangıç hali
      });
      gsap.set(".menu-link-item-holder", { y: 75 });
      tl.current = gsap
        .timeline({ paused: true })
        .to(menuRef.current, {
          duration: 1.25,
          clipPath: " polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: menuRef }
  );
  useEffect(() => {
    if (toggle) {
      tl.current?.play();
      document.body.style.overflow = "hidden";
      console.log("Toggle oldu", toggle);
    } else {
      tl.current?.reverse();
      document.body.style.overflow = "auto";
      console.log("Toggle oldu", toggle);
    }
  }, [toggle]);

  const handleToggle = (selector:string) => {
    setToggle(!toggle);
    gsap.to(window,{
      duration:1.2,
      scrollTo:{
        y:selector,
        offsetY:100,
      },
      ease:"power4.inOut"
    })
  };
  return (
    <div
      ref={menuRef}
      className="fixed  menu-overlay top-0 left-0 pt-5 w-full h-screen bg-secondary z-50  overflow-hidden"
    >
      <div className="max-w-[90rem] mx-auto   sm:px-[24px] px-[12px] h-full text-primary flex flex-col justify-between  ">
        <div className="flex justify-between">
          <HamburgerButton toggle={toggle} setToggle={setToggle} />
          <Image
            src={"/images/blackLogo.svg"}
            alt="Logo"
            width={95.41}
            height={58.97}
          />
        </div>
        <div className=" flex flex-col gap-10 sm:pl-10   ">
          <div
            onClick={()=>handleToggle("#CodexSection")}
            className="h4-mont menu-link-item    hover:underline transition-all  duration-300 w-fit"
          >
            <div className="menu-link-item-holder ">
              <Link href={"#CodexSection"} className=" max-sm:text-[24px]  menu-link-item-holder" >
                Codex Of Origins
              </Link>
            </div>
          </div>
          <div
            onClick={()=>handleToggle("#EthosSection")}
            className="h4-mont menu-link-item  hover:underline transition-all  duration-300 w-fit"
          >
            <div className="menu-link-item-holder">
              <Link className="menu-link-item-holder max-sm:text-[24px]" href={"#EthosSection"}>
                Ethos of Craft
              </Link>
            </div>
          </div>
          <div
            onClick={()=>handleToggle("#CollectionSection")}
            className="h4-mont menu-link-item  hover:underline transition-all  duration-300 w-fit"
          >
            <div className="menu-link-item-holder">
              <Link
                className="menu-link-item-holder max-sm:text-[24px]"
                href={"#CollectionSection"}
              >
                The Collection of Rarities
              </Link>
            </div>
          </div>
          <div
            onClick={()=>handleToggle("#UnveilSection")}
            className="h4-mont menu-link-item  hover:underline transition-all  duration-300 w-fit"
          >
            <div className="menu-link-item-holder max-sm:text-[24px]">
              <Link className="menu-link-item-holder" href={"#UnveilSection"}>
                Unveil What’s Rare
              </Link>
            </div>
          </div>
        </div>
        <div className="flex pl-10 pb-10 ">
          <span className="smal-mont  hover:underline ">
            <Link onClick={()=>setToggle(!toggle)} href={"#"}>
              Instagram
            </Link>
          </span>
          <Image
            src="/images/BlackStar.svg"
            alt="start svg"
            width={19}
            height={19}
          />
          <span className="smal-mont hover:underline  ">
            <Link onClick={()=>setToggle(!toggle)} href={"#"}>
              Tiktok
            </Link>
          </span>
          <Image
            src="/images/BlackStar.svg"
            alt="start svg"
            width={19}
            height={19}
          />
          <span className="smal-mont hover:underline  ">
            <Link onClick={()=>setToggle(!toggle)} href={"#"}>
              X
            </Link>
          </span>
          <Image
            src="/images/BlackStar.svg"
            alt="start svg"
            width={19}
            height={19}
          />
          <span className="smal-mont hover:underline  ">
            <Link onClick={()=>setToggle(!toggle)} href={"#"}>
              Facebook
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
