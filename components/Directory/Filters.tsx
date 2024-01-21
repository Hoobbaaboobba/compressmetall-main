import FilterModel from "./FilterModel";

const filters = [
  {
    title: "Марки стали",
    href: "marki_stali",
  },
  {
    title: "Полнота стали",
    href: "plotnost_marok_stali",
  },
  {
    title: "Плотность сплавов",
    href: "plotnost_cvetnyh_metallov",
  },
  {
    title: "Размеры",
    href: "metalloprokat_razmer",
  },
  {
    title: "Вес 1 метра",
    href: "/",
  },
  {
    title: "ГОСТы",
    href: "/",
  },
];

const Filters = () => {
  return (
    <div className="w-1/5 hidden h-[380px] px-6 flex-col sticky top-[150px] z-30 rounded-md bg-white left-0 lg:flex justify-center items-center gap-6 mt-[250px]">
      {filters.map((filter, index) => (
        <FilterModel key={index} title={filter.title} href={filter.href} />
      ))}
    </div>
  );
};

export default Filters;
