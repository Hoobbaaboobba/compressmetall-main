import { TypographyH2 } from "@/components/Global/Typography/TypographyH2";
import { TypographyP } from "@/components/Global/Typography/TypographyP";
import OrderCall from "@/components/Home/Header/OrderCall";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Request = () => {
    return (
    <Card className="border-none shadow-none px-4 py-0 m-0">
        <CardHeader className="px-0">
          <TypographyH2>Оставить заявку</TypographyH2>
          <TypographyP>
            Оставьте ваши контакты и мы ответим Вам
          </TypographyP>
        </CardHeader>
        <CardContent className="space-y-2 px-0">
          <OrderCall
            placeHolder1={"Почта"}
            placeHolder2={"Ваше имя / компания"}
            firstType={"Почта"}
            secondType={"Имя"}
          />
        </CardContent>
      </Card>
    )
}
