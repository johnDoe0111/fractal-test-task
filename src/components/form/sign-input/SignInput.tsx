import { FC } from "react"
import { Control, useController } from "react-hook-form"
import InputMask from "react-input-mask"
import { SignInFormData } from "pages/main-page/MainPage"
import styles from './sign-input.module.css'

interface Props {
  control: Control<SignInFormData>
  name: keyof SignInFormData
  placeholder?: string
  mask?: string
  type: string
}

export const SignInput: FC<Props> = ({ control, name, placeholder, mask, type }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  if (mask) {
    return (
      <InputMask mask={mask} maskChar="" {...field}>
        {/*@ts-ignore*/}
        {(inputProps: any) => (
          <div className={styles.signInput}>
            <input {...inputProps} placeholder={placeholder} type={type}/>
            <div>
              <p>{error?.message}</p>
            </div>
          </div>
        )}
      </InputMask>
    )
  }

  return null
}

export default SignInput
