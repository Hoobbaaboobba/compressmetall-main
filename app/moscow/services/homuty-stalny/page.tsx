import { Metadata } from "next";
import { HomutyStalnyContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Хомуты стальные',
  description: 'Компресс Металл предлагает услуги по производству и поставке хомутов стальных.',
}

export default function HomutyStalny() {
    return (
        <>
            <HomutyStalnyContent/>
        </>
    )
}
