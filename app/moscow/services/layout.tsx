import { MenuAccordion } from "./components/MenuAccordion";
import { Request } from "./rezka-metalla/components/Request";

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container flex mt-10">
            <MenuAccordion/>
            <div className="w-full">
            {children}
            <Request/>
            </div>
        </div>
    )
}
