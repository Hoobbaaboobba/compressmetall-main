import PlotnostCvetTable from "@/components/Directory/PlotnostCvetTable";
import {
  marka_alum,
  marka_brass_prutki,
  marka_bronze_beriy,
  marka_bronze_bezolovo,
  marka_bronze_olovo_deform,
  marka_bronze_olovo_litey,
  marka_copper_nikel,
  marka_copper_splav,
  marka_copper_zinc_splav,
  marka_lead,
  marka_magn_deform,
  marka_magn_liney,
  marka_zinc_anti,
} from "@/components/Global/TableCvet";
import { TypographyH2 } from "@/components/Global/Typography/TypographyH2";
import { TypographyH3 } from "@/components/Global/Typography/TypographyH3";
import { TypographyList } from "@/components/Global/Typography/TypographyList";
import { TypographyP } from "@/components/Global/Typography/TypographyP";
import { Table } from "lucide-react";

const listOfTables = [
  {
    title: "Таблица плотности - Алюминиевые сплавы литейные",
    data: marka_alum,
    firstHead: "Алюминиевые сплавы литейные/Марка",
  },
  {
    title: "Таблица плотности - Баббиты оловянные и свинцовые",
    data: marka_lead,
    firstHead: "Баббиты оловянные и свинцовые/Марка",
  },
  {
    title: "Таблица плотности - Бронзы безоловянные, обрабатываемые давлением",
    data: marka_bronze_bezolovo,
    firstHead: "Бронзы безоловянные, обрабатываемые давлением/Марка",
  },
  {
    title: "Таблица плотности - Бронзы оловянные деформируемые",
    data: marka_bronze_olovo_deform,
    firstHead: "Бронзы оловянные деформируемые/Марка",
  },
  {
    title: "Таблица плотности - Бронзы оловянные литейные",
    data: marka_bronze_olovo_litey,
    firstHead: "Бронзы оловянные литейные/Марка",
  },
  {
    title: "Таблица плотности - Бронзы бериллиевые",
    data: marka_bronze_beriy,
    firstHead: "Бронзы бериллиевые/Марка",
  },
  {
    title: "Таблица плотности - Медно-цинковые сплавы (латуни) литейные",
    data: marka_copper_splav,
    firstHead: "Медно-цинковые сплавы (латуни) литейные/Марка",
  },
  {
    title:
      "Таблица плотности - Медно-цинковые сплавы (латуни), обрабатываемые давлением",
    data: marka_copper_zinc_splav,
    firstHead: "Медно-цинковые сплавы (латуни), обрабатываемые давлением/Марка",
  },
  {
    title: "Таблица плотности - Латунные прутки прессованные и тянутые",
    data: marka_brass_prutki,
    firstHead: "Латунные прутки прессованные и тянутые/Марка",
  },
  {
    title: "Таблица плотности - Магниевые сплавы литейные",
    data: marka_magn_liney,
    firstHead: "Магниевые сплавы литейные/Марка",
  },
  {
    title: "Таблица плотности - Магниевые сплавы деформируемые",
    data: marka_magn_deform,
    firstHead: "Магниевые сплавы деформируемые/Марка",
  },
  {
    title:
      "Таблица плотности - Медно-никелевые сплавы, обрабатываемые давлением",
    data: marka_copper_nikel,
    firstHead: "Медно-никелевые сплавы, обрабатываемые давлением/Марка",
  },
  {
    title: "Таблица плотности - Цинковые сплавы антифрикционные",
    data: marka_zinc_anti,
    firstHead: "Цинковые сплавы антифрикционные/Марка",
  },
];

const PlotnostCvetnyhMetallovComponent = () => {
  return (
    <div className="w-full mt-4 px-6">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Плотность цветных металлов таблицы
        </h1>
        <div>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
      </div>
      <div className="mt-2">
        <TypographyH2>
          Таблицы плотности ρ цветных металлов г/см3 (кг/дм3) и коэффициентов К
          = ρ/7.85.
        </TypographyH2>
        <TypographyP>Плотность сплавов из цветных металлов:</TypographyP>
        <TypographyList
          list={[
            "Алюминиевые сплавы литейные плотность",
            "Баббиты оловянные и свинцовые плотность",
            "Бронзы безоловянные литейные плотност",
            "Бронзы безоловянные, обрабатываемые давлением плотность",
            "Бронзы оловянные деформируемые плотность",
            "Бронзы оловянные литейные плотность",
            "Бронзы бериллиевые плотность",
            "Медно-цинковые сплавы (латуни), обрабатываемые давлением плотность",
            "Латунные прутки прессованные и тянутые плотность",
            "Магниевые сплавы литейные плотность",
            "Магниевые сплавы деформируемые плотность",
            "Медно-никелевые сплавы, обрабатываемые давлением плотность",
            "Цинковые сплавы антифрикционные плотность",
          ]}
        />
      </div>
      {listOfTables.map((table) => (
        <div className="mt-16">
          <div className="flex justify-start items-center gap-2">
            <Table className="hidden sm:block" />
            <TypographyH3>{table.title}</TypographyH3>
          </div>
          <PlotnostCvetTable
            data={table.data}
            title={table.title}
            firstHead={table.firstHead}
          />
        </div>
      ))}
    </div>
  );
};

export default PlotnostCvetnyhMetallovComponent;
