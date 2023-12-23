import styles from "./textArea.module.css"
import React, { FC, useState } from "react"
import { Control, useController } from "react-hook-form"

interface Props {
  label: string
  placeholder: string
  control: Control<any>
  name: string
}

export const TextArea: FC<Props> = ({ label, placeholder, control, name }) => {
  const [charCount, setCharCount] = useState(0)
  const maxCharCount = 200

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value
    setCharCount(inputValue.length)
    field.onChange(event)
  }

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <div className={styles.textAreaWrapper}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.textArea}
        placeholder={placeholder}
        {...field}
        onChange={handleInputChange}
      />
      <div>
        <p className="error-message">{error?.message}</p>
        <p>
          {charCount}/{maxCharCount}
        </p>
      </div>
    </div>
  )
}
