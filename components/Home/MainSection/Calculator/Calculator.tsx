import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils";
import { CalculatorIcon, Loader2 } from "lucide-react";

interface CalculatorProps {
    className?: string
}

export const Calculator = ({ className }: CalculatorProps) => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className={cn("text-md w-full", className)}>
                    Калькулятор
                    <CalculatorIcon className="ml-1 w-5 h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[1000px] w-full">
                <div className="w-full h-full flex justify-center items-center relative p-1">
                    <Loader2 className="w-10 h-10 animate-spin z-0 absolute" />
                    <iframe src="https://metall-calculator.top/iframe/" width="100%" height="600" className="z-10"></iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}
