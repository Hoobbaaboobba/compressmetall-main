"use client";

import Image from "next/image";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import CityButton from "./CityButton";
import Search from "./Search";
import { Suspense } from "react";
import Logo from "./Logo";
import Link from "next/link";
import LocationProvider from "../Providers/LocationProvider";

const Loading = () => {
  return <Image src="/loading.gif" alt="loading" width={100} height={100} />;
};

const UpperHeader = () => {
  return (
    <div className="hidden xl:flex justify-center bg-white items-center w-full text-white py-3">
      <div className="flex justify-between items-center max-w-[1300px] w-full">
        <Logo />
        <LocationProvider />
        <h3 className="text-base font-normal text-black opacity-80">
          Продажа металлопроката по всей <br /> территории России и СНГ
        </h3>
        <Suspense fallback={<Loading />}>
          <Search />
        </Suspense>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <EmailOutlinedIcon className="text-orange-text mt-[3px]" />
            <Link
              href="mailto:zakaz@kometal.ru"
              className="font-bold text-xl text-black hover:underline"
            >
              zakaz@kometal.ru
            </Link>
          </div>
          <div className="flex gap-2">
            <LocalPhoneOutlinedIcon className="text-orange-text mt-[3px]" />
            <Link
              href="tel: +7 (495) 116-66-86"
              className="font-bold text-xl text-black hover:  underline"
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
