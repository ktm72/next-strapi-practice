import React, { memo, useEffect, useMemo, useState } from "react";
import useScroll from "@/hooks/useScroll";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "./Wrapper";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  //show nav on scroll

  const show = useScroll();

  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${
        mobileMenu ? "" : show
      }`}
    >
      <Wrapper className="h-full flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={40}
            height={100}
            className="md:w-[60px]"
            alt="logo"
          />
        </Link>
        {/* navbar  */}
        <Menu />
        {mobileMenu ? (
          <MenuMobile
            setMobileMenu={setMobileMenu}
            setShowCatMenu={setShowCatMenu}
            showCatMenu={showCatMenu}
          />
        ) : null}
        <div className="flex items-center gap-2 text-black">
          {/* favorite icon start  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[15px] md:text-lg" />
            <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 flex items-center justify-center absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] px-[2px] md:px-[5px]">
              51
            </span>
          </div>
          {/* favorite icon end  */}
          {/* cart icon start  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-lg" />
            <span className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 flex items-center justify-center absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] px-[2px] md:px-[5px]">
              5
            </span>
          </div>
          {/* cart icon end  */}
          {/* mobile menu icon  */}
          <div
            className="md:hidden w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2"
            onClick={() => setMobileMenu((p) => !p)}
          >
            {mobileMenu ? (
              <VscChromeClose className="text-base cursor-pointer" />
            ) : (
              <BiMenuAltRight className="text-lg cursor-pointer" />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
