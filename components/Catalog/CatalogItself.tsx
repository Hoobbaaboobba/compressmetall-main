import Image from "next/image";
import OrangeButton from "../OrangeButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CatalogItselfProps {
  data: {
    label: string;
    img: string;
    items: {
      name: string;
      img: string;
      items: {
        variant: string;
        img: string;
        items: {
          title: string;
        }[];
      }[];
    }[];
  }[];
  label: string;
}

const CatalogItself = ({ data, label }: CatalogItselfProps) => {
  const pathname = usePathname().split("/");
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-6">
        {data.map((item) =>
          item.items.map((card) =>
            card.items.map((link, index) => (
              <>
                {card.name === label && (
                  <div
                    key={index}
                    className="flex flex-col text-center justify-between items-center border border-light-gray p-[10px] md:p-[20px] gap-2 rounded-lg"
                  >
                    <Image
                      src={require(`../../public/${link.img}.png`)}
                      alt={card.name}
                      width={160}
                      height={100}
                      placeholder="blur"
                    />
                    <h2 className="opacity-70">{card.name}</h2>
                    <h1>{link.variant}</h1>
                    {link.items.length === 0 ? (
                      <Link
                        href={`/${pathname[1] || "moscow"}/catalog/${
                          card.name
                        }/${link.variant}/?i=${
                          link.img
                        }&q=Имеется в наличии&amount=400`}
                      >
                        <OrangeButton label={"Приобрести"} mark />
                      </Link>
                    ) : (
                      <Link
                        href={`/${pathname[1] || "moscow"}/catalog?q=${
                          link.variant
                        }`}
                      >
                        <OrangeButton label={"Выбрать марку"} mark />
                      </Link>
                    )}
                  </div>
                )}
                {label === link.variant &&
                  link.items.map((sublink, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-center justify-between items-center border border-light-gray p-[10px] md:p-[20px] gap-2 rounded-lg"
                    >
                      <Image
                        src={require(`../../public/${link.img}.png`)}
                        alt={card.name}
                        width={160}
                        height={100}
                        placeholder="blur"
                      />
                      <h2 className="opacity-70">{link.variant}</h2>
                      <h1>{sublink.title}</h1>
                      <Link
                        href={`/${pathname[1]}/catalog/${card.name}/${link.variant}/${sublink.title}?i=${link.img}&q=Имеется в наличии&amount=400`}
                      >
                        <OrangeButton label={"Приобрести"} mark />
                      </Link>
                    </div>
                  ))}
              </>
            ))
          )
        )}
      </div>
    </div>
  );
};

export default CatalogItself;
