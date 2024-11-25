export const links = [
    {
        label: "moscow",
        link: "https://yandex.ru/map-widget/v1/?um=constructor%3A7e9e1cd2335674d56e21cb00be649ed25322c6ee10a064c583fc2cbe2bf1cc3c&amp;source=constructor"
    },
    {
        label: "voronezh",
        link: "https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor",
    },

]

export const YandexMaps = ({ city }: { city: string }) => {
    return (
        <>
            {city === "moscow" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "voronezh" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "donetsk" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "kazan" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "nizhnynovgorod" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "ryazan" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "saratov" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "ufa" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "tver" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "tula" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
            {city === "yaroslavl" && (
                <>
                    {/* @ts-ignore */}
                    <iframe className="block md:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="320" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden md:block lg:hidden" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="600" height="300" frameborder="0"></iframe>
                    {/* @ts-ignore */}
                    <iframe className="hidden lg:block" src="https://yandex.ru/map-widget/v1/?um=constructor%3A679d5bf4f75fcf419ef8a46e7fb4776142beccb0645222de99968c52209f4ed9&amp;source=constructor" width="900" height="300" frameborder="0"></iframe>
                </>
            )}
        </>
    )
}
