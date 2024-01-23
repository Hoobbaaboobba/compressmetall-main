"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  categoryTitle?: string;
  lastCategory?: boolean;
  variantTitle?: string[];
  lastVariant?: boolean;
  pageTitle?: string;
  lastPage?: boolean;
}

const HyperLinks = ({
  categoryTitle,
  lastCategory,
  variantTitle,
  lastVariant,
}: Props) => {
  const pathname = usePathname().split("/");

  const category =
    categoryTitle &&
    categoryTitle?.charAt(0).toUpperCase() +
      categoryTitle.slice(1).toLocaleLowerCase();

  const titleOfProkat =
    (pathname[3] === "tsvetnoi-prokat" && "Цветной прокат") ||
    (pathname[3] === "cherniy-prokat" && "Чёрный прокат") ||
    (pathname[3] === "trubniy-prokat" && "Трубопроводный прокат") ||
    (pathname[3] === "nershav-prokat" && "Нержавеющие металлы") ||
    (pathname[3] === "metizi-prokat" && "Метизы") ||
    (pathname[3] === "precensplav" && "Прецензионные сплавы");

  return (
    <div className="w-full text-sm justify-center items-center sm:justify-start  my-1 flex flex-wrap gap-2">
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
              {variantTitle[0]}
            </Link>
          ) : (
            <span className="opacity-50">{variantTitle[0]}</span>
          )}
        </>
      )}
    </div>
  );
};

export default HyperLinks;
