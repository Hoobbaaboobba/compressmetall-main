import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full flex justify-center items-center pt-6">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
        <Skeleton className="w-full h-[250px]" />
      </div>
    </div>
  );
}
