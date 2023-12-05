"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  categoryTitle?: string;
  lastCategory?: boolean;
  variantTitle?: string | string[];
  lastVariant?: boolean;
  pageTitle?: string;
  lastPage?: boolean;
}

const HyperLinks = ({
  categoryTitle,
  lastCategory,
  variantTitle,
  lastVariant,
  pageTitle,
  lastPage,
}: Props) => {
  const pathname = usePathname().split("/");

  const category =
    categoryTitle &&
    categoryTitle?.charAt(0).toUpperCase() +
      categoryTitle.slice(1).toLocaleLowerCase();

  const titleOfProkat = pathname[3] === "tsvetnoi-prokat" && "Цветной прокат";

  return (
    <div className="w-full justify-start items-start my-1 flex gap-2">
      <Link
        className="hover:underline"
        href={`/${pathname[1]}/catalog/${pathname[3]}`}
      >
        {titleOfProkat}
      </Link>
      {categoryTitle && (
        <>
          <ChevronRight />
          {!lastCategory ? (
            <Link
              className="hover:underline"
              href={`/${pathname[1]}/catalog/${pathname[3]}/${pathname[4]}`}
            >
              {category}
            </Link>
          ) : (
            <span className="opacity-50">{category}</span>
          )}
        </>
      )}
      {variantTitle && (
        <>
          <ChevronRight />
          {!lastVariant ? (
            <Link
              className="hover:underline"
              href={`/${pathname[1]}/catalog/${pathname[3]}/${pathname[4]}/${pathname[5]}`}
            >
              {variantTitle}
            </Link>
          ) : (
            <span className="opacity-50">{variantTitle}</span>
          )}
        </>
      )}
    </div>
  );
};

export default HyperLinks;
