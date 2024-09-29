"use client";

import useLocationModal from "@/hooks/useLocationModal";
import { cities } from "@/regions";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CityButton = () => {
  const [cityHover, setCityHover] = useState(false);
  const [cityClick, setCityClick] = useState(false);

  const { changeLocation, changeLink } = useLocationModal();

  const changeCityName = (name: string, link: string) => {
    changeLocation(name);
    changeLink(link);
    setCityHover(false);
  };

  const pathname = usePathname();
  const splitedPathname = pathname.split("/");

  const searchParams = useSearchParams();
  const query = searchParams.get("label");

  const router = useRouter();

  const onClick = (city: any) => {
    changeCityName(city.name, city.capital);
    if (query) {
      router.push(
        pathname.replace(splitedPathname[1], city.capital.split(" ").join("")) +
          `?label=${query}`
      );
    } else {
      router.push(
        pathname.replace(splitedPathname[1], city.capital.split(" ").join(""))
      );
    }
  };

  return (
    <div
      onClick={() => setCityClick((event) => !event)}
      onMouseEnter={() => setCityHover(true)}
      onMouseLeave={() => setCityHover(false)}
      className="relative"
    >
      <button className="text-black text-base flex justify-center items-center gap-1 py-4 max-w-[100px] max-h-[56px] sm:max-w-[200px] mx-1">
        <FmdGoodOutlinedIcon />
        {(splitedPathname[1] === "moscow" || splitedPathname[1] === "") &&
          "Москва"}
        {splitedPathname[1] === "ufa" && "Уфа"}
        {splitedPathname[1] === "tver" && "Тверь"}
        {splitedPathname[1] === "yaroslavl" && "Ярославль"}
        {splitedPathname[1] === "ryazan" && "Рязань"}
        {splitedPathname[1] === "tula" && "Тула"}
        {splitedPathname[1] === "nizhnynovgorod" && "Нижний Новгород"}
        {splitedPathname[1] === "voronezh" && "Воронеж"}
        {splitedPathname[1] === "donetsk" && "Донецк"}
        {splitedPathname[1] === "saratov" && "Саратов"}
        {splitedPathname[1] === "kazan" && "Казань"}
        <KeyboardArrowDownOutlinedIcon
          fontSize="small"
          className={`${cityHover ? "xl:rotate-180" : "xl:rotate-0 "} ${
            cityClick ? "rotate-180" : "rotate-0"
          } transition duration-200`}
        />
      </button>
      <ul
        className={`${
          cityHover ? "xl:opacity-100 xl:scale-100" : "xl:opacity-0 xl:scale-0"
        } ${
          cityClick ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } absolute top-[50px] -left-12 xl:left-0 z-50 text-black flex flex-col w-[200px] justify-center items-center py-[10px] bg-white transition duration-200 rounded-lg border border-light-gray`}
      >
        {cities.map((city) => (
          <li
            key={city.capital}
            onClick={() => onClick(city)}
            className={`${
              splitedPathname[1] === city.capital && "underline"
            } w-full text-center py-[5px] hover:underline cursor-pointer`}
          >
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityButton;
