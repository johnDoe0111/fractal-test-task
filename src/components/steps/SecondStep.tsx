import styles from "./steps.module.css"
import { yupResolver } from "@hookform/resolvers/yup"
import { AdvantageInput } from "components/form/AdvantageInput"
import Button from "components/form/Button"
import { Group } from "components/form/Group"
import { useQueryParams } from "hooks/useQueryParams"
import StepsLayout from "layouts/steps-layout/StepsLayout"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { secondStepSchema } from "validation"

export interface aboutFormData {
  advantages: any
}

const SecondStep = () => {
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem("advantagesData")
    if (user) {
      return JSON.parse(user)
    }
  })

  const { navigateWithParams } = useQueryParams()

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",
    resolver: yupResolver(secondStepSchema),
    defaultValues: {
      advantages: userData?.advantages || [],
    },
  })

  const onSubmit = (data: aboutFormData) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 1,
          advantages: data.advantages,
        }
        resolve(userData)
      }, 2000)
    }).then((res) => {
      navigateWithParams("/onboarding", "step", "3")
      localStorage.removeItem("advantagesData")
      localStorage.setItem("advantagesData", JSON.stringify(res))
      setLoading(false)
      reset()
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <StepsLayout>
          <section className={styles.secondStep}>
            <div>
              <AdvantageInput control={control} />
            </div>

            <div>
              <Group
                type="checkbox"
                title="Checkbox группа"
              />
            </div>

            <div>
              <Group
                type="radio"
                title="Radio группа"
              />
            </div>
          </section>
        </StepsLayout>

        <div className={styles.onboardingButtons}>
          <Button title="Назад" id="button-back" type="button" />
          <Button title="Далее" id="button-next" type="submit" />
        </div>
      </form>
    </>
  )
}

export default SecondStep
