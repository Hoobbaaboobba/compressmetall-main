"use client";

interface OrderCallProps {
  // onChange: (open: boolean) => void;
  placeHolder1: string;
  placeHolder2: string;
  firstType: string;
  secondType: string;
}

import { useForm } from "react-hook-form";

const OrderCall: React.FC<OrderCallProps> = ({
  placeHolder1,
  placeHolder2,
  firstType,
  secondType,
}) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: { preventDefault: () => void }) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <div className="flex flex-col bg-white text-gray-bg text-center z-50">
      <form
        method="POST"
        action="https://formsubmit.co/info@kometal.ru"
        onSubmit={onSubmit}
        target="_blank"
        className="flex flex-col text-black gap-4 mt-2"
      >
        <div className="text-start">
          <input
            required
            type="text"
            {...register(firstType, { required: true, maxLength: 100 })}
            className="border w-full rounded-md py-1 px-2"
            placeholder={placeHolder1}
          />
          {errors.firstType && (
            <p className="text-red-400 text-sm ml-1">
              {errors.firstType.type === "required" &&
                "Это поле обязательно для заполнения"}
              {errors.firstType.type === "maxLength" &&
                "Максимальная длина 100 символов"}
            </p>
          )}
        </div>
        <div className="text-start">
          <input
            required
            type="text"
            {...register(secondType, {
              required: true,
              maxLength: 100,
            })}
            className="border w-full rounded-md py-1 px-2"
            placeholder={placeHolder2}
          />
          {errors.secondType && (
            <p className="text-red-400 text-sm ml-1">
              {errors.secondType.type === "required" &&
                "Это поле обязательно для заполнения"}
              {errors.secondType.type === "maxLength" &&
                "Максимальная длина 100 символов"}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-orange-bg p-2 text-white rounded-md hover:opacity-70 transition duration-200"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default OrderCall;
