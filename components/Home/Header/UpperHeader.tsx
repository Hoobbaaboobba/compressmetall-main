"use client";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";

import Search from "./Search";
import Logo from "./Logo";
import Link from "next/link";
import LocationProvider from "../Providers/LocationProvider";

const UpperHeader = () => {

    return (
        <div className="hidden xl:flex justify-center bg-white items-center w-full text-white py-3">
            <div className="flex justify-between items-center max-w-[1300px] w-full">
                <Logo />
                <Search />
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
