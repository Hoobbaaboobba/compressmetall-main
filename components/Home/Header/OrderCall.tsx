"use client";

import { sendRequestToEmail } from "@/actions/sendRequestToEmail";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { formSchema } from "@/schemas/formSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";

interface OrderCallProps {
  // onChange: (open: boolean) => void;
  placeHolder1: string;
  value1?: string;
  placeHolder2: string;
  firstType: string;
  secondType: string;
}

export const OrderCall: React.FC<OrderCallProps> = ({ value1 }) => {
  const [isPending, startTransition] = useTransition();
  // const [checked, setChecked] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      product: value1,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    startTransition(async () => {
      await sendRequestToEmail(values);
      toast({
        title: "Заявка успешно отправлена!",
        description: "Мы свяжемся с вами в ближайшее время",
      });
    });
  }

  return (
    <Form {...form}>
      <div className="flex flex-col bg-white text-gray-bg text-center z-50">
        <form
          method="POST"
          onSubmit={form.handleSubmit(onSubmit)}
          target="_blank"
          className="flex flex-col text-black gap-4 mt-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormLabel>Почта</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormLabel>Ваше имя</FormLabel>
                <FormControl>
                  <Input placeholder="Алексей Матвеев" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormLabel>Товар</FormLabel>
                <FormControl>
                  <Input className="cursor-text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormLabel>Сообщение</FormLabel>
                <FormControl>
                  <Textarea
                    className="min-h-[150px]"
                    placeholder="..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="checked"
            render={({ field }) => (
              <FormItem className="w-full text-start">
                <FormControl>
                  <Checkbox
                    checked={checked}
                    onCheckedChange={() => setChecked((e) => !e)}
                  />
                </FormControl>
                <FormLabel>Сообщение</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <button
            type="submit"
            className="bg-orange-bg p-2 flex justify-center items-center text-white rounded-md hover:opacity-70 transition duration-200"
          >
            {isPending ? <Loader2 className="animate-spin" /> : "Отправить"}
          </button>
        </form>
      </div>
    </Form>
  );
};

export default OrderCall;
