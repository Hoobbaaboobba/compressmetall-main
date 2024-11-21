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
    key: "1-2мм",
    value: "33руб/м",
  },
  {
    key: "3-4мм",
    value: "38руб/м",
  },
  {
    key: "5мм",
    value: "48руб/м",
  },
  {
    key: "6мм",
    value: "50руб/м",
  },
  {
    key: "8мм",
    value: "58руб/м",
  },
  {
    key: "10мм",
    value: "78руб/м",
  },
  {
    key: "12мм",
    value: "98руб/м",
  },
  {
    key: "14мм",
    value: "108руб/м",
  },
  {
    key: "16мм",
    value: "118руб/м",
  },
];

const gazokislorodnaya_rezka_metalla = [
  {
    key: "16мм",
    value: "108руб/м",
  },
  {
    key: "18мм",
    value: "120руб/м",
  },
  {
    key: "20мм",
    value: "140руб/м",
  },
  {
    key: "25мм",
    value: "160руб/м",
  },
  {
    key: "30мм",
    value: "180руб/м",
  },
  {
    key: "40мм",
    value: "220руб/м",
  },
  {
    key: "50мм",
    value: "270руб/м",
  },
  {
    key: "60мм",
    value: "330руб/м",
  },
  {
    key: "70мм",
    value: "350руб/м",
  },
  {
    key: "80мм",
    value: "370руб/м",
  },
  {
    key: "90мм",
    value: "390руб/м",
  },
  {
    key: "100мм",
    value: "410руб/м",
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
        {/* <TypographyH3>Таблица стоимости услуг</TypographyH3>*/}
      {/* <div className="flex gap-8 flex-col md:flex-row">
        <Table className="mt-6 w-[400px] border">
          <TableCaption>Плазменная резка металла</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-center text-md font-semibold">
                Размер
              </TableHead>
              <TableHead className="text-center text-md font-semibold">
                Стоимость
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {plasmenaya_rezka_metalla.map((row) => (
              <TableRow>
                <TableCell className="font-medium text-md text-center">
                  {row.key}
                </TableCell>
                <TableCell className="font-medium text-md text-center">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Table className="md:mt-6 mt-10 w-[400px] border">
          <TableCaption>Газокислородная резка металла</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px] text-center text-md font-semibold">
                Размер
              </TableHead>
              <TableHead className="text-center text-md font-semibold">
                Стоимость
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gazokislorodnaya_rezka_metalla.map((row) => (
              <TableRow>
                <TableCell className="font-medium text-md text-center">
                  {row.key}
                </TableCell>
                <TableCell className="font-medium text-md text-center">
                  {row.value}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div> */}
    </div>
  );
};
