"use client";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  products: any[];
  markaQ: string;
  sizeQ: string;
}

const DynamicVariantsSelector = ({ products, markaQ, sizeQ }: Props) => {
  const [marka, setMarka] = useState(false);
  const [value, setValue] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryMarkaString = useCallback(
    (marka: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(marka, value);

      return params;
    },
    [searchParams]
  );

  const createQuerySizeString = useCallback(
    (size: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(size, value);

      return params;
    },
    [searchParams]
  );

  const deleteQuery = () => {
    router.push(pathname);
    setMarka(false);
    setValue(false);
  };

  const onClickMarka = (ids: string) => {
    router.push(pathname + "?" + createQueryMarkaString("marka", `${ids}`));
    setValue(false);
    setMarka(false);
  };

  const onClickValue = (sizes: string) => {
    router.push(pathname + "?" + createQuerySizeString("size", `${sizes}`));
    setValue(false);
    setMarka(false);
  };

  const closeEverything = () => {
    setValue(false);
    setMarka(false);
  };

  return (
    <div className="flex w-full gap-2 justify-start items-center">
      <div
        onClick={closeEverything}
        className={`${
          marka || value ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full bg-transparent`}
      ></div>
      <FilterAltIcon fontSize="large" />
      <div className="relative">
        <div
          onClick={() => setMarka((event) => !event)}
          className="flex border border-orange-text rounded-md justify-center items-center py-2 px-3 cursor-pointer gap-2"
        >
          <h1 className="text-lg">Марка</h1>
          <KeyboardArrowDownIcon />
        </div>
        <ul
          className={`absolute w-full ${
            marka ? "flex" : "hidden"
          } max-h-[200px] transition overflow-y-auto flex-col justify-start items-start bg-white shadow-md text-center gap-2 py-2 z-10 top-[50px] left-0 rounded-md`}
        >
          {products[0].id.map((ids: any) => (
            <li
              className="w-full hover:underline cursor-pointer"
              onClick={() => onClickMarka(ids)}
            >
              {ids}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div
          onClick={() => setValue((event) => !event)}
          className="flex border border-orange-text rounded-md justify-center items-center py-2 px-3 cursor-pointer gap-2"
        >
          <h1 className="text-lg">{products[0].typeOfSize}</h1>
          <KeyboardArrowDownIcon />
        </div>
        <ul
          className={`absolute w-full ${
            value ? "flex" : "hidden"
          } max-h-[200px] transition overflow-y-auto flex-col justify-start items-start bg-white shadow-md text-center gap-2 py-2 z-10 top-[50px] left-0 rounded-md`}
        >
          {products[0].ENGSize.map((sizes: any) => (
            <li
              className="w-full hover:underline cursor-pointer"
              onClick={() => onClickValue(sizes)}
            >
              {sizes.replace("mm", " мм")}
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={deleteQuery}
        className={`${
          markaQ.length > 0 || sizeQ.length > 0 ? "block" : "hidden"
        } cursor-pointer`}
      >
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
};

export default DynamicVariantsSelector;
