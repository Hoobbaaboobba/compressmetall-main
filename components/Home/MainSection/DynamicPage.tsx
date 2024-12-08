import Image from "next/image";
import ShowButtonPrice from "./ShowPriceBottom";
import SizeSelector from "./SizeSelector";
import { getProducts } from "@/actions/getProducts";
import HyperLinks from "./HyperLinks";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import { Calculator } from "./Calculator/Calculator";
import { LensImage } from "./LensImage/LensImage";
import { PricePopup } from "./Price/PricePopup";

type Props = {
    params: {
        type: string;
        category: string;
        variant: string;
        id: string;
        size: string;
    };
    searchParams: { [key: string]: string | string[] | undefined };
};

export default async function DynamicPage({ params, searchParams }: Props) {
    if (searchParams.label === undefined || searchParams.label === "null") {
        return notFound();
    }

    const products = await getProducts(
        params.type,
        params.category,
        params.variant
    );

    if (products[0].label.toString() !== searchParams.label as string) {
        return notFound()
    } else if (
        searchParams.fifthsize &&
        products[0].fifthSizes.find((size) => size === decodeURIComponent(searchParams.fifthsize as string)) ===
        undefined
    ) {
        return notFound();
    } else if (
        products[0].sizes.filter(
            (size) => size === decodeURIComponent(params.size)
        ).length === 0
    ) {
        return notFound();
    } else if (
        products[0].marks.filter((mark) => mark === decodeURIComponent(params.id))
            .length === 0
    ) {
        return notFound();
    }

    const marka = decodeURIComponent(params.id)
        .replace(".", ",")
        .replace("|", "/")
        .replace("[", "/")
        .replaceAll("%2C", ".");

    const firstSize = decodeURIComponent(
        params.size.replace("mm", " мм").replace(".", ",").replaceAll("%2B", "+")
    );

    const secondSize = searchParams.secondsize
        ?.toString()
        .replace("mm", " мм")
        .replaceAll(".", ",");
    const thirdSize = searchParams.thirdsize
        ?.toString()
        .replace("mm", " мм")
        .replaceAll(".", ",");

    const forthSize = searchParams.forthsize
        ?.toString()
        .replace("mm", " мм")
        .replaceAll(".", ",");

    const fifthSize = searchParams.fifthsize
        ?.toString()
        .replace("mm", " мм")
        .replaceAll(".", ",");

    return (
        <div className="max-w-[1300px] flex flex-col gap-4 mx-4 xl:mx-2">
            <div className="relative w-full mt-4 gap-8 lg:mt-auto flex flex-col-reverse lg:flex-row justify-center text-center sm:items-start">
                <div className="w-full h-full flex flex-col justify-center items-start pt-4">
                    <div className="flex flex-col sm:flex-col  justify-center sm:justify-start items-start sm:items-start w-full">
                        <HyperLinks
                            categoryTitle={products[0].pageTitle}
                            categoryLink={products[0].category}
                            typeLink={products[0].type}
                            variantTitle={products[0].label}
                            variantLink={products[0].variety}
                            last
                        />
                        <div className="text-2xl md:text-3xl font-bold text-center md:text-start text-black/80">
                            <h1>{searchParams.label}</h1>
                        </div>
                        <div className="flex flex-col bg-white rounded-lg shadow-md p-6 w-full max-w-[800px] mt-4">
                            <ul className="flex h-full w-full flex-col gap-2">
                                <li className="flex">
                                    <span className="dash">Марка</span>
                                    <span className="order-2">{marka.replaceAll("|", "/")}</span>
                                </li>
                                <li className="flex">
                                    <span className="dash">{products[0].firstTypeOfSize}</span>
                                    <span className="order-2">{firstSize}</span>
                                </li>
                                {searchParams.secondsize && (
                                    <li className="flex">
                                        <span className="dash">{products[0].secondTypeOfSize}</span>
                                        <span className="order-2">{secondSize}</span>
                                    </li>
                                )}
                                {searchParams.thirdsize && (
                                    <li className="flex">
                                        <span className="dash">{products[0].thirdTypeOfSize}</span>
                                        <span className="order-2">{thirdSize}</span>
                                    </li>
                                )}
                                {searchParams.forthsize && (
                                    <li className="flex">
                                        <span className="dash">{products[0].forthTypeOfSize}</span>
                                        <span className="order-2">{forthSize}</span>
                                    </li>
                                )}
                                {searchParams.fifthsize && (
                                    <li className="flex">
                                        <span className="dash">{products[0].fifthtypeOfSize}</span>
                                        <span className="order-2">{fifthSize}</span>
                                    </li>
                                )}
                                <li className="flex">
                                    <span className="dash">В наличии</span>
                                    <Badge
                                        variant="outline"
                                        className="ml-2 bg-orange-text text-black border-none"
                                    >
                                        {products[0].isInStock}
                                    </Badge>
                                </li>
                            </ul>
                            <SizeSelector
                                second={searchParams.secondsize?.toString()}
                                third={searchParams.thirdsize?.toString()}
                                forth={searchParams.forthsize?.toString()}
                                fifth={searchParams.fifthsize?.toString()}
                                products={products}
                                params={params}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:sticky flex flex-col top-[180px] max-w-[500px] w-full bg-white p-6 rounded-lg shadow-md">
                    <LensImage>
                        <Image
                            src={require(`../../../public/${products[0].image.toString()}.png`)}
                            alt={decodeURI(params.id)}
                            width={500}
                            height={400}
                            priority
                            className="border border-light-gray rounded-md lg:hover:shadow-md transition cursor-zoom-in"
                            placeholder="blur"
                        />
                    </LensImage>
                    <div className="w-full flex flex-col justify-center mt-3 items-center sm:justify-start sm:items-start">
                        <div className="text-slate-400 font-medium flex gap-1 justify-center items-center">
                            <span>Цена</span>
                            <PricePopup />
                        </div>
                        <p className="font-bold text-xl mb-3 text-center text-black/80">
                            {products[0].price}
                        </p>
                        <div className="flex gap-2 w-full flex-col sm:flex-row">
                            <ShowButtonPrice />
                            <Calculator />
                        </div>
                    </div>
                </div>
            </div>
            {/* <hr className="border border-light-gray my-2" /> */}
            <div className="w-full mt-4">
                <div className="w-full mb-4 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-black text-center xl:text-start">
                        Описание
                    </h1>
                    <div className="bg-black h-[5px] w-[80px] mt-4"></div>
                </div>
                <p className="text-black">
                    <strong>
                        {`${searchParams.label} ${marka} ${firstSize} ${secondSize || ""} ${thirdSize || ""
                            } ${forthSize || ""} ${fifthSize || ""}| `}
                    </strong>
                    {products[0].description.replaceAll("#", "").replaceAll("*", "")} |
                    Возможны нестандартные заказы, купить{" "}
                    <strong>{searchParams.label}</strong> можно в компании{" "}
                    <strong>«Компресс металл»</strong> со склада, для заявки отправьте
                    заявку по почте{" "}
                    <a
                        href="mainto:zakaz@kometal.ru"
                        className="font-bold hover:underline"
                    >
                        zakaz@kometal.ru
                    </a>{" "}
                    или позвоните по телефону
                    <a href="tel:+74951166686" className="font-bold hover:underline">
                        {" "}
                        +7 (495) 116-66-86
                    </a>
                    , менеджеры с удовольствием помогут Вам с выбором.
                </p>
            </div>
        </div>
    );
}
