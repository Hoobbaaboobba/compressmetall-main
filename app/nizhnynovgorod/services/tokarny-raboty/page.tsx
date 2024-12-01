import { Metadata } from "next";
import { TokarnyRabotyContent } from "@/app/moscow/services/tokarny-raboty/components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Токарные работы',
  description: 'Компресс Металл предлагает услуги токарных работы.',
}

export default function TokarnyRaboty() {
    return (
        <>
            <TokarnyRabotyContent />
        </>
    )
}
