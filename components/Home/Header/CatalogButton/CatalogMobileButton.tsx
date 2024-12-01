"use client"

import { cn } from "@/lib/utils";
import Link from "next/link"
import { usePathname } from "next/navigation"

type CatalogMobileButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    href?: string;
    children: React.ReactNode;
    className?: string
}

export const CatalogMobileButton = ({ href, children, className, ...props }: CatalogMobileButtonProps) => {
    const pathname = usePathname().split("/")

    return (
        <div {...props}>
            {href ? (
                <Link
                    href={`/${pathname[1]}/${href}`}
                    className={`font-bold gap-1 w-full flex justify-center items-center py-6 ${pathname[2] === href ? "bg-orange-bg" : "bg-transparent"
                        }`}
                >
                    {children}
                </Link>
            ) : (
                <button
                    className={cn(`font-bold gap-1 w-full flex justify-center items-center py-6 ${pathname[2] === href ? "bg-orange-bg" : "bg-transparent"}`, className)}
                >
                    {children}
                </button>
            )}
        </div>
    )
}
