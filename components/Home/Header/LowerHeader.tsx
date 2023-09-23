"use client";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useState } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Search from "./Search";
import usePriceModal from "@/hooks/usePriceModal";
import useRequestModal from "@/hooks/useRequestModal";
import CityButton from "./CityButton";
import Logo from "./Logo";

const LowerHeader = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const { onOpen } = usePriceModal();
  const { onOpen: onOpenRequest } = useRequestModal();

  const showPrice = () => {
    onOpen();
    document.body.style.overflowY = "hidden";
  };

  const showRequest = () => {
    onOpenRequest();
    document.body.style.overflowY = "hidden";
  };

  const navbarShow = () => {
    setMenu(true);
    document.body.classList.add("overflowHidden");
  };
  const navbarHide = () => {
    setMenu(false);
    document.body.classList.remove("overflowHidden");
  };

  const pathname = usePathname().split("/");

  return (
    <nav className="text-white nav bg-gray-bg flex justify-center items-center flex-col w-full text-lg z-10 ">
      <div className="sticky top-0 left-0 hidden xl:flex justify-center items-center max-w-[1300px] w-full">
        <div className={`flex justify-center w-full`}>
          <div className="relative w-1/5">
            <MenuButton
              src={`/${pathname[1] || "moscow"}/catalog`}
              name="Каталог"
              icon="true"
            />
          </div>
          <div
            onClick={showPrice}
            className="relative w-1/5 flex py-2 font-medium justify-center items-center gap-8 xl:hover:bg-orange-bg transition cursor-pointer"
          >
            Прайс
          </div>
          <div
            className="relative w-1/5"
            onMouseLeave={() => setPopUp(false)}
            onMouseEnter={() => setPopUp(true)}
          >
            <MenuButton
              src={`/${pathname[1] || "moscow"}/about_company`}
              name="Компания"
              icon="false"
            />
            <div className="absolute top-[44px] bg-transparent w-full">
              <div
                className={`${
                  popUp ? "block" : "hidden"
                } bg-white rounded-lg mt-2 text-black w-full text-start flex flex-col py-2 shadow-lg`}
              >
                <Link
                  href={`/${pathname[1] || "moscow"}/about_company/requisites`}
                  className="hover:bg-orange-bg hover:text-white py-1 px-2"
                >
                  Реквизиты
                </Link>
                <Link
                  href={`/${pathname[1] || "moscow"}/about_company/partners`}
                  className="hover:bg-orange-bg hover:text-white py-1 px-2"
                >
                  Партнёры
                </Link>
              </div>
            </div>
          </div>
          <div className="relative w-1/5">
            <MenuButton
              src={`/${pathname[1] || "moscow"}/contacts`}
              name="Контакты"
              icon="false"
            />
          </div>
          <div className="relative w-1/5">
            <MenuButton
              src={`/${pathname[1] || "moscow"}/certificates`}
              name="Сертификаты"
              icon="false"
            />
          </div>
        </div>
      </div>
      <div className="flex fixed top-0 left-0 w-full bg-white shadow-md xl:hidden justify-between items-center px-4 py-1 h-[84px]">
        <div
          className={`fixed ${
            search ? "flex" : "hidden"
          } gap-2 md:hidden justify-between items-center left-0 top-0 bg-white w-full h-[84px] px-6`}
        >
          <div className="w-full">
            <Search />
          </div>
          <div className="bg-orange-bg p-1 border-orange-bg">
            <CloseOutlinedIcon
              fontSize="large"
              onClick={() => setSearch(false)}
              className="cursor-pointer border border-orange-bg"
            />
          </div>
        </div>
        <Logo />
        <div className={`${search ? "hidden" : "block"}`}>
          <CityButton />
        </div>
        <div className="hidden md:block">
          <Search />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSearch(true)}
            className="cursor-pointer bg-orange-bg p-1 md:hidden"
          >
            <SearchOutlinedIcon fontSize="large" />
          </button>
          {menu ? (
            <div className="bg-orange-bg p-1">
              <CloseOutlinedIcon
                fontSize="large"
                onClick={navbarHide}
                className="cursor-pointer "
              />
            </div>
          ) : (
            <div className="bg-orange-bg p-1">
              <MenuOutlinedIcon
                fontSize="large"
                onClick={navbarShow}
                className="cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>
      <div
        className={`xl:hidden ${
          menu ? "translate-x-0" : "translate-x-[100%]"
        } backdrop-blur-md w-full transition-all duration-200 h-[100dvh] flex flex-col fixed top-[84px] bg-gray-bg justify-start items-center z-30`}
      >
        <Link
          href={`/${pathname[1] || "moscow"}/catalog`}
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname[2] === `/catalog` ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Каталог
        </Link>
        <hr className="border w-full" />
        <button
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname[2] === `/price` ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={showPrice}
        >
          Прайс
        </button>
        <hr className="border w-full" />
        <Link
          href={`/${pathname[1] || "moscow"}/about_company`}
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname[2] === "/about_company" ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Компания
        </Link>
        <hr className="border w-full" />
        <Link
          href={`/${pathname[1] || "moscow"}/contacts`}
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname[2] === `/contacts` ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Контакты
        </Link>
        <hr className="border w-full" />
        <Link
          href={`/${pathname[1] || "moscow"}/certificates`}
          className={`font-bold w-full flex justify-center items-center py-6 ${
            pathname[2] === `/certificates` ? "bg-orange-bg" : "bg-transparent"
          }`}
          onClick={navbarHide}
        >
          Сертификаты
        </Link>
        <hr className="border w-full" />
        <div className="w-full flex flex-col justify-center items-center">
          <button
            onClick={showRequest}
            className="py-6 text-lg w-full bg-orange-bg underline font-bold"
          >
            Оставить заявку
            <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
          </button>
          <h1 className="text-center p-2">
            Продажа металлопроката по всей территории России и СНГ
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default LowerHeader;
