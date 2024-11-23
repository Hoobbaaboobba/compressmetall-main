"use client";

import useLocationModal from "@/hooks/useLocationModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { cities } from "@/regions";
import OrangeButton from "./OrangeButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { clearLine } from "readline";
import { warn } from "console";
import { Plus } from "lucide-react";

const LocationModal = () => {
    const [currLocation, setCurrLocation] = useState({
        region: "",
        city: "",
        capital: "",
    });
    const [currLocationJs, setCurrLocationJs] = useState({});
    const [changeLoc, setChangeLoc] = useState<boolean>(false);
    const [currentUrl, setCurrentUrl] = useState<string>("");

    const { onClose, isOpen, changeLocation, changeLink, onOpen } =
        useLocationModal();

    useEffect(() => {
        if (localStorage.getItem('isShown') === null) {
            setTimeout(() => {
                onOpen();
            }, 3000);
            localStorage.setItem('isShown', JSON.stringify("true"));
        } else {
            onClose();
            getLocation();
            getLocationJs();
            setCurrentUrl(window.location.href);
        }
        return () => clearTimeout(3000);
    }, []);

    const getLocation = async () => {
        const location = await axios.get("https://ipapi.co/json");
        setCurrLocation(location.data);
    };

    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setCurrLocationJs({ latitude, longitude });
        });
    };

    const currentRegion = currLocation.region.toLocaleLowerCase();

    let currentGorod = "";
    let currentCapital = "";

    if (currentRegion.length > 0) {
        let count = 0;
        for (var i = 0; i < cities.length; i++) {
            if (cities[i].region === currentRegion) {
                currentGorod = cities[i].name;
                currentCapital = cities[i].capital;
                count += 1;
                break;
            }
        }
        if (count === 0) {
            currentGorod = "не найдена";
        }
    }

    const pathname = usePathname();
    const router = useRouter();

    const locationInfo = () => {
        changeLocation(currentGorod);
        changeLink(currentCapital);

        if (currentCapital === pathname.split("/")[1]) {
            onClose();
        } else {
            onClose();
            router.push(
                `${currentGorod.length > 0
                    ? currentUrl.replace(currentUrl.split("/")[3], currentCapital)
                    : (pathname.split("/")[1].length > 0 ? currentUrl.replace(currentUrl.split("/")[3], "moscow") : "/moscow")
                }`
            );
        }
    };

    const locationNotFound = () => {
        if (pathname.split("/")[1] === "moscow") {
            onClose();
        } else {
            router.push("/moscow");
            onClose();
        }
    };

    const changeCityName = (name: string, link: string) => {
        changeLocation(name);
        changeLink(link);
        onClose();
    };
    console.log(currentGorod)

    return (
        <>
            <div
                className={`${isOpen ? "scale-100" : "scale-0 pointer-events-none"} flex transition absolute top-0 left-0 flex-col text-black p-3 shadow-lg z-50 gap-4 bg-white rounded-lg mt-[50px] transition duration-200`}
            >
                <div onClick={onClose} className="absolute top-2 right-2 hover:text-black/70 transition cursor-pointer">
                    <Plus className="rotate-45 w-4 h-4" />
                </div>
                <div
                    className={`${changeLoc ? "hidden" : "flex"
                        } flex-col gap-2`}
                >
                    <h2 className="font-bold text-lg">
                        {" "}
                        {currentGorod === "не найдена"
                            ? "Ваша геолокация не найдена"
                            : `Ваш город ${currentGorod.length > 0 ? currentGorod : "Москва"}?`}
                    </h2>
                    <div className="flex gap-4">
                        {currentGorod === "не найдена" ? (
                            <>
                                <div onClick={locationNotFound}>
                                    <OrangeButton label={"Москва"} />
                                </div>
                                <button
                                    onClick={() => setChangeLoc(true)}
                                    className="flex justify-center rounded-md items-center border px-4 py-2"
                                >
                                    Выбрать
                                </button>
                            </>
                        ) : (
                            <>
                                <div onClick={locationInfo}>
                                    <OrangeButton label={"Да"} />
                                </div>
                                <button
                                    onClick={() => setChangeLoc(true)}
                                    className="flex justify-center rounded-md items-center border px-4 py-2"
                                >
                                    Выбрать
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div
                    className={`${changeLoc ? "flex" : "hidden"
                        } flex-col justify-center items-center py-2 w-[200px]`}
                >
                    <p className="font-bold text-lg text-center">
                        Мы работаем в следующих городах:
                    </p>
                    <ul className="flex mt-2 flex-col w-full justify-center items-center">
                        {cities.map((city) => (
                            <Link
                                onClick={() => changeCityName(city.name, city.capital)}
                                key={city.capital}
                                className="w-full text-center text-md hover:underline py-[2px]"
                                href={
                                    pathname.split("/")[1]
                                        ? currentUrl.replace(
                                            `${pathname.split("/")[1]}`,
                                            `${city.capital.split(" ").join("")}`
                                        )
                                        : `/${city.capital.split(" ").join("")}`
                                }
                            >
                                <li>{city.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default LocationModal;
