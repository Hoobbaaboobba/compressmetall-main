"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

type CatalogButtonProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    href?: string;
}

export const CatalogButton = ({ children, href, ...props }: CatalogButtonProps) => {
    const city = usePathname().split("/")[1] || "moscow"
    return (
        <div {...props}>
            {href ? (
                <Link className="text-black flex justify-center items-center gap-1 hover:underline" href={`/${city}/${href}`}>
                    {children}
                </Link>
            ) : (
                <button className="text-black flex justify-center items-center gap-1 hover:underline">
                    {children}
                </button>
            )}
        </div>
    )
}
