import { TypographyH2 } from "@/components/Global/Typography/TypographyH2";
import { TypographyList } from "@/components/Global/Typography/TypographyList";
import { TypographyP } from "@/components/Global/Typography/TypographyP";
import { FiltersTable } from "./FilterTable";
import { data } from "./PlotnostTable";

const PlotnostMarokStaliComponent = () => {
  return (
    <div className="w-full mt-4 px-1">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Высокоуглеродистая сталь плотность Плотность высоколегированной стали
          Плотность легированной стали Плотность конструкционных сталей
          Плотность нержавеющей стали Плотность черной стали
        </h1>
        <div>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
      </div>
      <div className="mt-2">
        <TypographyH2>
          Плотность прокатной стали. Плотность сталей таблица.
        </TypographyH2>
        <TypographyP>
          Плотность стали согласно стандартам производства:
        </TypographyP>
        <TypographyList
          list={[
            "Углеродистая сталь обыкновенного качества ГОСТ 380-88",
            "Качественная углеродистая конструкционная сталь ГОСТ 1050-88",
            "Инструментальня углеродистая сталь ГОСТ 1435-90",
            "Низкоуглеродистая качественная сталь ГОСТ 9045-8",
            "Конструкционная сталь ГОСТ 1414-75",
            "Конструкционная легированная сталь ГОСТ 4543-71",
            "Низколегированная конструкционная сталь ГОСТ 19281-89",
            "Калиброванная качественная сталь ГОСТ 1051-73",
            "Подшипниковая сталь ГОСТ 801-78",
            "Арматурная низколегированная сталь ГОСТ 5781-82",
            "Инструментальная легированная сталь ГОСТ 5950-73",
          ]}
        />
      </div>
      <FiltersTable data={data} />
    </div>
  );
};

export default PlotnostMarokStaliComponent;
