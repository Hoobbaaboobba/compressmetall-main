import { Metadata } from "next";
import { StruynayaObrabotkaMetallaContent } from "@/app/moscow/services/struynaya-obrabotka-metalla/components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Струйная обработка металла',
  description: 'Компресс Металл предлагает услуги по производству и поставке струкной обработки металла.',
}

export default function StruynayaObrabotkaMetalla() {
    return (
        <>
            <StruynayaObrabotkaMetallaContent />
        </>
    )
}
