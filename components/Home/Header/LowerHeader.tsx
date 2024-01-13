"use client";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useState } from "react";
import MenuButton from "./MenuButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Search from "./Search";
import useRequestModal from "@/hooks/useRequestModal";
import CityButton from "./CityButton";
import Logo from "./Logo";
import { menuCatalog } from "./menuData";
import { Button } from "@/components/ui/button";
import CatalogMenu from "./CatalogMenu";

const LowerHeader = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [popUp, setPopUp] = useState(false);

  const { onOpen, setDefaultValue } = useRequestModal();

  const showRequest = () => {
    setDefaultValue("price");
    onOpen();
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
    <>
      <nav className="text-white nav bg-gray-bg flex justify-center items-center flex-col w-full text-lg z-10 ">
        <div className="sticky top-0 left-0 hidden xl:flex justify-center items-center max-w-[1300px] w-full">
          <div className={`flex justify-center w-full`}>
            {/* <div
              className="relative w-full"
              onMouseEnter={() => setHoverCatalog(true)}
              onMouseLeave={() => setHoverCatalog(false)}
              onClick={() => setHoverCatalog(false)}
            >
              <MenuButton
                src={`/${pathname[1] || "moscow"}/catalog`}
                name="Каталог"
                icon="true"
              />
              <div
                className={`${
                  hoverCatalog ? "flex scale-100" : "hidden scale-0"
                } transition duration-300 fixed top-[137px] left-0 z-50 justify-center item-start w-full h-full`}
              >
                <div
                  onMouseEnter={() => setHoverCatalog(true)}
                  onMouseLeave={() => setHoverCatalog(false)}
                  className="w-[1300px] grid grid-cols-2 bg-white max-h-[80vh] overflow-y-auto gap-4 p-4 shadow-lg"
                >
                  {menuCatalog.map((item, index) => (
                    <div
                      key={index}
                      className="flex text-black flex-col gap-6 rounded-md border-r border-b border-r-black/70 border-b-black/70 p-4"
                    >
                      <div className="flex justify-start items-center w-full gap-3">
                        <h1 className="uppercase text-[26px] font-bold">
                          {item.label}
                        </h1>
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <Button variant="link" size="lg" asChild>
                          <Link
                            href={`/${pathname[1] || "moscow"}/catalog/${
                              item.href
                            }`}
                            onClick={() => setHoverCatalog(false)}
                          >
                            Посмотреть всё
                          </Link>
                        </Button>
                      </div>
                      <div className="w-full flex justify-start items-center flex-wrap gap-2">
                        {item.links.map((link) => (
                          <Button variant="outline" className="text-md" asChild>
                            <Link
                              href={`/${pathname[1] || "moscow"}/catalog/${
                                link.link
                              }`}
                              onClick={() => setHoverCatalog(false)}
                            >
                              <h1>{link.title}</h1>
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="w-full">
              <CatalogMenu />
            </div>
            <div className="relative w-full">
              <MenuButton
                src={`/${pathname[1] || "moscow"}/services`}
                name="Услуги"
                icon="false"
              />
            </div>
            <div
              onClick={showRequest}
              className="relative w-full flex py-2 font-medium justify-center items-center gap-8 xl:hover:bg-orange-bg transition cursor-pointer"
            >
              Прайс
            </div>
            <div
              className="relative w-full"
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
                    href={`/${
                      pathname[1] || "moscow"
                    }/about_company/requisites`}
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
            <div className="relative w-full">
              <MenuButton
                src={`/${pathname[1] || "moscow"}/contacts`}
                name="Контакты"
                icon="false"
              />
            </div>
            {/* <div className="relative w-full">
              <MenuButton
                src={`/${pathname[1] || "moscow"}/certificates`}
                name="Сертификаты"
                icon="false"
              />
            </div> */}
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
          } w-full transition-all duration-200 h-[100dvh] flex flex-col fixed top-[84px] bg-black/70 justify-start items-center z-30 backdrop-blur-lg`}
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
          <hr className="border border-white/10 w-[50%]" />
          <Link
            href={`/${pathname[1] || "moscow"}/services`}
            className={`font-bold w-full flex justify-center items-center py-6 ${
              pathname[2] === `/services` ? "bg-orange-bg" : "bg-transparent"
            }`}
            onClick={navbarHide}
          >
            Услуги
          </Link>
          <hr className="border border-white/10 w-[50%]" />
          <button
            className={`font-bold w-full flex justify-center items-center py-6 ${
              pathname[2] === `/price` ? "bg-orange-bg" : "bg-transparent"
            }`}
            onClick={showRequest}
          >
            Прайс
          </button>
          <hr className="border border-white/10 w-[50%]" />
          <Link
            href={`/${pathname[1] || "moscow"}/about_company`}
            className={`font-bold w-full flex justify-center items-center py-6 ${
              pathname[2] === "/about_company"
                ? "bg-orange-bg"
                : "bg-transparent"
            }`}
            onClick={navbarHide}
          >
            Компания
          </Link>
          <hr className="border border-white/10 w-[50%]" />
          <Link
            href={`/${pathname[1] || "moscow"}/contacts`}
            className={`font-bold w-full flex justify-center items-center py-6 ${
              pathname[2] === `/contacts` ? "bg-orange-bg" : "bg-transparent"
            }`}
            onClick={navbarHide}
          >
            Контакты
          </Link>
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
    </>
  );
};

export default LowerHeader;
