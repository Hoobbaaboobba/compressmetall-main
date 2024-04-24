"use client";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SlashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface Props {
  typeLink?: string;
  categoryTitle?: string;
  categoryLink?: string;
  variantTitle?: string[];
  variantLink?: string;
  last?: boolean;
}

const HyperLinks = ({
  typeLink,
  categoryTitle,
  categoryLink,
  variantTitle,
  variantLink,
  last,
}: Props) => {
  const pathname = usePathname().split("/");

  const elementRef = useRef<HTMLLIElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      // Check if the elementRef has been assigned
      if (elementRef.current) {
        // Get the width of the element
        const newWidth = elementRef.current.offsetWidth;
        // Update the width state
        setWidth(newWidth);
      }
    };

    // Call updateWidth initially
    updateWidth();

    // Event listener for window resize
    window.addEventListener("resize", updateWidth);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!variantTitle) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link title="Главная" href={`/${pathname[1]}/`}>
                Главная
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  if (!last) {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link title="Главная" href={`/${pathname[1]}/`}>
                Главная
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                title={categoryTitle?.toString()}
                href={`/${pathname[1]}/catalog/${typeLink}/${categoryLink}`}
              >
                {categoryTitle}
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
        </BreadcrumbList>
      </Breadcrumb>
    );
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink title="Главная" asChild>
            <Link href={`/${pathname[1]}/`}>Главная</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem className={`${width < 300 ? "block" : "hidden"}`}>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1">
              <BreadcrumbEllipsis />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem asChild>
                <Link
                  title={categoryTitle?.toString()}
                  href={`/${pathname[1]}/catalog/${typeLink}/${categoryLink}`}
                >
                  {categoryTitle}
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </BreadcrumbItem>
        <BreadcrumbItem className={`${width < 300 ? "hidden" : "block"}`}>
          <BreadcrumbLink title="Главная" asChild>
            <Link href={`/${pathname[1]}/catalog/${typeLink}/${categoryLink}`}>
              {categoryTitle}
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              title={variantTitle.toString()}
              href={`/${pathname[1]}/catalog/${typeLink}/${categoryLink}/${variantLink}`}
            >
              <span className="truncate max-w-[200px]">{variantTitle}</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <SlashIcon />
        </BreadcrumbSeparator>
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default HyperLinks;
