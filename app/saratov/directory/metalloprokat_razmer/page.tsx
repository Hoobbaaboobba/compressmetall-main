import { FiltersTable } from "@/components/Directory/FilterTable";
import { data, dataSizes } from "@/components/Directory/PlotnostTable";
import { TypographyH2 } from "@/components/Global/Typography/TypographyH2";
import { TypographyP } from "@/components/Global/Typography/TypographyP";

const MetalloprokatRazmer = () => {
  return (
    <div className="w-full mt-4 px-6">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Таблица размеров металлопроката
        </h1>
        <div>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
      </div>
      <div className="mt-2">
        <TypographyH2>
          Металлопрокат стандартные размеры в России. Таблица размеров
          металлопроката согласно ГОСТ и ТУ.
        </TypographyH2>
      </div>
      <FiltersTable data={dataSizes} />
    </div>
  );
};

export default MetalloprokatRazmer;
