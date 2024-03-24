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
import { useSearchParams } from "next/navigation";

const Request = () => {
  const { onClose, isOpen, defaultValue } = useRequestModal();
  const searchParams = useSearchParams();
  const queryLabel = searchParams.get("label") || "";

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
      <Card className="w-[400px] z-30">
        <CardHeader>
          <CardTitle>Оставить заявку</CardTitle>
          <CardDescription>
            Оставьте ваши контакты и мы ответим Вам
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <OrderCall
            value1={queryLabel}
            placeHolder1={"Почта"}
            placeHolder2={"Ваше имя / компания"}
            firstType={"Почта"}
            secondType={"Имя"}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Request;
