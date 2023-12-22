import * as yup from "yup"

export const schema = yup.object({
  tel: yup.string().required(),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Введите корректный email",
    )
    .required("Email обязателен для заполнения"),
})
