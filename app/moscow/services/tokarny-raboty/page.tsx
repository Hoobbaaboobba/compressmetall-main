import { Metadata } from "next";
import { TokarnyRabotyContent } from "./components/Content";

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
