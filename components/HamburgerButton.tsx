"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

type Props={
  toggle:boolean,
  setToggle:(value:boolean)=>void
}
const HamburgerButton = ({toggle,setToggle}:Props) => {
  // const [toggle, setToggle] = useState<boolean>(false);
  const topLine = useRef<SVGLineElement>(null);
  const bottomLine = useRef<SVGLineElement>(null);
  function handleToggle() {
    setToggle(!toggle);
    // console.log(toggle);
  }
  useGSAP(() => {
    if (toggle) {
      gsap.to(topLine.current, {
        attr: {x1:0,y1:0,x2:42,y2:18},
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: {x1:0,y1:18,x2:42,y2:0},
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      gsap.to(topLine.current, {
        attr: {x1:0,y1:1,x2:42,y2:1},
        duration: 0.3,
        ease: "power2.inOut",
      });
      gsap.to(bottomLine.current, {
        attr: {x1:0,y1:16,x2:42,y2:16},
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [toggle]);
  return (
    <svg
      width="42"
      height="18"
      viewBox="0 0 42 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer relative z-50"
      onClick={handleToggle}
    >
      <line ref={topLine} y1="1" y2="1" x2="42" stroke={toggle?"#0f0f0f":"#FDF0C9"} />
      <line ref={bottomLine} y1="16" y2="16" x2="42" stroke={toggle?"#0f0f0f":"#FDF0C9"} />
      {/* <line y1="0" y2="18" x2="42"  stroke="#F5F1EB"   />
      <line y1="18" y2="0" x2="42"  stroke="#F5F1EB" /> */}
    </svg>
  );
};

export default HamburgerButton;
