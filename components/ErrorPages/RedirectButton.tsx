"use client"

import { useRouter } from "next/navigation"
import OrangeButton from "../OrangeButton"

export const RedirectButton = () => {
    const router = useRouter()
    return (
        <div className="mt-3" onClick={() => router.back()}>
            <OrangeButton label="Вернуться обратно" />
        </div>
    )
}
