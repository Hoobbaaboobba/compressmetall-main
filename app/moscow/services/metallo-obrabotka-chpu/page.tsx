import { Metadata } from "next";
import { MetalloObrabotkaChpuContent } from "./components/Content";

export const metadata: Metadata = {
  title: 'Компресс Металл | Услуги | Металлообработка ЧПУ',
  description: 'Компресс Металл предлагает услуги по металлообработке ЧПУ.',
}

export default function MetalloObrabotkaChpu() {
    return (
        <>
            <MetalloObrabotkaChpuContent/>
        </>
    )
}
