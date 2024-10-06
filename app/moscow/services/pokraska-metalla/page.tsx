import { Metadata } from "next";
import { PokraskaMetallaContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Покраска металла',
  description: 'Компресс Металл предлагает услуги по производству и поставке покраски металла.',
}

export default function PokraskaMetalla() {
    return (
        <>
            <PokraskaMetallaContent />
        </>
    )
}
