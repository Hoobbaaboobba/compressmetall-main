import { TypographyH2 } from "@/components/Global/Typography/TypographyH2";
import { TypographyP } from "@/components/Global/Typography/TypographyP";
import { TypographyList } from "@/components/Global/Typography/TypographyList";
import { TypographyInlineCode } from "@/components/Global/Typography/TypographyInlineCode";
import { TypographyH4 } from "@/components/Global/Typography/TypographyH4";
import {
  Gost_1050_88,
  Gost_1414_75,
  Gost_1435_90,
  Gost_14959_79,
  Gost_19265_73,
  Gost_19281_89,
  Gost_20072_74,
  Gost_380_80,
  Gost_4543_71,
  Gost_5520_79,
  Gost_5632_72,
  Gost_5950_73,
  Gost_801_78,
  Gost_9045_80,
  Gost_977_88,
} from "@/components/Global/TableData";
import TableModel from "@/components/Global/TableModel";
import { Table } from "lucide-react";

const list = [
  "Углеродистая сталь обыкновенного качества ГОСТ 380-88",
  "Конструкционная сталь ГОСТ 1414-75",
  "Качественная углеродистая конструкционная сталь ГОСТ 1050-88",
  "Инструментальня углеродистая сталь ГОСТ 1435-90",
  "Конструкционная легированная сталь ГОСТ 4543-71",
  "Низкоуглеродистая качественная сталь ГОСТ 9045-80",
  "Низколегированная конструкционная сталь ГОСТ 19281-89",
  "Калиброванная качественная сталь ГОСТ 1051-73",
  "Сталь подшипниковая ГОСТ 801-78",
  "Арматурная низколегированная сталь ГОСТ 5781-82",
  "Инструментальная легированная сталь ГОСТ 5950-73",
];

const alphabet = [
  "А - азот",
  "Б - ниобий",
  "В - вольфрам",
  "Г - марганец",
  "Д - медь",
  "К - кобальт",
  "М - молибден",
  "Н - никель",
  "П - фосфор",
  "Р - бор",
  "С - кремний",
  "С - селен",
  "Т - титан",
  "У - углерод",
  "Ф - ванадий",
  "Х - хром",
  "Ц - цирконий",
  "Ю - алюминий",
];

const marks = [
  "Ст0",
  "Ст1кп",
  "Ст1пс",
  "Ст2кп",
  "Ст2пс",
  "Ст3кп",
  "Ст3пс",
  "Ст3сп",
  "Ст3Гпс",
  "Ст3Гсп",
  "Ст4пс",
  "Ст4сп",
  "Ст5пс",
  "Ст5сп",
  "Ст5Гпс",
  "Ст6пс",
  "Ст6сп",
];

const marka_Gost_1050_88 = [
  "Ст08кп",
  "Ст08пс",
  "Ст08",
  "Ст10кп",
  "Ст10",
  "Ст15кп",
  "Ст15пс",
  "Ст15",
  "Ст18кп",
  "Ст20кп",
  "Ст20пс",
  "Ст20",
  "Ст25",
  "Ст30",
  "Ст35",
  "Ст40",
  "Ст45",
  "Ст50",
  "Ст55",
  "Ст58",
  "Ст60",
];

const marka_Gost_9045_80 = ["Ст08пс", "Ст08кп", "Ст08Ю"];

const marka_Gost_5520_79 = ["Ст16К", "Ст18К", "Ст20К", "Ст22К"];

const marka_Gost_5781_82 = ["20ХГ2Ц", "35ГС", "25Г2С"];

const marka_Gost_1435_90 = [
  "У7",
  "У7А",
  "У8",
  "У8А",
  "У9",
  "У9А",
  "У10",
  "У10А",
  "У12",
  "У12А",
];

