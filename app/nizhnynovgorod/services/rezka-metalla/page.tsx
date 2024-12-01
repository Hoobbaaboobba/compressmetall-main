import { RezkaMetallaContent } from "@/app/moscow/services/rezka-metalla/components/Content";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Компресс Металл | Услуги | Резка металла',
    description: 'Компресс Металл предлагает услуги по резке металла.',
}

export default function RezkaMetalla() {
    return <RezkaMetallaContent />
}
