import OrangeButton from "@/components/OrangeButton";
import Link from "next/link";

interface Props {
  ids: string;
  pathname: string;
  productType: string;
  productCategory: string;
  productVariety: string;
  label: string;
  sizes: string;
  products: Product[];
  secondSize?: string;
}

const DynamicVariantsComponent = ({
  ids,
  pathname,
  productCategory,
  productType,
  productVariety,
  label,
  sizes,
  secondSize,
  products,
}: Props) => {
  return (
    <Link
      key={ids}
      href={`/${pathname}/catalog/${productType}/${productCategory}/${productVariety}/${ids.replace(
        "/",
        "["
      )}/${sizes}?label=${label}`}
    >
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center h-[200px] py-4 md:py-0 md:h-[120px] border border-light-gray px-4 lg:hover:shadow-md transition">
        <div
          className={`grid ${
            products[0].secondFilter ? "grid-cols-4" : "grid-cols-3"
          } w-full`}
        >
          <h1 className="text-lg hidden md:block w-[350px]">{label}</h1>
          <h2 className="text-lg hidden md:block px-16">{ids}</h2>
          <h3 className="text-lg hidden md:block">
            {sizes.replace("mm", " мм")}
          </h3>
          {products[0].secondFilter && (
            <h3 className="text-lg hidden md:block">
              {secondSize?.replace("mm", " мм")}
            </h3>
          )}
        </div>
        <div className="hidden md:block">
          <OrangeButton label={"Подробнее"} mark />
        </div>
        <div className="md:hidden w-full h-full flex flex-col justify-between items-start">
          <div className="flex gap-1">
            <h1 className="text-lg">
              {label} {ids} {sizes.replace("mm", " мм")}
            </h1>
          </div>
          <div>
            <h1 className="text-md text-black/50">{ids}</h1>
            <h2 className="text-md text-black/50">
              {sizes.replace("mm", " мм")}
            </h2>
          </div>
          <OrangeButton label={"Подробнее"} mark full />
        </div>
      </div>
    </Link>
  );
};

export default DynamicVariantsComponent;
