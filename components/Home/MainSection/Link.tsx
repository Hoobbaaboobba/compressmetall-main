"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const LinkButton = ({
    children,
    catalog,
    type,
    category,
    variety,
    id,
    size,
    secondsize,
    thirdsize,
    fourthsize,
    fifthsize,
    label
}: {
    children?: React.ReactNode;
    catalog?: boolean;
    type?: string;
    category?: string;
    variety?: string;
    id?: string;
    size?: string;
    secondsize?: string
    thirdsize?: string
    fourthsize?: string
    fifthsize?: string
    label?: string
}) => {
    const pathname = usePathname().split("/");

    return (
        <Link
            href={`/${pathname[1] || "moscow"}/${catalog && "catalog"}${(type && `/${type}`) || ""
                }${(category && `/${category}`) || ""}${(variety && `/${variety}`) || ""
                }${(id && `/${id}`) || ""}${(size && `/${size}`) || ""}${(label && `?label=${label}`) || ""}${(secondsize && `&secondsize=${secondsize}`) || ""}${(thirdsize && `&thirdsize=${thirdsize}`) || ""}${(fourthsize && `&forthsize=${fourthsize}`) || ""}${(fifthsize && `&fifthsize=${fifthsize}`) || ""}`}
        >
            {children}
        </Link>
    );
};
