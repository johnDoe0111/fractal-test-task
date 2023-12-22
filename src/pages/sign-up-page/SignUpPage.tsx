import styles from "./signUp.module.css"
import { yupResolver } from "@hookform/resolvers/yup"
import ControlledInput from "components/form/ControlledInput"
import Button from "components/form/Button"
import { mainHeaderIcons, name } from "../../constants"
import MainLayout from "layouts/MainLayout"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { schema } from "validation"
import { useQueryParams } from "hooks/useQueryParams"

export interface SignUpFormData {
  tel: string
  email: string
}

const MainPage = () => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem('user')
    if (user) {
      return JSON.parse(user)
    }
  })

  const { navigateWithParams } = useQueryParams()

  const { handleSubmit, control, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
    mode: "all",
  })

  const onSubmit = (data: SignUpFormData) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 1,
          tel: data.tel,
          email: data.email,
        }

        resolve(userData)
      }, 2000)
    }).then((res) => {
      navigateWithParams('/onboarding', 'step', '1')
      localStorage.removeItem("user")
      localStorage.setItem("user", JSON.stringify(res))
      setLoading(false)
      reset()
    })
  }

  const words = name.split(" ")

  const initials = words.map((word) => word[0]).join("")

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
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
                    <a className={styles.link} href={item.link}>
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.line} />

          <div className={styles.form}>
            <div>
              <ControlledInput
                control={control}
                name="tel"
                mask="+7(999) 999-99-99"
                placeholder="+7 999 999-99-99"
                type="tel"
                label="Номер телефона"
                data={userData.tel}
              />
            </div>
            <div>
              <ControlledInput
                control={control}
                name="email"
                type="email"
                placeholder="webstudio.fractal@example.com"
                label="Email"
                data={userData.email}
              />
            </div>

            <div className={styles.buttonStart}>
              <Button title="Начать" id="button-start" type="submit"/>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  )
}

export default MainPage
