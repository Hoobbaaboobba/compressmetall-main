"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import CatalogContent from "./CatalogContent";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Link from "next/link";
import Loading from "@/app/loading";
import { useRouter } from "next/navigation";

const options = [
  {
    value: "Все товары",
  },
  {
    value: "Чёрный металл",
  },
  {
    value: "Цветной металл",
  },
  {
    value: "Нержавеющая сталь",
  },
  {
    value: "Оцинкованная сталь",
  },
  {
    value: "Метизы",
  },
  {
    value: "Трубопроводная арматура",
  },
  {
    value: "Прецензионные сплавы",
  },
];

const CatalogSelectorPage = () => {
  const [selectOption, setSelectOption] = useState(false);

  const pathname = usePathname().split("/");

  const params = useSearchParams();
  const query = params.get("q");

  const router = useRouter();

  return (
    <main className="flex justify-center">
      <div className="max-w-[1000px] w-full flex flex-col py-8 px-4">
        <div className="w-full relative">
          <div className="flex gap-4 justify-start items-center">
            <div
              onClick={() => router.back()}
              className="rounded-full text-white bg-orange-bg cursor-pointer"
            >
              <ChevronLeftIcon fontSize="large" />
            </div>
            <button
              id="select"
              onClick={() => setSelectOption((event) => !event)}
              className="w-[260px] focus:outline-orange-bg rounded-lg cursor-pointer font-bold py-1 px-2 text-gray-bg border border-light-gray z-0"
            >
              <div className="w-full flex justify-between items-center">
                <h1>{query ? query : "Все товары"}</h1>
                <KeyboardArrowDownIcon
                  className={`${
                    selectOption ? "rotate-180" : "rotate-0"
                  } transition duration-200`}
                />
              </div>
            </button>
          </div>
          <div
            className={`${
              selectOption ? "block" : "hidden"
            } absolute top-[35px] bg-white rounded-lg z-20 shadow-lg flex`}
          >
            <div
              onClick={() => setSelectOption(false)}
              className="fixed top-0 left-0 w-full h-full z-10"
            ></div>
            <ul className="flex flex-col text-black z-50 py-2 w-[260px]">
              {options.map((option, index) => (
                <Link
                  key={index}
                  href={`/${pathname[1] || "moscow"}/catalog?q=${option.value}`}
                >
                  <li
                    onClick={() => setSelectOption(false)}
                    className={`${
                      query === option.value ? "bg-orange-bg text-white" : ""
                    } cursor-pointer p-1 px-2 hover:bg-orange-bg hover:text-white`}
                  >
                    {option.value}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <Suspense fallback={<Loading />}>
          <CatalogContent query={query || "Все товары"} />
        </Suspense>
      </div>
    </main>
  );
};

export default CatalogSelectorPage;
