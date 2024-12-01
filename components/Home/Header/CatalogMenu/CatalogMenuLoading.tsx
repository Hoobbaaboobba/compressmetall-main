import { Skeleton } from "@/components/ui/skeleton"

export const CatalogMenuLoading = () => {
    return (
        <div className="flex flex-col gap-1">
            {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} className="w-[300px] h-[40px]" />
            ))}
        </div>
    )
}

export const CatalogMenuLinksLoading = () => {
    return (
        <div className="flex flex-col gap-1">
            {Array.from({ length: 20 }).map((_, index) => (
                <Skeleton key={index} className="w-full h-[40px]" />
            ))}
        </div>
    )
}
