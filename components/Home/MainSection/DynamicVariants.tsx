"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DynamicVariantsSelector from "./DynamicVariantsSelector";
import HyperLinks from "./HyperLinks";
import { Button } from "@/components/ui/button";
import DynamicVariantsComponent from "./DynamicVariantsComponent";
import { getProducts } from "@/actions/getProducts";
import { Product } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ParamsProps {
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
}

const DynamicVariants = async ({ params }: ParamsProps) => {
  const [limit, setLimit] = useState<number>(5);
  const pathname = usePathname().split("/");
  const searchParams = useSearchParams();
  const labelQuery = searchParams.get("label") || "";
  const markaQuery = searchParams.get("marka") || "";
  const sizeQuery = searchParams.get("size") || "";
  const secondSizeQuery = searchParams.get("secondsize") || "";
  const thirdSizeQuery = searchParams.get("thirdsize") || "";
  const forthSizeQuery = searchParams.get("forthsize") || "";
  const fifthSizeQuery = searchParams.get("fifthsize") || "";

  const products: Product[] = await getProducts(
    params.type,
    params.category,
    params.variant
  );

  const filters = [
    {
      filterTitle: products[0].firstTypeOfSize,
      filterSizes: products[0].sizes,
    },
    {
      filterTitle: products[0].secondTypeOfSize,
      filterSizes: products[0].secondSizes,
    },
    {
      filterTitle: products[0].thirdTypeOfSize,
      filterSizes: products[0].thirdSizes,
    },
    {
      filterTitle: products[0].forthTypeOfSize,
      filterSizes: products[0].forthSizes,
    },
    {
      filterTitle: products[0].fifthtypeOfSize,
      filterSizes: products[0].fifthSizes,
    },
  ];

  const filterProductsByLabel = () => {
    if (labelQuery) {
      return products[0].label.filter((label) => label === labelQuery);
    } else {
      return products[0].label;
    }
  };

  const filterProductsByMarks = () => {
    if (markaQuery) {
      return products[0].marks
        .filter((marka) => marka === markaQuery)
        .splice(0, 4);
    } else {
      return products[0].marks.splice(0, 4);
    }
  };

  const filterProductsByFirstSizes = () => {
    if (sizeQuery) {
      return products[0].sizes.filter((size) => size === sizeQuery);
    } else {
      return products[0].sizes;
    }
  };

  const filterProductBySecondSises = () => {
    if (secondSizeQuery) {
      return products[0].secondSizes.filter(
        (second) => second === secondSizeQuery
      );
    } else {
      return products[0].secondSizes;
    }
  };

  const filterProductByThirdSises = () => {
    if (thirdSizeQuery) {
      return products[0].thirdSizes.filter((third) => third === thirdSizeQuery);
    } else {
      return products[0].thirdSizes;
    }
  };

  const filterProductByForthSises = () => {
    if (forthSizeQuery) {
      return products[0].forthSizes.filter((forth) => forth === forthSizeQuery);
    } else {
      return products[0].forthSizes;
    }
  };

  const filterProductByFifthSises = () => {
    if (fifthSizeQuery) {
      return products[0].fifthSizes.filter((fifth) => fifth === fifthSizeQuery);
    } else {
      return products[0].fifthSizes;
    }
  };

  const filterSizes = (marka: string, label: string) => {
    if (products[0].secondTypeOfSize) {
      if (products[0].thirdTypeOfSize) {
        if (products[0].forthTypeOfSize) {
          if (products[0].fifthtypeOfSize) {
            return filterProductsByFirstSizes().map((first) =>
              filterProductBySecondSises().map((second) =>
                filterProductByThirdSises().map((third) =>
                  filterProductByForthSises().map((forth) =>
                    filterProductByFifthSises().map((fifth) => (
                      <DynamicVariantsComponent
                        pathname={pathname[1] || "moscow"}
                        marka={marka}
                        size={first}
                        label={label}
                        products={products}
                        first={first}
                        second={second}
                        third={third}
                        forth={forth}
                        fifth={fifth}
                      />
                    ))
                  )
                )
              )
            );
          } else {
            return filterProductsByFirstSizes().map((first) =>
              filterProductBySecondSises().map((second) =>
                filterProductByThirdSises().map((third) =>
                  filterProductByForthSises().map((forth) => (
                    <DynamicVariantsComponent
                      pathname={pathname[1] || "moscow"}
                      marka={marka}
                      size={first}
                      label={label}
                      products={products}
                      first={first}
                      second={second}
                      third={third}
                      forth={forth}
                    />
                  ))
                )
              )
            );
          }
        } else {
          return filterProductsByFirstSizes().map((first) =>
            filterProductBySecondSises().map((second) =>
              filterProductByThirdSises().map((third) => (
                <DynamicVariantsComponent
                  pathname={pathname[1] || "moscow"}
                  marka={marka}
                  size={first}
                  label={label}
                  products={products}
                  first={first}
                  second={second}
                  third={third}
                />
              ))
            )
          );
        }
      } else {
        return filterProductsByFirstSizes().map((first) =>
          filterProductBySecondSises().map((second) => (
            <DynamicVariantsComponent
              pathname={pathname[1] || "moscow"}
              marka={marka}
              size={first}
              label={label}
              products={products}
              first={first}
              second={second}
            />
          ))
        );
      }
    } else {
      return filterProductsByFirstSizes().map((first) => (
        <DynamicVariantsComponent
          pathname={pathname[1] || "moscow"}
          marka={marka}
          size={first}
          label={label}
          products={products}
          first={first}
        />
      ));
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center gap-6 py-6 px-4">
      <div className="w-full mb-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black text-center xl:text-start">
          <h1>{products[0].label[0]}</h1>
        </h1>
        <div className="bg-black h-[5px] w-[80px] mt-4"></div>
      </div>
      <HyperLinks
        categoryTitle={products[0].pageTitle}
        variantTitle={products[0].label}
        lastVariant
      />
      <DynamicVariantsSelector
        products={products}
        markaQ={markaQuery}
        sizeQ={sizeQuery}
        secondSizeQ={secondSizeQuery}
      />
      <Table>
        <TableCaption>Список товаров.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell className="font-medium">Наименования</TableCell>
            <TableCell className="font-medium">Марки</TableCell>
            {filters.map(
              (filter) =>
                filter.filterTitle && (
                  <TableCell>{filter.filterTitle}</TableCell>
                )
            )}
            <TableCell className="font-medium"></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody className="w-full">
          {filterProductsByLabel().map((label) =>
            filterProductsByMarks().map((marka) => filterSizes(marka, label))
          )}
        </TableBody>
      </Table>
      <Button onClick={() => setLimit((event) => event + 5)}>
        Загрузить больше
      </Button>
    </div>
  );
};

export default DynamicVariants;
