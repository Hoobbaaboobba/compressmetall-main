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
}: {
  children?: React.ReactNode;
  catalog?: boolean;
  type?: string;
  category?: string;
  variety?: string;
  id?: string;
  size?: string;
}) => {
  const pathname = usePathname().split("/");

  return (
    <Link
      className="absolute top-0 left-0 w-full h-full"
      href={`/${pathname[1]}/${catalog && "catalog"}${
        (type && `/${type}`) || ""
      }${(category && `/${category}`) || ""}${
        (variety && `/${variety}`) || ""
      }${(id && `/${id}`) || ""}${(size && `/${size}`) || ""}`}
    >
      {children}
    </Link>
  );
};
