"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

export const YandexMaps = ({ city }: { city: string }) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <Skeleton className="w-full h-[300px]" />
        )
    }

    return (
        <>
            {city === "moscow" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af94aae2c0b270ef66717c2975ebc97349c64e9b2c1ca7d1c3f639fe50c0fd9ac&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af94aae2c0b270ef66717c2975ebc97349c64e9b2c1ca7d1c3f639fe50c0fd9ac&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3Af94aae2c0b270ef66717c2975ebc97349c64e9b2c1ca7d1c3f639fe50c0fd9ac&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "voronezh" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A01abc92facea6370ce5dd7e7674a6eefc0286da4a34e5fbadaf8cd29bd0b7566&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A01abc92facea6370ce5dd7e7674a6eefc0286da4a34e5fbadaf8cd29bd0b7566&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A01abc92facea6370ce5dd7e7674a6eefc0286da4a34e5fbadaf8cd29bd0b7566&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "donetsk" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A98c861b977983974cd8ccada0627a60309616721f282f054aeb6ecbb57a4af5d&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A98c861b977983974cd8ccada0627a60309616721f282f054aeb6ecbb57a4af5d&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A98c861b977983974cd8ccada0627a60309616721f282f054aeb6ecbb57a4af5d&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "kazan" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf01a07ae99aefe871b11cb63e80f7acded6eccb0f8c7791795c96263b741a89&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf01a07ae99aefe871b11cb63e80f7acded6eccb0f8c7791795c96263b741a89&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf01a07ae99aefe871b11cb63e80f7acded6eccb0f8c7791795c96263b741a89&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "nizhnynovgorod" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f191b523cc3782cc93f73ccf7a9c7921ff64cd59b16701402d889ee650b7b9a&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f191b523cc3782cc93f73ccf7a9c7921ff64cd59b16701402d889ee650b7b9a&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A6f191b523cc3782cc93f73ccf7a9c7921ff64cd59b16701402d889ee650b7b9a&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "ryazan" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3fe013f98b28630e8358161dc074e9a90d78b65c08d35146447d83d2220e7e27&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3fe013f98b28630e8358161dc074e9a90d78b65c08d35146447d83d2220e7e27&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A3fe013f98b28630e8358161dc074e9a90d78b65c08d35146447d83d2220e7e27&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "saratov" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A16a57ee63bb72cb55b6f89475844e61393cc949c988580328e8caf9c0be4f3fa&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A16a57ee63bb72cb55b6f89475844e61393cc949c988580328e8caf9c0be4f3fa&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A16a57ee63bb72cb55b6f89475844e61393cc949c988580328e8caf9c0be4f3fa&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "ufa" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A14e4a3f3cdead45a9e6fc0658f731b68f2fb2c751f6405bef902c1f3d5f13801&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A14e4a3f3cdead45a9e6fc0658f731b68f2fb2c751f6405bef902c1f3d5f13801&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A14e4a3f3cdead45a9e6fc0658f731b68f2fb2c751f6405bef902c1f3d5f13801&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "tver" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c3bfb205221690306051bb1ab795f0d0a94bc6c3e55230e807c6f5f9bd5b33d&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c3bfb205221690306051bb1ab795f0d0a94bc6c3e55230e807c6f5f9bd5b33d&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A8c3bfb205221690306051bb1ab795f0d0a94bc6c3e55230e807c6f5f9bd5b33d&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "tula" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a2c3208ca8ba4943ede517b0b6fd0520e6077b289cf1f04663d099f8b8762c2&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a2c3208ca8ba4943ede517b0b6fd0520e6077b289cf1f04663d099f8b8762c2&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A5a2c3208ca8ba4943ede517b0b6fd0520e6077b289cf1f04663d099f8b8762c2&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "yaroslavl" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae6ec88344de945e681ceaa024aea22151d7c80dbea28307956bca7e0eee8dfc&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae6ec88344de945e681ceaa024aea22151d7c80dbea28307956bca7e0eee8dfc&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3Aae6ec88344de945e681ceaa024aea22151d7c80dbea28307956bca7e0eee8dfc&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
        </>
    )
}
