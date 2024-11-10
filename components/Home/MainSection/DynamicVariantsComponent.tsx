import OrangeButton from "@/components/OrangeButton";
import { Product } from "@prisma/client";
import { TableCell, TableRow } from "@/components/ui/table";
import ProductLink from "../ProductLink";

interface Props {
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
    return (
        <TableRow className="w-full bg-white relative cursor-pointer">
            <TableCell className="md:font-medium text-md">
                {label}
            </TableCell>
            <TableCell className="md:font-medium text-md">
                {marka}
            </TableCell>
            <TableCell className="md:font-medium text-md">
                {first.replaceAll("mm", " мм")}
            </TableCell>
            {second && (
                <TableCell className="md:font-medium text-md">
                    {second.replaceAll("mm", " мм")}
                </TableCell>
            )}
            {third && (
                <TableCell className="md:font-medium text-md">
                    {third.replaceAll("mm", " мм")}
                </TableCell>
            )}
            {forth && (
                <TableCell className="md:font-medium text-md">
                    {forth.replaceAll("mm", " мм")}
                </TableCell>
            )}
            {fifth && (
                <TableCell className="md:font-medium text-md">
                    {fifth.replaceAll("mm", " мм")}
                </TableCell>
            )}
            <TableCell className="md:font-medium text-md md:flex justify-end items-center">
                <ProductLink
                    marka={marka}
                    size={size}
                    label={label}
                    second={second}
                    third={third}
                    forth={forth}
                    fifth={fifth}
                    products={products}
                >
                    <OrangeButton label={"Подробнее"} mark />
                </ProductLink>
            </TableCell>
            <ProductLink
                marka={marka}
                size={size}
                label={label}
                second={second}
                third={third}
                forth={forth}
                fifth={fifth}
                products={products}
            />
        </TableRow>
    );
};



export default DynamicVariantsComponent;
