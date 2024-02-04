"use client";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";

import { Product } from "@prisma/client";
import FilterSelector from "./FilterSelector";

interface Props {
  products: Product[];
  markaQ: string;
  sizeQ: string;
  secondSizeQ?: string;
}

const DynamicVariantsSelector = ({
  products,
  markaQ,
  sizeQ,
  secondSizeQ,
}: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const labelQuery = searchParams.get("label") || "";
  const markaQuery = searchParams.get("marka") || "";
  const sizeQuery = searchParams.get("size") || "";
  const secondSizeQuery = searchParams.get("secondsize") || "";
  const thirdSizeQuery = searchParams.get("thirdsize") || "";
  const forthSizeQuery = searchParams.get("forthsize") || "";
  const fifthSizeQuery = searchParams.get("fifthsize") || "";

  const deleteQuery = () => {
    router.push(pathname);
  };

  const filtersArray = [
    {
      data: products[0].label,
      label: "Найти по названию",
      emptyLabel: "Такого названия нет",
      queryLabel: "label",
      query: labelQuery,
    },
    {
      data: products[0].marks,
      label: "Найти по марке",
      emptyLabel: "Такой марки нет",
      queryLabel: "marka",
      query: markaQuery,
    },
    {
      data: products[0].sizes,
      label: products[0].firstTypeOfSize,
      emptyLabel: "Такого размера нет",
      queryLabel: "size",
      query: sizeQuery,
    },
    {
      data: products[0].secondSizes,
      label: products[0].secondTypeOfSize,
      emptyLabel: "Такого размера нет",
      queryLabel: "secondsize",
      query: secondSizeQuery,
    },
    {
      data: products[0].thirdSizes,
      label: products[0].thirdTypeOfSize,
      emptyLabel: "Такого размера нет",
      queryLabel: "thirdsize",
      query: thirdSizeQuery,
    },
    {
      data: products[0].forthSizes,
      label: products[0].forthTypeOfSize,
      emptyLabel: "Такого размера нет",
      queryLabel: "forthsize",
      query: forthSizeQuery,
    },
    {
      data: products[0].fifthSizes,
      label: products[0].fifthtypeOfSize,
      emptyLabel: "Такого размера нет",
      queryLabel: "fifthsize",
      query: fifthSizeQuery,
    },
  ];

  return (
    <div className="flex bg-white left-0 w-full gap-2 justify-start items-center overflow-x-auto">
      {filtersArray.map(
        (filter) =>
          filter.label && (
            <FilterSelector
              data={filter.data}
              label={filter.label}
              emptyLabel={filter.emptyLabel}
              queryLabel={filter.queryLabel}
              query={filter.query}
            />
          )
      )}
      <div
        onClick={deleteQuery}
        className={`${
          labelQuery.length > 0 ||
          markaQuery.length > 0 ||
          sizeQuery.length > 0 ||
          secondSizeQuery.length > 0 ||
          thirdSizeQuery.length > 0 ||
          forthSizeQuery.length > 0 ||
          fifthSizeQuery.length > 0
            ? "block"
            : "hidden"
        } cursor-pointer`}
      >
        <CloseIcon fontSize="large" />
      </div>
    </div>
  );
};

export default DynamicVariantsSelector;
