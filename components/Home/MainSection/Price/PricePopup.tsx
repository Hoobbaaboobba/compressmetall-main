import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"

export const PricePopup = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <HelpCircle className="h-5 w-5 hover:text-black transition" />
                </TooltipTrigger>
                <TooltipContent className="max-w-[200px]">
                    <p className="text-[12px] leading-5">Конечная цена рассчитывается, исходя из количества заказываемой продукции, наличия её на наших складах, способа и места доставки</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
