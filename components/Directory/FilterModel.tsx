"use client";

import { Button } from "@/components/ui/button";
import { Clock4Icon, MousePointerClickIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FilterModel = ({ title, href }: { title: string; href: string }) => {
  const pathname = usePathname().split("/");

  return (
    <Button
      variant="orange"
      className={`${
        href === pathname[3] && "bg-orange-bg text-primary-foreground"
      } ${href === "/" && "text-slate-500"} text-lg w-full`}
      asChild
    >
      {href === "/" ? (
        <button>
          {title}
          <Clock4Icon className="ml-2 w-5 h-5" />
        </button>
      ) : (
        <Link href={`/${pathname[1] || "moscow"}/directory/${href}`}>
          {title} <MousePointerClickIcon className="ml-2 w-5 h-5" />
        </Link>
      )}
    </Button>
  );
};

export default FilterModel;
