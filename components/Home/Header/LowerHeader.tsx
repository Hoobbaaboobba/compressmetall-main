"use client";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useEffect, useState } from "react";
import Search from "./Search";
import useRequestModal from "@/hooks/useRequestModal";
import CityButton from "./CityButton";
import Logo from "./Logo";
import CatalogMenu from "./CatalogMenu";
import { Separator } from "@/components/ui/separator";
import ViewCatalogButton from "@/components/ViewCatalogButton";
import useBurgerMenu from "@/hooks/useBurgerMenu";
import { CatalogPopUp } from "./CatalogButton/CatalogPopUp";
import { menuButtons } from "./CatalogButton/CatalogButtonsData";
import { CatalogButton } from "./CatalogButton/CatalogButton";
import { CatalogMobileButton } from "./CatalogButton/CatalogMobileButton";


const LowerHeader = () => {
    const [search, setSearch] = useState(false);

    const { onOpen, setDefaultValue } = useRequestModal();
    const { isOpen, onOpen: onOpenBurger, onClose: onCloseBurger } = useBurgerMenu()

    const showRequest = () => {
        setDefaultValue("price");
        onOpen();
        document.body.style.overflowY = "hidden";
    };

    return (
        <>
            <nav className="nav flex justify-center items-center pb-3 flex-col w-full text-md z-10 ">
                <div className="sticky rounded-md top-0 left-0 hidden xl:flex justify-between items-center max-w-[1300px] w-full">
                    <div className={`flex justify-center items-center w-full`}>
                        <div className="w-full">
                            <CatalogMenu />
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <CatalogButton href={menuButtons[0]?.href}>
                                {menuButtons[0].icon}
                                {menuButtons[0].label}
                            </CatalogButton>
                            <Separator className="h-[20px]" orientation="vertical" />
                            <CatalogButton onClick={showRequest} >
                                {menuButtons[1].icon}
                                {menuButtons[1].label}
                            </CatalogButton>
                            <Separator className="h-[20px]" orientation="vertical" />
                            <CatalogPopUp />
                            <Separator className="h-[20px]" orientation="vertical" />
                            {menuButtons.slice(2).map((button, index) => (
                                <>
                                    <CatalogButton key={button.href} href={button.href}>
                                        {button.icon}
                                        {button.label}
                                    </CatalogButton>
                                    {index !== 3 && <Separator className="h-[20px]" orientation="vertical" />}
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex fixed top-0 left-0 w-full bg-white shadow-md xl:hidden justify-between items-center px-4 py-1 h-[84px]">
                    <div
                        className={`fixed ${search ? "flex" : "hidden"
                            } gap-1 md:hidden justify-between items-center left-0 top-0 bg-white w-full h-[84px] px-6`}
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
                    <div className={`${search ? "hidden" : "hidden xl:block"}`}>
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
                        {isOpen ? (
                            <div className="bg-orange-bg p-1">
                                <CloseOutlinedIcon
                                    fontSize="large"
                                    onClick={onCloseBurger}
                                    className="cursor-pointer "
                                />
                            </div>
                        ) : (
                            <div className="bg-orange-bg p-1">
                                <MenuOutlinedIcon
                                    fontSize="large"
                                    onClick={onOpenBurger}
                                    className="cursor-pointer"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className={`xl:hidden ${isOpen ? "translate-x-0" : "translate-x-[100%]"
                        } w-full transition-all text-white duration-200 h-[100dvh] flex flex-col fixed top-[84px] bg-black/70 justify-start items-center z-30 backdrop-blur-lg`}
                >
                    <div onClick={onCloseBurger}>
                        <ViewCatalogButton isCatalog />
                    </div>
                    <hr className="border border-white/10 w-[50%]" />
                    <CatalogMobileButton onClick={onCloseBurger} href="services">
                        {menuButtons[0].icon}
                        {menuButtons[0].label}
                    </CatalogMobileButton>
                    <hr className="border border-white/10 w-[50%]" />
                    <CatalogMobileButton onClick={() => {
                        onCloseBurger()
                        showRequest()
                    }}>
                        {menuButtons[1].icon}
                        {menuButtons[1].label}
                    </CatalogMobileButton>
                    <hr className="border border-white/10 w-[50%]" />
                    {menuButtons.slice(3).map((button, index) => (
                        <>
                            <CatalogMobileButton key={button.href} href={button.href}>
                                {button.icon}
                                {button.label}
                            </CatalogMobileButton>
                            {index !== 3 && <hr className="border border-white/10 w-[50%]" />}
                        </>
                    ))}
                    <div className="w-full flex flex-col justify-center items-center">
                        <button
                            onClick={() => {
                                onCloseBurger()
                                showRequest()
                            }}
                            className="py-6 text-lg text-black w-full bg-orange-bg underline font-bold"
                        >
                            Оставить заявку
                            <CheckCircleOutlineIcon fontSize="small" className="ml-2" />
                        </button>
                        <h3 className="text-center p-2">
                            Продажа металлопроката по всей территории России и СНГ
                        </h3>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default LowerHeader;
