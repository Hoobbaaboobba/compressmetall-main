import DynamicVariantsSelector from "./DynamicVariantsSelector";
import HyperLinks from "./HyperLinks";
import DynamicVariantsComponent from "./DynamicVariantsComponent";
import { Product } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ParamsProps {
  products: Product[];
  searchParams: { [key: string]: string | string[] | undefined } | undefined;
}

const DynamicVariants = ({ products, searchParams }: ParamsProps) => {
  const labelQuery = (searchParams && (searchParams[0] as string)) || "";
  const markaQuery = (searchParams && (searchParams[1] as string)) || "";
  const sizeQuery = (searchParams && (searchParams[2] as string)) || "";
  const secondSizeQuery = (searchParams && (searchParams[3] as string)) || "";
  const thirdSizeQuery = (searchParams && (searchParams[4] as string)) || "";
  const forthSizeQuery = (searchParams && (searchParams[5] as string)) || "";
  const fifthSizeQuery = (searchParams && (searchParams[6] as string)) || "";

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
      return products[0].marks.filter((marka) => marka === markaQuery);
    } else {
      return products[0].marks.slice(0, 10);
    }
  };

  const filterProductsByFirstSizes = () => {
    if (sizeQuery) {
      return products[0].sizes.filter((size) => size === sizeQuery);
    } else {
      return products[0].sizes.slice(0, 10);
    }
  };

  const filterProductBySecondSises = () => {
    if (secondSizeQuery) {
      return products[0].secondSizes.filter(
        (second) => second === secondSizeQuery
      );
    } else {
      return products[0].secondSizes.slice(0, 10);
    }
  };

  const filterProductByThirdSises = () => {
    if (thirdSizeQuery) {
      return products[0].thirdSizes.filter((third) => third === thirdSizeQuery);
    } else {
      return products[0].thirdSizes.slice(0, 10);
    }
  };

  const filterProductByForthSises = () => {
    if (forthSizeQuery) {
      return products[0].forthSizes.filter((forth) => forth === forthSizeQuery);
    } else {
      return products[0].forthSizes.slice(0, 10);
    }
  };

  const filterProductByFifthSises = () => {
    if (fifthSizeQuery) {
      return products[0].fifthSizes.filter((fifth) => fifth === fifthSizeQuery);
    } else {
      return products[0].fifthSizes.slice(0, 10);
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
                    filterProductByFifthSises().map((fifth, index) => (
                      <DynamicVariantsComponent
                        key={index}
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
                  filterProductByForthSises().map((forth, index) => (
                    <DynamicVariantsComponent
                      key={index}
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
              filterProductByThirdSises().map((third, index) => (
                <DynamicVariantsComponent
                  key={index}
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
          filterProductBySecondSises().map((second, index) => (
            <DynamicVariantsComponent
              key={index}
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
      return filterProductsByFirstSizes().map((first, index) => (
        <DynamicVariantsComponent
          key={index}
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
      <div className="w-full ">
        <HyperLinks
          categoryTitle={products[0].pageTitle}
          categoryLink={products[0].category}
          typeLink={products[0].type}
          variantTitle={products[0].label}
          variantLink={products[0].variety}
        />
      </div>
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
              (filter, index) =>
                filter.filterTitle && (
                  <TableCell key={index}>{filter.filterTitle}</TableCell>
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
      {/* <Button onClick={() => setLimit((event) => event + 5)}>
        Загрузить больше
      </Button> */}
    </div>
  );
};

export default DynamicVariants;
