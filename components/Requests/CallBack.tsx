'use client'

import { sendRequestToEmail } from "@/actions/sendRequestToEmail";
import OrangeButton from "../OrangeButton"
import { Input } from "../ui/input"
import { toast } from "../ui/use-toast";
import { useState } from "react";

export const CallBack = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSubmited, setIsSubmited] = useState(false);

    async function onSubmit(phoneNumber: string) {
        try {
            const mail = await fetch(
                `https://api.calltouch.ru/calls-service/RestAPI/requests/69707/register/?requestNumber=${phoneNumber}&subject=Обратный звонок`,
                {
                    method: "GET",
                }
            );
            if (!mail.ok) {
                throw new Error("Error!");
            }
            if (window.ym) {
                window.ym(95780946, "reachGoal", "zayavka");
                console.log("zayavka");
            } else {
                throw new Error("Заявка не отправлена!");
            }
            setIsSubmited(true);
            sendRequestToEmail(phoneNumber);
            toast({
                title: "Заявка успешно отправлена!",
                description: "Мы свяжемся с вами в ближайшее время",
            });

            const data = await mail.json();
            return data;
        } catch (error) {
            toast({
                title: "Упс, что-то пошло не так!",
                description: "Повторите попытку позже",
            });
        }
    }
    return (
        <form className="sticky top-[250px] right-0 w-[350px] shadow-md h-[310px] bg-white rounded-lg p-6">
            <h4 className="font-bold text-3xl">Хотите узнать цену?</h4>
            <p className="mt-4">Наш менеджер свяжется с вами и рассчитает цену того, что вам нужно:</p>
            <Input className="w-full my-4" onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Номер телефона" />
            <OrangeButton disabled={isSubmited || phoneNumber.length < 11} onClick={() => onSubmit(phoneNumber)} label="Отправить" className={`w-full ${isSubmited || phoneNumber.length < 11 && "bg-orange-text/50 hover:bg-orange-text/50 cursor-not-allowed"}`} />
        </form>
    )
}
