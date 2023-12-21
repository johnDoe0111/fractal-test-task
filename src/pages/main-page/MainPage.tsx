import styles from "./main-page.module.css"
import { yupResolver } from "@hookform/resolvers/yup"
import SignInput from "components/form/sign-input/SignInput"
import { mainHeaderIcons, name } from "constants/constants"
import MainLayout from "layouts/MainLayout"
import { useForm } from "react-hook-form"
import { schema } from "validation"

export interface SignInFormData {
  tel: string
}

const MainPage = () => {
  const { handleSubmit, control, reset } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  })

  const onSubmit = (data: SignInFormData) => {
    console.log(data)
    reset()
  }

  const words = name.split(" ")

  const initials = words.map((word) => word[0]).join("")

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className={styles.main}>
          <div className={styles.flex}>
            <div className={styles.circle}>{initials}</div>
            <div>
              <div className={`${styles.name} ${styles.textColor}`}>{name}</div>
              <div className={styles.flex}>
                {mainHeaderIcons.map((item) => (
                  <div
                    className={`${styles.flex} ${styles.iconsMargin}`}
                    key={item.id}
                  >
                    <img src={item.image} alt="main-icon" />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.line} />

          <div className={styles.form}>
            <div>
              <p className={`${styles.textColor}`}>Номер телефона</p>
              <SignInput
                control={control}
                name="tel"
                mask="+7(999) 999-99-99"
                placeholder="+7 999 999-99-99"
                type="tel"
              />
            </div>
            <div>
              <p className={`${styles.textColor}`}>Email</p>
            </div>
          </div>
          <button type="submit">НАчать</button>
        </div>
      </form>
    </MainLayout>
  )
}

export default MainPage
