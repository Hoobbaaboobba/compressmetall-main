"use client";

import Image from "next/image";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import Search from "./Search";
import { Suspense, useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LocationProvider from "../Providers/LocationProvider";
import CatalogMenu from "./CatalogMenu";

const Loading = () => {
  return <Image src="/loading.gif" alt="loading" width={100} height={100} />;
};

const UpperHeader = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="hidden xl:flex justify-center bg-white items-center w-full text-white py-3">
      <div className="flex justify-between items-center max-w-[1300px] w-full">
      <div className={`${scrollPosition > 60 ? "block" : "hidden"}`}>
      <CatalogMenu/>
      </div>
        <Logo />
        <Suspense fallback={<Loading />}>
        <Search />
        </Suspense>
        <LocationProvider />
        <div className="flex flex-col">
          <div className="flex gap-2">
            <EmailOutlinedIcon className="mt-[3px] text-black" />
            <Link
              href="mailto:zakaz@kometal.ru"
              className="text-md text-black hover:underline"
            >
              zakaz@kometal.ru
            </Link>
          </div>
          <div className="flex gap-2">
            <LocalPhoneOutlinedIcon className="text-black mt-[3px]" />
            <Link
              href="tel: +7 (495) 116-66-86"
              className="text-md text-black hover:underline"
            >
              +7 (495) 116-66-86
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperHeader;
