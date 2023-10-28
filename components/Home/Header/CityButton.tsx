"use client";

import useLocationModal from "@/hooks/useLocationModal";
import { cities } from "@/regions";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  const pathname = usePathname().split("/");

  return (
    <div
      onClick={() => setCityClick((event) => !event)}
      onMouseEnter={() => setCityHover(true)}
      onMouseLeave={() => setCityHover(false)}
      className="relative"
    >
      <button className="text-orange-text text-base flex justify-center items-center gap-1 py-4 max-w-[100px] max-h-[56px] sm:max-w-[200px] mx-1">
        <FmdGoodOutlinedIcon />
        {(pathname[1] === "moscow" || pathname[1] === "") && "Москва"}
        {pathname[1] === "ufa" && "Уфа"}
        {pathname[1] === "tver" && "Тверь"}
        {pathname[1] === "yaroslavl" && "Ярославль"}
        {pathname[1] === "ryazan" && "Рязань"}
        {pathname[1] === "tula" && "Тула"}
        {pathname[1] === "nizhnynovgorod" && "Нижний Новгород"}
        {pathname[1] === "voronezh" && "Воронеж"}
        {pathname[1] === "donetsk" && "Донецк"}
        {pathname[1] === "saratov" && "Саратов"}
        {pathname[1] === "kazan" && "Казань"}
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
          <Link
            key={city.capital}
            onClick={() => changeCityName(city.name, city.capital)}
            className={`${
              pathname[1] === city.capital && "underline"
            } w-full text-center py-[5px] hover:underline`}
            href={`/${city.capital.split(" ").join("")}`}
          >
            <li>{city.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CityButton;
