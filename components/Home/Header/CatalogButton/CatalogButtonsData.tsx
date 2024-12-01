import { BookMarked, FileText, Globe, PackageCheck, Phone, UserCheck, Wrench } from "lucide-react"

export const menuButtons = [
    {
        label: "Услуги",
        icon: <Wrench className="w-[18px] h-[18px]" />,
        href: "services"
    },
    {
        label: "Прайс",
        icon: <FileText className="w-[18px] h-[18px]" />
    },
    {
        label: "Доставка",
        icon: <PackageCheck className="w-[18px] h-[18px]" />,
        href: "dostavka"
    },
    {
        label: "Справочник",
        icon: <BookMarked className="w-[18px] h-[18px]" />,
        href: "directory/marki_stali"
    },
    {
        label: "Вакансии",
        icon: <UserCheck className="w-[18px] h-[18px]" />,
        href: "about_company/vacancies"
    },
    {
        label: "Контакты",
        icon: <Phone className="w-[18px] h-[18px]" />,
        href: "contacts"
    }
]
