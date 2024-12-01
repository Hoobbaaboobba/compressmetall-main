import { RedirectButton } from "@/components/ErrorPages/RedirectButton";
import { RedirectSign } from "@/components/ErrorPages/RedirectSign";
import { Separator } from "@/components/ui/separator";

export default function NotFoundPage() {
    return (
        <div className="mx-auto mt-8">
            <div className="flex flex-col justify-center items-center">
                <p className="text-6xl font-bold">404</p>
                <h3 className="text-2xl font-medium mt-1">Страница не найдена</h3>
                <Separator className="w-[100px] my-6" />
                <RedirectSign />
                <RedirectButton />
            </div>
        </div>
    )
}
