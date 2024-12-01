"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Check, ChevronsUpDown, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Product } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

type SizeProps = {
    products: Product[];
    params: {
        type: string;
        category: string;
        variant: string;
        id: string;
        size: string;
    };
    second?: string;
    third?: string;
    forth?: string;
    fifth?: string;
};

const SizeSelector = ({
    products,
    params,
    second,
    third,
    forth,
    fifth,
}: SizeProps) => {
    const [markaValue, setMarkaValue] = useState("");
    const [firstSizeValue, setFirstSizeValue] = useState("");
    const [secondSizeValue, setSecondSizeValue] = useState("");
    const [thirdSizeValue, setThirdSizeValue] = useState("");
    const [forthSizeValue, setForthSizeValue] = useState("");
    const [fifthSizeValue, setFifthSizeValue] = useState("");

    const pathname = usePathname().split("/");

    const searchParams = useSearchParams();
    const label = searchParams.get("label");

    const firstNavLink = (id: string) => {
        if (!second) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant
                }/${id.replace("/", "[")}/${params.size}?label=${label}`;
        } else if (!third) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant
                }/${id.replace("/", "[")}/${params.size
                }?label=${label}&secondsize=${second}`;
        } else if (!forth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant
                }/${id.replace("/", "[")}/${params.size
                }?label=${label}&secondsize=${second}&thirdsize=${third}`;
        } else if (!fifth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant
                }/${id.replace("/", "[")}/${params.size
                }?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}`;
        } else {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant
                }/${id.replace("/", "[")}/${params.size
                }?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifth}`;
        }
    };

    const secondNavLink = (size: string) => {
        if (!second) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}`;
        } else if (!third) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}`;
        } else if (!forth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}&thirdsize=${third}`;
        } else if (!fifth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}`;
        } else {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifth}`;
        }
    };

    const thirdNavLink = (secondSize: string) => {
        if (!second) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}`;
        } else if (!third) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${secondSize}`;
        } else if (!forth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${secondSize}&thirdsize=${third}`;
        } else if (!fifth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${secondSize}&thirdsize=${third}&forthsize=${forth}`;
        } else {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${secondSize}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifth}`;
        }
    };

    const forthNavLink = (thirdSize: string) => {
        if (!second) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}`;
        } else if (!third) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}`;
        } else if (!forth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${thirdSize}`;
        } else if (!fifth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${thirdSize}&forthsize=${forth}`;
        } else {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${thirdSize}&forthsize=${forth}&fifthsize=${fifth}`;
        }
    };

    const fifthNavLink = (forthSize: string) => {
        if (!second) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}`;
        } else if (!third) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}`;
        } else if (!forth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${third}`;
        } else if (!fifth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forthSize}`;
        } else {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forthSize}&fifthsize=${fifth}`;
        }
    };

    const sixthNavLink = (fifthSize: string) => {
        if (!second) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}`;
        } else if (!third) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}`;
        } else if (!forth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${third}`;
        } else if (!fifth) {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}`;
        } else {
            return `/${pathname[1]}/catalog/${params.type}/${params.category}/${params.variant}/${params.id}/${params.size}?label=${label}&secondsize=${second}&thirdsize=${third}&forthsize=${forth}&fifthsize=${fifthSize}`;
        }
    };

    return (
        <div className="mt-8 flex flex-col justify-start items-start w-full max-w-[800px]">
            {products.map((product) => (
                <>
                    <div
                        key={product.id}
                        className="flex flex-col w-full justify-start items-start gap-2"
                    >
                        <div className="relative">
                            <Search className="absolute top-3 w-4 h-4 left-2" />
                            <Input
                                placeholder={`Марка:`}
                                onChange={(e) => setMarkaValue(e.target.value)}
                                className="max-w-[200px] pl-7"
                            />
                        </div>
                        <div className="flex gap-2 w-full overflow-x-auto justify-start max-w-[350px] sm:max-w-full pb-2">
                            {product.marks.filter((e) =>
                                markaValue.length > 0
                                    ? e.toLowerCase().includes(markaValue.toLowerCase())
                                    : e
                            ).length > 0 ? (
                                product.marks
                                    .filter((e) =>
                                        markaValue.length > 0
                                            ? e.toLowerCase().includes(markaValue.toLowerCase())
                                            : e
                                    )
                                    .map((marka) => (
                                        <Button
                                            asChild
                                            key={marka}
                                            variant="outline"
                                            className={`${decodeURI(params.id) === marka && "border-orange-text"
                                                }`}
                                        >
                                            <Link
                                                className="hover:underline w-full"
                                                href={firstNavLink(marka)}
                                            >
                                                {marka}
                                            </Link>
                                        </Button>
                                    ))
                            ) : (
                                <p className="py-3">Ничего не найдено.</p>
                            )}
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div
                        key={product.id}
                        className="flex flex-col w-full justify-start items-start gap-2"
                    >
                        <div className="relative">
                            <Search className="absolute top-3 w-4 h-4 left-2" />
                            <Input
                                placeholder={product.firstTypeOfSize}
                                onChange={(e) => setFirstSizeValue(e.target.value)}
                                className="max-w-[200px] pl-7"
                            />
                        </div>
                        <div className="flex gap-2 w-full overflow-x-auto justify-start max-w-[350px] sm:max-w-full pb-2">
                            {product.sizes.filter((e) =>
                                firstSizeValue.length > 0
                                    ? e.toLowerCase().includes(firstSizeValue.toLowerCase())
                                    : e
                            ).length > 0 ? (
                                product.sizes
                                    .filter((e) =>
                                        firstSizeValue.length > 0
                                            ? e.toLowerCase().includes(firstSizeValue.toLowerCase())
                                            : e
                                    )
                                    .map((firstSize) => (
                                        <Button
                                            asChild
                                            key={firstSize}
                                            variant="outline"
                                            className={`${decodeURI(params.size) === firstSize &&
                                                "border-orange-text"
                                                }`}
                                        >
                                            <Link
                                                className="hover:underline w-full"
                                                href={secondNavLink(firstSize)}
                                            >
                                                {firstSize.replace("mm", " мм")}
                                            </Link>
                                        </Button>
                                    ))
                            ) : (
                                <p className="py-3">Ничего не найдено.</p>
                            )}
                        </div>
                    </div>
                    {product.secondTypeOfSize && (
                        <>
                            <Separator className="my-4" />
                            <div
                                key={product.id}
                                className="flex flex-col w-full justify-start items-start gap-2"
                            >
                                <div className="relative">
                                    <Search className="absolute top-3 w-4 h-4 left-2" />
                                    <Input
                                        placeholder={product.secondTypeOfSize}
                                        onChange={(e) => setSecondSizeValue(e.target.value)}
                                        className="max-w-[200px] pl-7"
                                    />
                                </div>
                                <div className="flex gap-2 w-full overflow-x-auto justify-start max-w-[350px] sm:max-w-full pb-2">
                                    {product.secondSizes.filter((e) =>
                                        secondSizeValue.length > 0
                                            ? e.toLowerCase().includes(secondSizeValue.toLowerCase())
                                            : e
                                    ).length > 0 ? (
                                        product.secondSizes
                                            .filter((e) =>
                                                secondSizeValue.length > 0
                                                    ? e
                                                        .toLowerCase()
                                                        .includes(secondSizeValue.toLowerCase())
                                                    : e
                                            )
                                            .map((secondSize) => (
                                                <Button
                                                    asChild
                                                    key={secondSize}
                                                    variant="outline"
                                                    className={`${second === secondSize && "border-orange-text"
                                                        }`}
                                                >
                                                    <Link
                                                        className="hover:underline w-full"
                                                        href={thirdNavLink(secondSize)}
                                                    >
                                                        {secondSize.replace("mm", " мм")}
                                                    </Link>
                                                </Button>
                                            ))
                                    ) : (
                                        <p className="py-3">Ничего не найдено.</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                    {product.thirdTypeOfSize && (
                        <>
                            <Separator className="my-4" />
                            <div
                                key={product.id}
                                className="flex flex-col w-full justify-start items-start gap-2"
                            >
                                <div className="relative">
                                    <Search className="absolute top-3 w-4 h-4 left-2" />
                                    <Input
                                        placeholder={product.thirdTypeOfSize}
                                        onChange={(e) => setThirdSizeValue(e.target.value)}
                                        className="max-w-[200px] pl-7"
                                    />
                                </div>
                                <div className="flex gap-2 w-full overflow-x-auto justify-start max-w-[350px] sm:max-w-full pb-2">
                                    {product.thirdSizes.filter((e) =>
                                        thirdSizeValue.length > 0
                                            ? e.toLowerCase().includes(thirdSizeValue.toLowerCase())
                                            : e
                                    ).length > 0 ? (
                                        product.thirdSizes
                                            .filter((e) =>
                                                thirdSizeValue.length > 0
                                                    ? e
                                                        .toLowerCase()
                                                        .includes(thirdSizeValue.toLowerCase())
                                                    : e
                                            )
                                            .map((thirdSize) => (
                                                <Button
                                                    asChild
                                                    key={thirdSize}
                                                    variant="outline"
                                                    className={`${third === thirdSize && "border-orange-text"
                                                        }`}
                                                >
                                                    <Link
                                                        className="hover:underline w-full"
                                                        href={forthNavLink(thirdSize)}
                                                    >
                                                        {thirdSize.replace("mm", " мм")}
                                                    </Link>
                                                </Button>
                                            ))
                                    ) : (
                                        <p className="py-3">Ничего не найдено.</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                    {product.forthTypeOfSize && (
                        <>
                            <Separator className="my-4" />
                            <div
                                key={product.id}
                                className="flex flex-col w-full justify-start items-start gap-2"
                            >
                                <div className="relative">
                                    <Search className="absolute top-3 w-4 h-4 left-2" />
                                    <Input
                                        placeholder={product.forthTypeOfSize}
                                        onChange={(e) => setForthSizeValue(e.target.value)}
                                        className="max-w-[200px] pl-7"
                                    />
                                </div>
                                <div className="flex gap-2 w-full overflow-x-auto justify-start max-w-[350px] sm:max-w-full pb-2">
                                    {product.forthSizes.filter((e) =>
                                        forthSizeValue.length > 0
                                            ? e.toLowerCase().includes(forthSizeValue.toLowerCase())
                                            : e
                                    ).length > 0 ? (
                                        product.forthSizes
                                            .filter((e) =>
                                                forthSizeValue.length > 0
                                                    ? e
                                                        .toLowerCase()
                                                        .includes(forthSizeValue.toLowerCase())
                                                    : e
                                            )
                                            .map((forthSize) => (
                                                <Button
                                                    asChild
                                                    key={forthSize}
                                                    variant="outline"
                                                    className={`${forth === forthSize && "border-orange-text"
                                                        }`}
                                                >
                                                    <Link
                                                        className="hover:underline w-full"
                                                        href={fifthNavLink(forthSize)}
                                                    >
                                                        {forthSize.replace("mm", " мм")}
                                                    </Link>
                                                </Button>
                                            ))
                                    ) : (
                                        <p className="py-3">Ничего не найдено.</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                    {product.fifthtypeOfSize && (
                        <>
                            <Separator className="my-4" />
                            <div
                                key={product.id}
                                className="flex flex-col w-full justify-start items-start gap-2"
                            >
                                <div className="relative">
                                    <Search className="absolute top-3 w-4 h-4 left-2" />
                                    <Input
                                        placeholder={product.fifthtypeOfSize}
                                        onChange={(e) => setFifthSizeValue(e.target.value)}
                                        className="max-w-[200px] pl-7"
                                    />
                                </div>
                                <div className="flex gap-2 w-full overflow-x-auto justify-start max-w-[350px] sm:max-w-full pb-2">
                                    {product.fifthSizes.filter((e) =>
                                        fifthSizeValue.length > 0
                                            ? e.toLowerCase().includes(fifthSizeValue.toLowerCase())
                                            : e
                                    ).length > 0 ? (
                                        product.fifthSizes
                                            .filter((e) =>
                                                fifthSizeValue.length > 0
                                                    ? e
                                                        .toLowerCase()
                                                        .includes(fifthSizeValue.toLowerCase())
                                                    : e
                                            )
                                            .map((fifthSize) => (
                                                <Button
                                                    asChild
                                                    key={fifthSize}
                                                    variant="outline"
                                                    className={`${fifth === fifthSize && "border-orange-text"
                                                        }`}
                                                >
                                                    <Link
                                                        className="hover:underline w-full"
                                                        href={sixthNavLink(fifthSize)}
                                                    >
                                                        {fifthSize.replace("mm", " мм")}
                                                    </Link>
                                                </Button>
                                            ))
                                    ) : (
                                        <p className="py-3">Ничего не найдено.</p>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </>
            ))}
        </div>
    );
};

export default SizeSelector;
