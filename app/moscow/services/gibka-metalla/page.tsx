import { Metadata } from "next";
import { GibkaMetallaContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Гибка металла',
  description: 'Компресс Металл предлагает услуги по гибке металла.',
}

export default function GibkaMetalla() {
    return (
        <>
            <GibkaMetallaContent />
        </>
    )
}
