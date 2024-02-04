import OrangeButton from "@/components/OrangeButton";
import { Product } from "@prisma/client";
import { TableCell, TableRow } from "@/components/ui/table";
import { useRouter } from "next/navigation";

interface Props {
  pathname: string;
  marka: string;
  size: string;
  label: string;
  products: Product[];
  first: string;
  second?: string;
  third?: string;
  forth?: string;
  fifth?: string;
}

const DynamicVariantsComponent = ({
  pathname,
  marka,
  size,
  label,
  products,
  first,
  second,
  third,
  forth,
  fifth,
}: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(
      `/${pathname}/catalog/${products[0].type}/${products[0].category}/${
        products[0].variety
      }/${marka.replace("/", "[")}/${size}?label=${label}`
    );
  };
  return (
    <TableRow className="w-full cursor-pointer" onClick={onClick}>
      <TableCell className="md:font-medium text-md md:text-lg">
        {label}
      </TableCell>
      <TableCell className="md:font-medium text-md md:text-lg">
        {marka}
      </TableCell>
      <TableCell className="md:font-medium text-md md:text-lg">
        {first.replace("mm", " мм")}
      </TableCell>
      {second && (
        <TableCell className="md:font-medium text-md md:text-lg">
          {second.replace("mm", " мм")}
        </TableCell>
      )}
      {third && (
        <TableCell className="md:font-medium text-md md:text-lg">
          {third.replace("mm", " мм")}
        </TableCell>
      )}
      {forth && (
        <TableCell className="md:font-medium text-md md:text-lg">
          {forth.replace("mm", " мм")}
        </TableCell>
      )}
      {fifth && (
        <TableCell className="md:font-medium text-md md:text-lg">
          {fifth.replace("mm", " мм")}
        </TableCell>
      )}
      <TableCell className="md:font-medium text-md md:flex justify-end items-center">
        <div className="w-full flex justify-center items-center">
          <OrangeButton label={"Подробнее"} mark />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default DynamicVariantsComponent;
