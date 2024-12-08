"use server";

import { formSchema } from "@/schemas/formSchema";
import nodemailer from "nodemailer";

import * as z from "zod";

export const sendRequestToEmail = async (
    values: z.infer<typeof formSchema> | string
) => {
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });
    try {
        const testResult = await transport.verify();
        console.log(testResult);

        console.log("Заявка успешно отправлена!");
    } catch (error) {
        console.log(error);
    }

    try {
        if (typeof values === "string") {
            const mailOptions = {
                from: "kometalmailservice@mail.ru",
                to: "zakaz@kometal.ru",
                subject: "ОБРАТНЫЙ ЗВОНОК",
                html: `
                <div>
                <label style="font-weight: bold; margin: 0; padding: 0;">Имя:</label>
                <p style="margin: 0; padding: 0;">${values}</p>
                </div>
                `,
            };
            return await transport.sendMail(mailOptions);
        }
        const mailOptions = {
            from: "kometalmailservice@mail.ru",
            to: "zakaz@kometal.ru",
            subject: "НОВАЯ ЗАЯВКА",
            html: `
          <div>
            <label style="font-weight: bold; margin: 0; padding: 0;">Имя:</label>
            <p style="margin: 0; padding: 0;">${values.fio}</p>
          </div>
          <span>--------------------------------------------------------------------------------------------------------</span>
          <br/>
          <div>
            <label style="font-weight: bold; margin: 0; padding: 0;">Почта:</label>
            <p style="margin: 0; padding: 0;">${values.email}</p>
          </div>
          <span>--------------------------------------------------------------------------------------------------------</span>
          <br/>
          <div>
            <label style="font-weight: bold; margin: 0; padding: 0;">Товар:</label>
            <p style="margin: 0; padding: 0;">${values.subject}</p>
          </div>
          <span>--------------------------------------------------------------------------------------------------------</span>
          <br/>
          <div>
            <label style="font-weight: bold; margin: 0; padding: 0;">Сообщение:</label>
            <p style="margin: 0; padding: 0;">${values.comment}</p>
          </div>
          <span>--------------------------------------------------------------------------------------------------------</span>
      `,
        };

        return await transport.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
};
