import DynamicItem from "./dynamicItem";

type Props = {
  categories: Promise<Catergories[]>;
  params: {
    type: string;
    category: string;
    variant: string;
    id: string;
    size: string;
  };
};

export default async function DynamicPageCategories({
  categories,
  params,
}: Props) {
  const categoriesData = await categories;

  if (!categoriesData) {
    throw new Error("!!!");
  }
  return (
    <div className="pt-6">
      <div className="w-full mb-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-black text-center xl:text-start">
          <h1>{categoriesData[0].label}</h1>
        </h1>
        <div className="bg-black h-[5px] w-[80px] mt-4"></div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {categoriesData.map(
          (item) =>
            params.type &&
            item.links.map((link) => (
              <DynamicItem
                img={link.img}
                label={item.href}
                sublabel={link.title}
                href={link.link}
              />
            ))
        )}
      </div>
    </div>
  );
}
