"use client";

import { Product } from "@prisma/client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  marka: string;
  size: string;
  label: string;
  products: Product[];
  second?: string;
  third?: string;
  forth?: string;
  fifth?: string;
  children?: React.ReactNode;
}

const ProductLink = ({
  marka,
  size,
  label,
  products,
  second,
  third,
  forth,
  fifth,
  children,
}: Props) => {
  const pathname = usePathname().split("/")[0] || "moscow";

  let navlink;

  if (!second) {
    navlink = `/${pathname}/catalog/${products[0].type}/${
      products[0].category
    }/${products[0].variety}/${encodeURI(marka)}/${encodeURI(
      size
    )}?label=${label}`;
  } else if (!third) {
    navlink = `/${pathname}/catalog/${products[0].type}/${
      products[0].category
    }/${products[0].variety}/${encodeURI(marka)}/${encodeURI(
      size
    )}?label=${label}&secondsize=${second}`;
  } else if (!forth) {
    navlink = `/${pathname}/catalog/${products[0].type}/${
      products[0].category
    }/${products[0].variety}/${encodeURI(marka)}/${encodeURI(
      size
    )}?label=${label}&secondsize=${second}&thirdsize=${third}`;
  } else if (!fifth) {
    navlink = `/${pathname}/catalog/${products[0].type}/${
      products[0].category
    }/${products[0].variety}/${encodeURI(marka)}/${encodeURI(
      size
    )}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}`;
  } else {
    navlink = `/${pathname}/catalog/${products[0].type}/${
      products[0].category
    }/${products[0].variety}/${encodeURI(marka)}/${encodeURI(
      size
    )}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifth}`;
  }

  return (
    <Link
      href={navlink}
      className={
        children
          ? "w-full flex justify-center items-center"
          : "absolute top-0 left-0 w-full h-[68px]"
      }
    >
      {children}
    </Link>
  );
};

export default ProductLink;