const marka_Gost_5950_73 = [
  "ХВ4Ф",
  "9Х1",
  "9ХС",
  "9ХВГ",
  "ХВГ",
  "Х6ВФ",
  "Х12",
  "Х12Ф1",
  "Х12МФ",
  "7ХГ2ВМФ",
  "7Х3",
  "8Х3",
  "5ХНМ",
  "4ХМФС",
  "4Х5МФС",
  "4Х5МФ1С",
  "3Х3М3Ф",
  "6ХС",
  "4ХВ2С",
  "5ХВ2СФ",
  "6ХВ2С",
  "6ХВГ",
];

const marka_Gost_19265_73 = ["Р18", "Р6М5К5", "Р9М4Н8"];

const marka_Gost_801_78 = ["ШХ15", "ШХ15СГ", "ШХ4"];

const marka_Gost_20072_74 = ["12МХ", "12Х1МФ", "25Х1МФ", "20ХЭМВФ", "15Х5М"];

const marka_Gost_5632_72 = [
  "40Х10С2М",
  "08Х13",
  "12Х13",
  "20Х13",
  "30Х13",
  "40Х13",
  "10Х14АГ16",
  "12Х17",
  "08Х17Т",
  "08Х18Т1",
  "95Х18",
  "15Х25Т",
  "15Х28",
  "20Х23Н13",
  "20Х23Н18",
  "20Н23Н18",
  "10Х23Н18",
  "20Х25Н20С2",
  "15Х12ВНМФ",
  "20Х12ВНМФ",
  "Х12Н8Г8МФБ",
  "13Х11Н2В2МФ",
  "45Х14Н14В2М",
  "40Х15Н7Г7Ф2МС",
  "08Х17Н13М21",
  "10Х17Н3М2Т",
  "03Х17Н14М2",
  "03Х17Н14М3",
  "08Х17Н13М2Т",
  "31Х19Н9МВБТ",
  "10Х14Г14Н4Т",
  "14Х17Н2",
  "12Х18Н9",
  "17Х18Н9",
  "08Х18Н10",
  "08Х18Н11",
  "08Х18Н10Т",
  "12Х18Н9Т",
  "12Х18Н10Т",
  "12Х18Н12Т",
  "08Х18Г8Н2Т",
  "20Х20Н14С2",
  "Х25Н16Г7АР",
  "08Х22Н6Т",
  "06ХН28МДТ",
  "ХН35ВТ",
  "ХН35ВТЮ",
  "ХН70Ю",
  "ХН70ВМЮТ",
  "ХН70ВМЮФ",
  "ХН77ТЮР",
  "ХН78Т",
  "ХН80ТБО",
  "AISI 201",
  "AISI 304",
  "AISI 304H",
  "AISI 304L",
  "AISI 321",
  "AISI 316",
  "AISI 316S",
  "AISI 316L",
  "AISI 316Ti",
  "AISI 310S",
  "AISI 420",
  "AISI 430",
  "AISI 439",
  "AISI 409L",
  "AISI 410S",
  "AISI 904L",
];

