import { TypographyH1 } from "@/components/Global/Typography/TypographyH1";
import { TypographyH2 } from "@/components/Global/Typography/TypographyH2";
import { TypographyH3 } from "@/components/Global/Typography/TypographyH3";
import { ServicesHeader } from "@/app/moscow/services/components/Header";
import { TypographyP } from "@/components/Global/Typography/TypographyP";
import { TypographyList } from "@/components/Global/Typography/TypographyList";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Request } from "./Request";
import { TypographyH4 } from "@/components/Global/Typography/TypographyH4";

const rezkaList = [
    "лазерные",
    "плазменные",
    "газокислородные",
    "токарные",
    "фрезеровочные",
    "гидроабразивные",
    "сверлильные",
    "расточные и др",
];

const plasmenaya_rezka_metalla = [
    {
        tolshina: "0,5",
        chernayaStal: "57,132",
        vrezka1: "3,00",
        nershavStal: "60,306",
        vrezka2: "3,00",
        alumLatun: "61,893",
        vrezka3: "3,00",
    },
    {
        tolshina: "0,8",
        chernayaStal: "60,306",
        vrezka1: "3,00",
        nershavStal: "66,654",
        vrezka2: "3,00",
        alumLatun: "68,241",
        vrezka3: "3,00",
    },
    {
        tolshina: "1",
        chernayaStal: "63,48",
        vrezka1: "3,00",
        nershavStal: "74,589",
        vrezka2: "3,00",
        alumLatun: "76,176",
        vrezka3: "3,00",
    },
    {
        tolshina: "1,5",
        chernayaStal: "69,828",
        vrezka1: "3,00",
        nershavStal: "77,763",
        vrezka2: "3,00",
        alumLatun: "80,937",
        vrezka3: "3,00",
    },
    {
        tolshina: "2",
        chernayaStal: "76,176",
        vrezka1: "3,00",
        nershavStal: "84,111",
        vrezka2: "3,00",
        alumLatun: "88,872",
        vrezka3: "3,00",
    },
    {
        tolshina: "2,5",
        chernayaStal: "85,698",
        vrezka1: "3,00",
        nershavStal: "107,916",
        vrezka2: "4,00",
        alumLatun: "112,677",
        vrezka3: "3,00",
    },
    {
        tolshina: "3",
        chernayaStal: "98,394",
        vrezka1: "3,00",
        nershavStal: "141,243",
        vrezka2: "4,00",
        alumLatun: "146,004",
        vrezka3: "4,00",
    },
    {
        tolshina: "4",
        chernayaStal: "115,851",
        vrezka1: "4,00",
        nershavStal: "150,765",
        vrezka2: "4,00",
        alumLatun: "155,526",
        vrezka3: "4,00",
    },
    {
        tolshina: "5",
        chernayaStal: "136,482",
        vrezka1: "4,00",
        nershavStal: "192,027",
        vrezka2: "8,00",
        alumLatun: "195,201",
        vrezka3: "8,00",
    },
    {
        tolshina: "6",
        chernayaStal: "171,396",
        vrezka1: "4,00",
        nershavStal: "274,551",
        vrezka2: "8,00",
        alumLatun: "279,312",
        vrezka3: "8,00",
    },
    {
        tolshina: "7",
        chernayaStal: "199,962",
        vrezka1: "4,00",
        nershavStal: "350,727",
        vrezka2: "8,00",
        alumLatun: "360,249",
        vrezka3: "8,00",
    },
    {
        tolshina: "8",
        chernayaStal: "241,224",
        vrezka1: "8,00",
        nershavStal: "441,186",
        vrezka2: "8,00",
        alumLatun: "звоните*",
        vrezka3: "-",
    },
    {
        tolshina: "10",
        chernayaStal: "333,27",
        vrezka1: "8,00",
        nershavStal: "758,586",
        vrezka2: "8,00",
        alumLatun: "звоните*",
        vrezka3: "-",
    },
    {
        tolshina: "12",
        chernayaStal: "420,555",
        vrezka1: "8,00",
        nershavStal: "звоните*",
        vrezka2: "-",
        alumLatun: "звоните*",
        vrezka3: "-",
    },
    {
        tolshina: "14",
        chernayaStal: "518,42",
        vrezka1: "10,00",
        nershavStal: "звоните*",
        vrezka2: "-",
        alumLatun: "звоните*",
        vrezka3: "-",
    },
    {
        tolshina: "16",
        chernayaStal: "627,67",
        vrezka1: "12,00",
        nershavStal: "звоните*",
        vrezka2: "-",
        alumLatun: "звоните*",
        vrezka3: "-",
    },
    {
        tolshina: "18",
        chernayaStal: "771,305",
        vrezka1: "14,00",
        nershavStal: "",
        vrezka2: "",
        alumLatun: "",
        vrezka3: "",
    },
    {
        tolshina: "20",
        chernayaStal: "955,075",
        vrezka1: "16,00",
        nershavStal: "",
        vrezka2: "",
        alumLatun: "",
        vrezka3: "",
    },
];

