import * as yup from "yup";

export const signUpSchema = yup.object({
  tel: yup.string().required("Телефон обязателен для заполнения"),
  email: yup
    .string()
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/,
      "Введите корректный email"
    )
    .required("Email обязателен для заполнения"),
});

export const firstStepSchema = yup.object({
  nickname: yup
    .string()
    .matches(/^[a-zA-Z0-9]+$/, "Можно вводить только буквы и цифры")
    .max(30)
    .required("Поле `Никнейм` обязателен для заполнения"),
  name: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Можно вводить только буквы")
    .max(50)
    .required("Поле `Имя` обязательно для заполнения"),
  lastname: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Можно вводить только буквы")
    .max(50)
    .required("Поле `Фамилия` обязательно для заполнения"),
  category: yup.string().required(),
});

export const secondStepSchema = yup.object({
  advantages: yup.string().matches(/^[a-zA-Zа-яА-Я]+$/, "Можно вводить только буквы")
    .required("Поле обязательно для заполнения"),
});

export const thirdStepSchema = yup.object({
  about: yup.string().max(200).required("Поле обязательно для заполнения"),
});
