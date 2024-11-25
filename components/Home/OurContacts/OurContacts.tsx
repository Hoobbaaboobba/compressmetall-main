"use client";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import Image from "next/image";
import OrangeButton from "@/components/OrangeButton";
import { addresses } from "@/addresses";
import { usePathname } from "next/navigation";
import useRequestModal from "@/hooks/useRequestModal";
import React from "react";
import { YandexMaps } from "./YandexMaps";

const OurContacts = () => {
    const { onOpen, setDefaultValue } = useRequestModal();

    const pathname = usePathname().split("/");

    const showCall = () => {
        onOpen();
        setDefaultValue("call");
        document.body.style.overflowY = "hidden";
    };
    return (
        <>
            <section className="flex flex-col justify-center items-center px-4 xl:px-0">
                <div className="w-full mb-8 flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold text-black text-center xl:text-start">
                        Наши контакты
                    </h2>
                    <div className="bg-black h-[5px] w-[80px] my-4"></div>
                </div>
                <div className="max-w-[1000px] w-full flex flex-col-reverse lg:flex-row gap-8 justify-center items-center lg:justify-between my-8">
                    <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start">
                        <div className="max-w-[350px] flex flex-col justify-center items-center xl:justify-start xl:items-start gap-4 my-4">
                            {addresses.map((address) => {
                                return (
                                    <React.Fragment key={address.id}>
                                        {pathname[1] === address.id && (
                                            <div className="flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
                                                <PlaceOutlinedIcon className="text-main-black" />
                                                <p className="text-gray-bg text-center xl:text-start">
                                                    {address.address}
                                                </p>
                                            </div>
                                        )}
                                    </React.Fragment>
                                );
                            })}
                            {pathname[1] === "" && (
                                <div className="flex w-full flex-col text-center md:text-start md:flex-row gap-2 md:gap-4 justify-start items-center">
                                    <PlaceOutlinedIcon className="text-main-black" />
                                    <p>109542, Москва, пр-кт Рязанский, д. 10, стр. 18, помещ. 15/6</p>
                                </div>
                            )}
                            <div className="flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
                                <LocalPhoneOutlinedIcon className="text-main-black" />
                                <div className="flex flex-col text-center xl:text-start">
                                    <p className="font-bold text-gray-bg">+7 (495) 116-66-86</p>
                                    <p className="text-gray-bg">Пн. – Пт.: с 9:00 до 18:00</p>
                                </div>
                            </div>
                            <div className="flex flex-col xl:flex-row xl:gap-4 justify-center items-center">
                                <EmailOutlinedIcon className="text-main-black" />
                                <p className="font-bold text-gray-bg text-center xl:text-start">
                                    zakaz@kometal.ru
                                </p>
                            </div>
                            <div onClick={showCall}>
                                <OrangeButton label={"Заказать звонок"} />
                            </div>
                        </div>
                    </div>
                    <YandexMaps city={pathname[1] || "moscow"} />
                </div>
                <hr />
            </section>
        </>
    );
};

export default OurContacts;
