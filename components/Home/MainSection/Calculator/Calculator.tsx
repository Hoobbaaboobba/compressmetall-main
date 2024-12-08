'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { CalculatorIcon, Loader, Loader2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CalculatorProps {
    className?: string
}

export const Calculator = ({ className }: CalculatorProps) => {
    const [isMounted, setIsMounted] = useState(false)

    const handleLoad = () => {
        setIsMounted(true)
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className={cn("text-md w-full", className)}>
                    Калькулятор
                    <CalculatorIcon className="ml-1 w-5 h-5" />
                </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[710px] w-full">
                {!isMounted && <Loader2 className="animate-spin transition" />}
                <iframe onLoad={handleLoad} src="https://service-online.su/text/calc/calc1-01.php" width="100%" height="400"></iframe>
            </DialogContent>
        </Dialog>
    )
}
