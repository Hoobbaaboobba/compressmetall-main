"use client";

import OrderCall from "../Home/Header/OrderCall";
import useRequestModal from "@/hooks/useRequestModal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const Request = () => {
  const { onClose, isOpen, defaultValue } = useRequestModal();

  const hideRequest = () => {
    onClose();
    document.body.style.overflowY = "auto";
  };
  return (
    <div
      className={` ${
        isOpen ? "flex" : "hidden"
      } justify-center items-center fixed top-0 left-0 z-[100] px-6 w-full h-[100vh]`}
    >
      <div
        onClick={hideRequest}
        className="bg-black bg-opacity-70 backdrop-blur-2 w-full h-[100vh] fixed top-0 left-0"
      ></div>
      <Tabs defaultValue={defaultValue} className="w-[400px] z-30">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="request">Заявка</TabsTrigger>
          <TabsTrigger value="call">Звонок</TabsTrigger>
          <TabsTrigger value="price">Прайс</TabsTrigger>
        </TabsList>
        <TabsContent value="request">
          <Card>
            <CardHeader>
              <CardTitle>Оставить заявку</CardTitle>
              <CardDescription>
                Оставьте ваши контакты и мы ответим Вам
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <OrderCall
                placeHolder1={"Почта"}
                placeHolder2={"Ваше имя / Ваша компания"}
                firstType={"Почта"}
                secondType={"Имя"}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="call">
          <Card>
            <CardHeader>
              <CardTitle>Заказать звонок</CardTitle>
              <CardDescription>
                Оставьте ваши контакты и мы перезвоним Вам
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <OrderCall
                placeHolder1={"Ваше имя / Ваша компания"}
                placeHolder2={"Ваш номер телефона"}
                firstType={"Имя"}
                secondType={"Номер телефона"}
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="price">
          <Card>
            <CardHeader>
              <CardTitle>Запросить прайс</CardTitle>
              <CardDescription>
                Оставьте ваши контакты и мы отправим Вам прайс
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <OrderCall
                placeHolder1={"Ваш номер телефона"}
                placeHolder2={"Товар"}
                firstType={"Номер телефона"}
                secondType={"Товар"}
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Request;
