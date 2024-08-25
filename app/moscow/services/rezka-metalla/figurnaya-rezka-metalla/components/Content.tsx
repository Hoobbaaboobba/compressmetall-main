import { TypographyH2 } from "@/components/Global/Typography/TypographyH2"
import { ServicesHeader } from "../../../components/Header"
import { TypographyP } from "@/components/Global/Typography/TypographyP"
import { TypographyList } from "@/components/Global/Typography/TypographyList"

const Popular = [
    "плазменная",
    "лазерная",
    "гидроабразивная обработка",
    "механические способы (например, при помощи гильотинных ножниц)",
]

export const FigurnayaRezkaMetallaContent = () => {
    return (
        <>
            <ServicesHeader title="Фигурная резка металла"/>
            <TypographyH2 className="mt-4">Услуги фигурной резки металла на заказ</TypographyH2>
            <TypographyP>Компания "Компресс Металл" предлагает услуги фигурной резки по металлу. Художественная резка по металлу представляет собой нанесение на листовой металл различных рисунков и надписей. Сутью художественной резки является вырезание на металлическом листе определенного количества замкнутых контуров. Благодаря получившемуся контрасту пустот и металла возникает изображение.</TypographyP>
            <TypographyP>Наши специалисты владеют всеми современными технологиями обработки металлоизделий и выполнят заказ в течение минимального времени. Цеха нашей компании оснащены высокоточным оборудованием, позволяющим вырезать даже очень сложные рисунки, а также создавать на металле объемные изображения.</TypographyP>
            <TypographyP>Мы гарантируем самое высокое качество фигурного раскроя листового проката.</TypographyP>
            <TypographyH2 className="mt-6">Технология процесса</TypographyH2>
            <TypographyP>Металл можно резать несколькими различными способами, для каждого из которых используются специальные станки.</TypographyP>
            <TypographyP>Наиболее популярны следующие методы фигурной резки:</TypographyP>
            <TypographyList list={Popular}/>
            <TypographyP>Существенным преимуществом плазменной металлообработки является регулирование мощности плазменной струи. Благодаря применению станков с ЧПУ становится возможной объемная фигурная резка. Заданный программой рельеф достигается за счет постепенного снятия с металлоизделия разного количества материала. В результате такого программирования плазмотрона получаются эффектные объемные картины или орнаменты.</TypographyP>
            <TypographyP>Также популярна резка сложных фигур при помощи лазера. Этот способ резать металл отличается очень высокой скоростью и отсутствием необходимости дополнительно обрабатывать края рисунка. Лазер, как и плазмотрон, способен следовать контурам очень сложной конфигурации. Применение лазера позволяет успешно резать сплавы с высокой степенью хрупкости и склонные к деформации.</TypographyP>
            <TypographyH2 className="mt-6">Как заказать художественную резку по металлу</TypographyH2>
            <TypographyP>Наша компания осуществляет фигурную резку металлических листов по наиболее привлекательным в Москве ценам. Стоимость именно вашего заказа можно узнать у нашего специалиста, позвонив по контактному телефону.</TypographyP>
        </>
    )
}