const MarkiStaliComponent = () => {
  return (
    <div className="w-full mt-4 px-6">
      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-center">
          Марки стали с расшифровкой, <br /> заменители, аналоги, стандарты,{" "}
          <br />
          свариваемость, применение, таблицы
        </h1>
        <div>
          <div className="bg-black h-[5px] w-[80px] my-4"></div>
        </div>
      </div>
      {/* <Filters /> */}
      <div className="mt-8">
        <div>
          <TypographyH2>
            Многообразие Сталей: Основные Стандарты и Типы
          </TypographyH2>
          <TypographyP>
            Сталь - это сплав железа с углеродом до 2 % С. По химическому
            составу сталь разделяют на углеродистую и легированную, по качеству
            на обыкновенного качества сталь, повышенного качества и
            высококачественную. Стандарты производства сталей:
          </TypographyP>
          <TypographyList list={list} />
        </div>
        <div>
          <TypographyH2>Секреты Маркировки Стали</TypographyH2>
          <TypographyP>
            Марки углеродистой стали обыкновенного качества обозначаются буквами
            &quot;Ст&quot; и цифрами &quot;0&quot;, &quot;1&quot;,
            &quot;2&quot;, &quot;3&quot;, к примеру, Ст0, Ст1, Ст2, Ст3
            (&quot;Сталь ноль, сталь один, сталь два, сталь три&quot;). Стали
            качественные углеродистые маркируются двухзначными числами, которые
            показывают и определяют среднее содержание углерода в сотых долях г
            процента: 05; 08; 10; 25; 40 и так далее. Буква &quot;Г&quot; в
            марке стали указывает на повышенное содержание Mn, к примеру, 14Г,
            18Г и так далее. Стали автоматные маркируются буквой &quot;А&quot;,
            а именно: А12, А30 и так далее. Инструментальные углеродистые стали
            маркируются буквой &quot;У&quot;, а именно: У8, У10, У12 и так
            далее, в данном случае цифры обозначают содержание стали в десятых
            долях процента. Обозначение марки легированной стали состоит из
            букв, которые указывают какие компоненты входят в её состав, а также
            цифр, которые указывают их среднее содержание.
          </TypographyP>
        </div>
        <div className="mt-8">
          <TypographyH2>Обзозначения Химического Состава Стали</TypographyH2>
          {/* <TypographyList list={alphabet} /> */}
          <div className="w-full flex flex-wrap gap-4 mt-8 z-0">
            {alphabet.map((item, index) => (
              <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
            ))}
          </div>
          <TypographyP>
            Первые цифры марки обозначают среднее содержание углерода в стали, а
            именно: в сотых долях процента для конструкционных сталей, в десятых
            долях для инструментальных и нержавеющих сталей. Далее буквой
            указывается легирующий элемент. Цифрами, следующими за буквой - его
            среднее содержание в целых еденицах. При содержании легирующего
            элемента менее 1.5 % цифры за соответствующей буквой не ставятся.
            Буква &quot;А&quot; в конце обозначения марки стали указывает на то,
            что сталь является высококачественной. Буква &quot;Ш&quot;
            обозначает особо высококачественную сталь.
          </TypographyP>
        </div>
        <div className="mt-16">
          {/* ГОСТ 380-80 */}
          <div>
            {/* <MarksSelector /> */}
            <TypographyH2>
              Углеродистая обыкновенного качества сталь ГОСТ 380-88
            </TypographyH2>
            <TypographyP>
              Сталь углеродистая обыкновенного качества согласно ГОСТ 380-88
              производится марок:
            </TypographyP>
            <div className="flex flex-wrap gap-4 mt-6">
              {marks.map((marka, index) => (
                <TypographyInlineCode key={index}>{marka}</TypographyInlineCode>
              ))}
            </div>
            <TypographyP>
              Углеродистая сталь обыкновенного качества подразделяется на три
              группы:
            </TypographyP>
            <TypographyList
              list={[
                "А - поставляемую по механическим свойствам",
                "Б - поставляемую по химическому составу",
                "В - поставляемую по механическим свойствам и химическому составу",
              ]}
            />
            <TypographyP>
              Сталь каждой группы подразделяют на категории:
            </TypographyP>
            <TypographyList
              list={[
                "Группы А - 1, 2, 3",
                "Группы Б - 1, 2",
                "Группы В - 1, 2, 3, 4, 5, 6",
              ]}
            />
            <TypographyP>Сталь изготавливают следующих марок:</TypographyP>
            <TypographyList
              list={[
                "Группа А - Ст0, Ст1, Ст2, Ст3, Ст4, Ст5, Ст6",
                "Группа Б - БСт0, БСт1, БСт2, БСт3, БСт4, БСт5, БСт6",
                "Группа В - ВСт1, ВСт2, ВСт3, ВСт4, ВСт5",
              ]}
            />
            <TypographyP>
              Изготавливают сталь по степени раскисления:
            </TypographyP>
            <TypographyList
              list={["Спокойную - сп", "Полуспокойную - пс", "Кипящую - кп"]}
            />
          </div>
        </div>
        <div className="flex justify-start items-center gap-2 mt-12 mb-6">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь углеродистая обыкновенного качества ГОСТ
            380-88
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_380_80}
          title="Таблица марок - Сталь углеродистая обыкновенного качества ГОСТ 380-88"
        />
        {/* ГОСТ 1050-88 */}
        <div className="mt-16">
          <TypographyH2>
            Качественная углеродистая конструкционная сталь ГОСТ 1050-88
          </TypographyH2>
          <TypographyP>
            Сталь качественная углеродистая конструкционная изготавливается
            марок:
          </TypographyP>
          <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
            {marka_Gost_1050_88.map((item, index) => (
              <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
            ))}
          </div>
          <div className="mt-12 mb-6 flex justify-start items-center gap-2">
            <Table className="hidden sm:block" />
            <TypographyH4>
              Таблица марок - Сталь углеродистая качественная конструкционная
              ГОСТ 1050-88
            </TypographyH4>
          </div>
          <TableModel
            data={Gost_1050_88}
            title="Таблица марок - Сталь углеродистая качественная конструкционная ГОСТ 1050-8"
          />
        </div>
      </div>
      {/* ГОСТ 9045-80 */}
      <div className="mt-16">
        <TypographyH2>
          Низкоуглеродистая качественная сталь ГОСТ 9045-80
        </TypographyH2>
        <TypographyP>
          Сталь качественная низкоуглеродистая изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_9045_80.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь низкоуглеродистая качественная ГОСТ 9045-80
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_9045_80}
          title="Таблица марок - Сталь низкоуглеродистая качественная ГОСТ 9045-80"
        />
      </div>
      {/* ГОСТ 5520-79 */}
      <div className="mt-16">
        <TypographyH2>
          Углеродистая качественная сталь для котлов и сосудов под давлением
          ГОСТ 5520-79
        </TypographyH2>
        <TypographyP>
          Сталь качественная углеродистая для котлов и сосудов работающих под
          давлением изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_5520_79.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь качественная углеродистая для котлов и сосудов
            под давлением ГОСТ 5520-79
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_5520_79}
          title="Таблица марок - Сталь качественная углеродистая для котлов и сосудов под давлением ГОСТ 5520-79"
        />
      </div>
      {/* ГОСТ 1414-75 */}
      <div className="mt-16">
        <TypographyH2>
          Конструкционная сталь высокой обрабатываемости резанием <br /> ГОСТ
          1414-75
        </TypographyH2>
        <TypographyP>
          Сталь качественная углеродистая для котлов и сосудов работающих под
          давлением изготавливается марок:
        </TypographyP>
        <TypographyList
          list={[
            "Углеродистая сернистая А20, А30",
            "Сернистомарганцовистая А40Г",
          ]}
        />
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь конструкционная высокой обрабатываемости
            резанием ГОСТ 1414-75
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_1414_75}
          title="Таблица марок - Сталь конструкционная высокой обрабатываемости резанием ГОСТ 1414-75"
        />
      </div>
      {/* ГОСТ 19281-89 */}
      <div className="mt-16">
        <TypographyH2>
          Низколегированная сталь повышенной прочности ГОСТ 19281-89
        </TypographyH2>
        <TypographyP>
          Сталь низколегированная повышенной прочности изготавливается марок:
        </TypographyP>
        <TypographyList
          list={[
            "Марганцовистая - марка 14Г2, 09Г2",
            "Кремнемарганцовистая - марка 12ГС, 16ГС, 17ГС, 17Г1С, 09Г2С, 10Г2С1",
            "Марганцово-ниобиевая с добалением меди - марка 10Г2БД",
            "Марганцово-ванадиевая с добалением азота - марка 14Г2АФ, 16Г2АФ, 18Г2ФДпс",
            "Хромокремненикелевая - марка 14ХГС",
            "Марганцево-ванадиевая с добавлением меди и азота - марка 15Г2АФДпс",
            "Хромокремненикелевая с добавлением меди - марка 10ХСНД, 15ХСНД",
            "Хромоникелефосфористая с добовлением меди - марка 10ХНДП",
          ]}
        />
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь низколегированная повышенной прочности ГОСТ
            19281-89
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_19281_89}
          title="Таблица марок - Сталь низколегированная повышенной прочности ГОСТ 19281-89"
        />
      </div>
      {/* ГОСТ 5781-82 */}
      <div className="mt-16">
        <TypographyH2>
          Арматурная низколегированная сталь ГОСТ 5781-82
        </TypographyH2>
        <TypographyP>
          Сталь арматурная низколегированная изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_5781_82.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь низколегированная арматурная ГОСТ 5781-82
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_19281_89}
          title="Таблица марок - Сталь низколегированная арматурная ГОСТ 5781-82"
        />
      </div>
      {/* ГОСТ 4543-71 */}
      <div className="mt-16">
        <TypographyH2>
          Легированная конструкционная сталь ГОСТ 4543-71
        </TypographyH2>
        <TypographyP>
          Конструкционная легированная сталь делится на группы:
        </TypographyP>
        <TypographyList
          list={[
            "Хромистая - марка 15Х, 20Х, 30Х, 35Х, 38ХА, 40Х, 45Х, 50Х",
            "Марганцовистая - марка 15Г, 20Г, 30Г, 35Г, 40Г, 50Г, 10Г2, 35Г2, 40Г2, 45Г2, 50Г2, 47ГТ",
            "Хромомарганцовая - марка 18ХГТ, 20ХГР, 25ХГТ, 30ХГТ",
            "Хромокремнистая - марка 33ХС, 38ХС, 40ХС",
            "Хромованадиевая - марка 15ХФ, 40ХФА",
            "Хромомолибденовая - марка 15ХМ, 30ХМ, 30ХМА, 35ХМ, 38ХМ",
            "Хромоникелевая и хромоникелевая с добавлением бора - марка 20ХН, 40ХН, 45ХН, 50ХН, 20ХНР, 12ХН2, 12ХН3, 12Х2НЧА, 30ХН3А, 20ХН3А",
            "Хромокремнемарганцовая и хромокремнемарганцовоникелевая - марка 20ХГСА, 25ХГСА, 30ХГС, 30ХГСА, 35ХГСА, 30ХГСН2А",
            "Хромомарганцовоникелевая с добавлением бора и без - марка 38ХГН, 20ХГНР",
            "Хромоникельмолибденовая - марка 20ХН2М, 30ХН2МА, 38Х2Н2МА, 40ХН3МФА, 40Х2Н2МА, 38ХН3МА, 18Х2НЧМА",
            "Хромоникельмолибденованадиевая и хромоникельванадиевая - марка 30ХН2МФА, 36Х2Н2МФА, 38ХН3МФА, 45ХН2МФА, 20ХНЧФА",
            "Хромоалюминиевая с молибденом - марка 38Х2МЮА",
          ]}
        />
        <TypographyP>
          Конструкционная легированная сталь в зависимости от химического
          состава и свойств делится на следующие категории:
        </TypographyP>
        <TypographyList
          list={[
            "Качественная",
            "Высококачественная",
            "Особовысококачественная",
          ]}
        />
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь легированная конструкционная ГОСТ 4543-71
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_4543_71}
          title="Таблица марок - Сталь легированная конструкционная ГОСТ 4543-71"
        />
      </div>
      {/* ГОСТ 14959-79 */}
      <div className="mt-16">
        <TypographyH2>
          Рессорно-пружинная углеродистая и легированная сталь <br /> ГОСТ
          14959-79
        </TypographyH2>
        <TypographyP>
          Рессорно-пружинная сталь изготавливается марок:{" "}
        </TypographyP>
        <TypographyList
          list={[
            "Углеродистая сталь - марка 65, 70, 75, 85",
            "Легированная сталь - марка 60Г, 65Г, 55С2, 60С2, 70С3А, 55ХГР, 50ХФА, 60С2ХА, 65С2ХФА, 65С2ВА, 60С2Н2А",
          ]}
        />
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь рессорно-пружинная углеродистая и легированная
            ГОСТ 14959-79
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_14959_79}
          title="Таблица марок - Сталь рессорно-пружинная углеродистая и легированная ГОСТ 14959-79"
        />
      </div>
      {/* ГОСТ 1435-90 */}
      <div className="mt-16">
        <TypographyH2>
          Инструментальная нелегированная сталь ГОСТ 1435-90
        </TypographyH2>
        <TypographyP>
          Нелегированная инструментальная сталь изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_1435_90.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь инструментальная нелегированная ГОСТ 1435-90
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_1435_90}
          title="Таблица марок - Сталь инструментальная нелегированная ГОСТ 1435-90"
        />
      </div>
      {/* ГОСТ 5950-73 */}
      <div className="mt-16">
        <TypographyH2>
          Инструментальная легированная сталь ГОСТ 5950-73{" "}
        </TypographyH2>
        <TypographyP>
          Легированная инструментальная сталь изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_5950_73.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь инструментальная легированная ГОСТ 5950-73
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_5950_73}
          title="Таблица марок - Сталь инструментальная легированная ГОСТ 5950-73"
        />
      </div>
      {/* ГОСТ 19265-73 */}
      <div className="mt-16">
        <TypographyH2>
          Быстрорежущая инструментальная сталь ГОСТ 19265-73
        </TypographyH2>
        <TypographyP>
          Инструментальная быстрорежущая сталь изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_19265_73.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь быстрорежущая инструметальная ГОСТ 19265-73
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_19265_73}
          title="Таблица марок - Сталь быстрорежущая инструметальная ГОСТ 19265-73"
        />
      </div>
      {/* ГОСТ 801-78 */}
      <div className="mt-16">
        <TypographyH2>Подшипниковая сталь ГОСТ 801-78</TypographyH2>
        <TypographyP>Подшипниковая сталь изготавливается марок:</TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_801_78.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь подшипниковая ГОСТ 801-78
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_801_78}
          title="Таблица марок - Сталь подшипниковая ГОСТ 801-78"
        />
      </div>
      {/* ГОСТ 20072-74 */}
      <div className="mt-16">
        <TypographyH2>
          Теплоустойчивая легированная сталь ГОСТ 20072-74
        </TypographyH2>
        <TypographyP>
          Теплоустойчивая легированная сталь изготавливается марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_20072_74.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Сталь теплоустойчивая легированная ГОСТ 20072-74
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_20072_74}
          title="Таблица марок - Сталь теплоустойчивая легированная ГОСТ 20072-74"
        />
      </div>
      {/* ГОСТ 5632-72 */}
      <div className="mt-16">
        <TypographyH2>
          Высоколегированная сталь и коррозионностойкие жаростойкие и
          жаропрочные сплавы ГОСТ 5632-72 (Нержавеющий металлопрокат)
        </TypographyH2>
        <TypographyP>
          Сталь высоколегированная и сплавы коррозионностойкие жаростойкие и
          жаропрочные изготавливают марок:
        </TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {marka_Gost_5632_72.map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Нержавеющие марки стали, сталь высоколегированная и
            сплавы коррозионностойкие жаростойкие, жаропрочные ГОСТ 5632-72
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_5632_72}
          title="Таблица марок - Нержавеющие марки стали, сталь высоколегированная и сплавы коррозионностойкие жаростойкие, жаропрочные ГОСТ 5632-72"
        />
      </div>
      {/* ГОСТ 977-88 */}
      <div className="mt-16">
        <TypographyH2>
          Стали для отливок нелегированные и легированные конструкционные и
          легированные со специальными свойствами ГОСТ 977-88
        </TypographyH2>
        <TypographyP>Стали конструкционные нелегированные:</TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {["15Л", "20Л", "25Л", "30Л", "35Л", "40Л", "45Л", "50Л"].map(
            (item, index) => (
              <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
            )
          )}
        </div>
        <TypographyP>Стали конструкционные легированные:</TypographyP>
        <div className="w-full flex flex-wrap gap-4 mt-4 z-0">
          {[
            "0ГЛ",
            "35ГЛ",
            "20ГСЛ",
            "30ГСЛ",
            "20Г1ФЛ",
            "20ФЛ",
            "30ХГСФЛ",
            "45ФЛ",
            "32Х06Л",
            "40ХЛ",
            "20ХМЛ",
            "20ХМФЛ",
            "20ГНМФЛ",
            "35ХМЛ",
            "30ХНМЛ",
            "35ХГСЛ",
            "35НГМЛ",
            "20ДХЛ",
            "08ГДНФЛ",
            "13ХНДФТЛ",
            "12ДН2ФЛ",
            "12ДХН1МФЛ",
            "23ХГС2МФЛ",
            "12Х7Г3СЛ",
            "25Х2ГНМФЛ",
            "27Х5ГСМС",
            "30Х3С3ГМЛ",
            "03Н12Х5М3ТЮЛ",
          ].map((item, index) => (
            <TypographyInlineCode key={index}>{item}</TypographyInlineCode>
          ))}
        </div>
        <TypographyP>
          Стали легированные со специальными свойствами:
        </TypographyP>
        <TypographyList
          list={[
            "Мартенситного класса - марки коррозионностойкие 20Х13Л, 08Х14НДЛ, 09Х16Н4БЛ, 09Х17Н3СЛ, 10Х12НДЛ, марки жаростойкие 20Х5МЛ, 20Х8ВЛ, 40Х9С2Л, марка жаропрочная 20Х12ВНМФЛ",
            "Мартенситно-ферритного класса - марка коррозионностойкая 15Х13Л",
            "Ферритного класса - марка коррозионностойкая 12Х25ТЛ",
            "Аустенитно-мартенситного класса - марки коррозионностойкие 08Х15Н4ДМЛ, 08Х14Н7МЛ, 14Х18Н4Г4Л",
            "Аустенитно-ферритного класса - марки коррозионностойкие 12Х25Н5ТМФЛ, 16Х18Н12С4ТЮЛ, 10Х18Н3Г3Д2Л, марки жаростойкие 35Х23Н7СЛ, 40Х24Н12СЛ, 20Х20Н14С2Л",
            "Аустенитного класса - марки коррозионностойкие 10Х18Н9Л, 12Х18Н11БЛ, 07Х17Н16ТЛ, 12Х18Н12М3ТЛ, марки жаростойкие 55Х18Г14С2ТЛ, 15Х23Н18Л, 20Х25Н19С2Л, 18Х25Н19СЛ, 45Х17Г13Н3ЮЛ, марки жаропрочные 35Х18Н24С2Л, 31Х19Н9МВБТЛ, 12Х18Н12БЛ, 08Х17Н34В5Т3Ю2РЛ, 15Х18Н22В6М2РЛ, 20Х21Н46В8РЛ, марки износостойкие 110Г13Л, 110Г13Х2БРЛ, 110Г13ФТЛ, 130Г14ХМФАЛ, 120Г10ФЛ.",
          ]}
        />
        <div className="mt-12 mb-6 flex justify-start items-center gap-2">
          <Table className="hidden sm:block" />
          <TypographyH4>
            Таблица марок - Стали для отливок нелегированные, легированные
            конструкционные, легированные со специальными свойствами ГОСТ 977-88
          </TypographyH4>
        </div>
        <TableModel
          data={Gost_977_88}
          title="Таблица марок - Стали для отливок нелегированные, легированные конструкционные, легированные со специальными свойствами ГОСТ 977-88"
        />
      </div>
    </div>
  );
};

export default MarkiStaliComponent;
