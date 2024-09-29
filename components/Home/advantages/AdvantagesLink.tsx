'use client'

import useRequestModal from "@/hooks/useRequestModal"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface IAdvantagesLink {
    link: string,
    price?:boolean
}

export const AdvantagesLink = ({link, price}: IAdvantagesLink) => {
    const pathhname = usePathname().split("/")[1] || 'moscow'
    const {onOpen} = useRequestModal()

    return (
        <>
        {price ? (
            <div onClick={onOpen} className="absolute inset-0"/>
        ) : (
        <Link href={`/${pathhname}${link}`} className="absolute inset-0"/>
        )
        }
        </>

    )
}
