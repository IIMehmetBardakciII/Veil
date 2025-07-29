'use client'
import Image from "next/image"
import HamburgerButton from "./HamburgerButton"
import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"

const Navbar = () => {
  const [openMenu,setOpenMenu]=useState<boolean>(false);
  return (
    <nav className="pt-5 flex justify-between w-full items-center z-40">
      <HamburgerButton toggle={openMenu} setToggle={setOpenMenu} />
    <div className="w-[95.41px] h-[58.97px] relative">
      <Image src={"/images/Logo.svg"} alt="brandLogo" fill className="object-cover" />
    </div>
    <span className="span-mont cursor-pointer relative max-sm:hidden before:content-[''] before:absolute before:bg-secondary before:w-full before:h-[1px] before:bottom-0 before:left-0 before:origin-left before:scale-x-0 before:transition-transform h hover:before:scale-x-100 ">Shop</span>
    {/* Hamburger menu */}
    {/* {openMenu&&<HamburgerMenu toggle={openMenu} setToggle={setOpenMenu} />} */}
    {<HamburgerMenu toggle={openMenu} setToggle={setOpenMenu} />}
    </nav>
  )
}

export default Navbar