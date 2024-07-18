"use client";

import useLocationModal from "@/hooks/useLocationModal";
import { useEffect, useState } from "react";
import axios from "axios";
import { cities } from "@/regions";
import OrangeButton from "./OrangeButton";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
    getLocation();
    getLocationJs();
    setCurrentUrl(window.location.href);

    setTimeout(() => {
      onOpen();
    }, 3000);
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
        `${
          currentUrl.split("/")[3] !== ""
            ? currentUrl.replace(currentUrl.split("/")[3], currentCapital)
            : "/moscow"
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

  return (
    <>
      <div
        className={`fixed ${
          isOpen ? "z-[100] opacity-100" : "opacity-0 -z-50"
        } justify-center items-start flex trasnition duration-300 top-0 left-0 w-full h-[100dvh] bg-black/40 transition`}
      >
        <div
          onClick={onClose}
          className="fixed top-0 left-0 w-full h-[100vh]"
        ></div>
        <div
          className={`flex flex-col max-w-[400px] w-full mx-4 z-50 gap-4 justify-center items-center bg-white rounded-lg mt-[100px] transition duration-200`}
        >
          <div
            className={`${
              changeLoc ? "hidden" : "flex"
            } flex-col justify-center items-center gap-6 w-full py-[70px]`}
          >
            <h2 className="font-bold text-2xl">
              {" "}
              {currentGorod === "не найдена"
                ? "Ваша геолокация не найдена"
                : `Ваш город ${currentGorod}?`}
            </h2>
            <div className="flex gap-6">
              {currentGorod === "не найдена" ? (
                <>
                  <div onClick={locationNotFound}>
                    <OrangeButton label={"Москва"} />
                  </div>
                  <button
                    onClick={() => setChangeLoc(true)}
                    className="flex justify-center items-center border px-4 py-2"
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
                    className="flex justify-center items-center border px-4 py-2"
                  >
                    Выбрать
                  </button>
                </>
              )}
            </div>
          </div>
          <div
            className={`${
              changeLoc ? "flex" : "hidden"
            } flex-col w-full justify-center items-center p-[20px]`}
          >
            <p className="font-bold text-2xl text-center">
              Мы работаем в следующих городах:
            </p>
            <ul className="flex flex-col w-full justify-center items-center p-[10px]">
              {cities.map((city) => (
                <Link
                  onClick={() => changeCityName(city.name, city.capital)}
                  key={city.capital}
                  className="w-full text-center text-xl hover:underline px-[15px] py-[5px]"
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
      </div>
    </>
  );
};

export default LocationModal;
