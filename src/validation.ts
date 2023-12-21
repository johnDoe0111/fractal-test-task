import * as yup from "yup"

export const schema = yup.object({
  tel: yup.string().required(),
});