import React from "react";
import Filters from "../../../components/Directory/Filters";
import { Separator } from "@/components/ui/separator";

export default function DirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex gap-4">
      {children}
      <div className="pt-[250px]">
        <Separator orientation="vertical" />
      </div>
      <Filters />
    </div>
  );
}
