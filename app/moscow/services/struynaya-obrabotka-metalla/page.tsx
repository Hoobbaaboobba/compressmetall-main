import { Metadata } from "next";
import { StruynayaObrabotkaMetallaContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Струкная обработка металла',
  description: 'Компресс Металл предлагает услуги по производству и поставке струкной обработки металла.',
}

export default function StruynayaObrabotkaMetalla() {
    return (
        <>
            <StruynayaObrabotkaMetallaContent />
        </>
    )
}
