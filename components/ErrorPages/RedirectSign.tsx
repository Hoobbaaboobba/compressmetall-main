"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export const RedirectSign = () => {
    const [timeLeft, setTimeLeft] = useState(5);
    const router = useRouter()

    useEffect(() => {
        if (timeLeft <= 0) {
            return router.back()
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);
    return (
        <p className="text-sm text-slate-500">Вас автоматически перенаправит через {timeLeft} сек</p>
    )
}
