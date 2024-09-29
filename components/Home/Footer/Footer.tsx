"use client";

import Link from "next/link";

import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import { usePathname } from "next/navigation";
import { addresses } from "@/addresses";
import React from "react";

const company = [
  {
    label: "О компании",
    href: "/about_company",
  },
  {
    label: "Контакты",
    href: "/about_company/contacts",
  },
  {
    label: "Реквизиты",
    href: "/about_company/requisites",
  },
  {
    label: "Партнёры",
    href: "/about_company/partners",
  },
];

const catalog = [
  {
    label: "Чёрный металл",
    href: "/catalog?q=",
  },
  {
    label: "Цветной металл",
    href: "/catalog?q=",
  },
  {
    label: "Нержавеющая сталь",
    href: "/catalog?q=",
  },
  {
    label: "Оцинкованная сталь",
    href: "/catalog?q=",
  },
  {
    label: "Трубопроводная арматура",
    href: "/catalog?q=",
  },
  {
    label: "Прецензионные сплавы",
    href: "/catalog?q=",
  },
];

const services = [
  {
    label: "Остатки",
    href: "/services",
  },
  {
    label: "Покраска",
    href: "/services",
  },
  {
    label: "Размотка раматуры",
    href: "/services",
  },
  {
    label: "Резка металла в размер",
    href: "/services",
  },
];

const Footer = () => {
  const pathname = usePathname().split("/");

  return (
    <footer className="w-full bg-main-black flex flex-col justify-center items-center pt-8 px-8 pb-[75px]">
      <div className="max-w-[1300px] w-full text-white flex flex-wrap justify-center xl:justify-between items-start gap-8 pb-4">
        <div className="flex flex-col gap-2 max-w-[200px] w-full text-center md:text-start">
          <h3 className="font-bold text-xl">Компания</h3>
          <ul className="flex flex-col gap-1">
            {company.map((href, index) => (
              <li
                key={index}
                className="opacity-70 hover:opacity-90 transition"
              >
                <Link href={`/${pathname[1] || "moscow"}${href.href}`}>
                  {href.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2  max-w-[200px] w-full text-center md:text-start">
          <h3 className="font-bold text-xl">Каталог</h3>
          <ul className="flex flex-col gap-1">
            {catalog.map((href, index) => (
              <li
                key={index}
                className="opacity-70 hover:opacity-90 transition"
              >
                <Link
                  href={`/${pathname[1] || "moscow"}${href.href}${href.label}`}
                >
                  {href.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 max-w-[200px] w-full text-center md:text-start">
          <h3 className="font-bold text-xl">Услуги</h3>
          <ul className="flex flex-col gap-1">
            {services.map((href, index) => (
              <li
                key={index}
                className="opacity-70 hover:opacity-90 transition"
              >
                <Link href={`/${pathname[1] || "moscow"}${href.href}`}>
                  {href.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center flex-col gap-4 md:gap-2 max-w-[250px] w-full">
          <h3 className="font-bold text-xl text-center md:text-start">
            Наши контакты
          </h3>
          <div className="max-w-[350px] flex flex-col justify-start items-start gap-4">
            {addresses.map((address) => {
              return (
                <React.Fragment key={address.id}>
                  {pathname[1] === address.id && (
                    <div className="flex w-full flex-col text-center md:text-start md:flex-row gap-2 md:gap-4 justify-start items-center">
                      <PlaceOutlinedIcon className="text-white" />
                      <p>{address.address}</p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
            {pathname[1] === "" && (
              <div className="flex w-full flex-col text-center md:text-start md:flex-row gap-2 md:gap-4 justify-start items-center">
                <PlaceOutlinedIcon className="text-white" />
                <p>2-я Энтузиастов ул., 5 корпус 40, Москва, 111024</p>
              </div>
            )}
            <div className="flex w-full flex-col md:flex-row gap-2 md:gap-4 justify-start items-center">
              <LocalPhoneOutlinedIcon className="text-white" />
              <div className="flex flex-col text-center md:text-start">
                <p className="font-bold">+7 (495) 116-66-86</p>
                <p className="opacity-70">Пн. – Пт.: с 9:00 до 18:00</p>
              </div>
            </div>
            <div className="flex w-full text-start md:text-start flex-col md:flex-row gap-2 md:gap-4 justify-start items-center">
              <EmailOutlinedIcon className="text-white" />
              <p className="font-bold ">zakaz@kometal.ru</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full bg-white my-4 opacity-50" />
      <div>
        <h3 className="text-white font-md text-md opacity-70">
          © 2024 Все права защищены. Цены на сайте не являются публичной офертой.
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
