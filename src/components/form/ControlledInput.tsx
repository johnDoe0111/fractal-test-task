import styles from "./controlledInput.module.css"
import { SignUpFormData } from "pages/sign-up-page/SignUpPage"
import { FC } from "react"
import { Control, useController } from "react-hook-form"
import InputMask from "react-input-mask"

interface Props {
  control: Control<SignUpFormData>
  name: keyof SignUpFormData
  placeholder?: string
  mask?: string
  type: string
  label: string
  data?: string
}

export const ControlledInput: FC<Props> = ({
  control,
  name,
  placeholder,
  mask,
  type,
  label,
  data
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue: data,
  })

  if (mask) {
    return (
      <InputMask mask={mask} {...field}>
        <div className={styles.signInput}>
          <label>{label}</label>
          <input placeholder={placeholder} type={type} />
          <div>
            <p className={styles.errorMessage}>{error?.message}</p>
          </div>
        </div>
      </InputMask>
    )
  }

  return (
    <div className={styles.signInput}>
      <label className={styles.label}>{label}</label>
      <input {...field} placeholder={placeholder} type={type}/>
      <div>
        <p className={styles.errorMessage}>{error?.message}</p>
      </div>
    </div>
  )
}

export default ControlledInput
