import * as z from "zod";

export const formSchema = z.object({
  email: z.string().min(6, {
    message: "Почта должна содержать минимум 6 символов",
  }),
  fio: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  subject: z.string(),
  comment: z.string(),
});