export const RezkaMetallaContent = () => {
    return (
        <div className="w-full">
            <ServicesHeader title="Резка металла" />
            <TypographyH2 className="my-4">
                Профессиональные услуги по резке металла
            </TypographyH2>
            <TypographyH3>
                Наша компания предоставляет услуги качественной и оперативной резки
                металла.
            </TypographyH3>
            <TypographyP>
                Резка представляет собой разделение металлического листа или сортового
                металлана отдельные части или заготовки. Все виды резки делятся на
                механические и термические, для их выполнения используется специальное
                оборудование. В наших цехах установлены различные высокоточные агрегаты
                для проведения подобных работ. Это буровые прессы, гильотины и
                разнообразные станки:
            </TypographyP>
            <TypographyList list={rezkaList} />
            <TypographyP>
                Все оборудование обслуживает квалифицированный технический персонал, во
                время выполнения заказа процесс обработки листовых металлов находится
                под контролем наших специалистов-технологов.
            </TypographyP>
            <TypographyH2 className="my-4">
                Основные способы резки металла на заказ:
            </TypographyH2>
            <TypographyP>
                Современная металлообработка чаще всего использует для разрезания
                металлических листов следующие высокотехнологические методы:
            </TypographyP>
            <TypographyList
                list={[
                    "лазерную резку",
                    "резку при помощи плазмотрона",
                    "газокислородную обработку",
                ]}
            />
            <TypographyP>
                Каждый из этих способов разрезания листа имеет свои достоинства.
            </TypographyP>
            <TypographyP>
                Преимуществами лазерной обработки являются высокая скорость процесса и
                универсальность: лазер легко режет любые металлы, за исключением
                алюминия и его сплавов. Использование лазера дает высокое качество реза
                и позволяет выполнить даже очень сложный фигурный раскрой. Срез,
                выполненный лазером, не имеет наплывов, металлический лист не
                деформируется. Однако у этого способа имеются ограничения: он подходит
                для обработки металлических пластин только небольшой толщины.{" "}
            </TypographyP>
            <TypographyP>
                Плазменная обработка применяется, если необходимо разрезать такой
                металл, как титан или чугун; плазмотрон также отлично справляется с
                раскроем высоко- и низкоуглеродистых сталей, нержавеющей стали, сплавов
                цветных металлов и биметаллов. При этом способе толщина металлических
                пластин может быть самой разной, но разрез нуждается в дополнительной
                обработке.
            </TypographyP>
            <TypographyP>
                Газокислородный способ резки предпочтительнее лазерного и плазменного,
                если требуется обработка металлических пластин большой толщины.
                Направленная кислородная струя прожигает металлический лист по линии
                разреза, при этом продукты сгорания сразу же выдуваются. Этот способ
                отличается простотой и низкой стоимостью.
            </TypographyP>
            <TypographyH3>Длина контура до 100 м, руб. (Цена, руб/м)</TypographyH3>
            <div className="flex gap-8 flex-col md:flex-row">
                <Table className="mt-6 w-full border">
                    <TableCaption>Резка металла</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[150px] text-center text-md font-semibold">
                                Толщина мм
                            </TableHead>
                            <TableHead className="text-center text-md font-semibold">
                                Чёрная сталь
                            </TableHead>
                            <TableHead className="text-center text-md font-semibold">
                                Врезка
                            </TableHead>
                            <TableHead className="text-center text-md font-semibold">
                                Нерж. сталь
                            </TableHead>
                            <TableHead className="text-center text-md font-semibold">
                                Врезка
                            </TableHead>
                            <TableHead className="text-center text-md font-semibold">
                                Алюминий/Латунь
                            </TableHead>
                            <TableHead className="text-center text-md font-semibold">
                                Врезка
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {plasmenaya_rezka_metalla.map((row) => (
                            <TableRow key={row.tolshina}>
                                <TableCell className="font-medium text-md text-center">
                                    {row.tolshina}
                                </TableCell>
                                <TableCell className="font-medium text-md text-center">
                                    {row.chernayaStal}
                                </TableCell>
                                <TableCell className="font-medium text-md text-center">
                                    {row.vrezka1}
                                </TableCell>
                                <TableCell className="font-medium text-md text-center">
                                    {row.nershavStal}
                                </TableCell>
                                <TableCell className="font-medium text-md text-center">
                                    {row.vrezka2}
                                </TableCell>
                                <TableCell className="font-medium text-md text-center">
                                    {row.alumLatun}
                                </TableCell>
                                <TableCell className="font-medium text-md text-center">
                                    {row.vrezka3}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
