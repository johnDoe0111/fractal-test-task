import "../../css/globals.css"
import styles from "./onboarding.module.css"
import Button from "components/form/Button"
import { ProgressBar } from "components/progress-bar/ProgressBar"
import FirstStep from "components/steps/FirstStep"
import SecondStep from "components/steps/SecondStep"
import ThirdStep from "components/steps/ThirdStep"
import { useQueryParams } from "hooks/useQueryParams"
import MainLayout from "layouts/main-layout/MainLayout"
import { useEffect, useState } from "react"

const Onboarding = () => {
  const [step, setStep] = useState<number | null>(null)

  const { getQuery } = useQueryParams()

  useEffect(() => {
    setStep(() => parseInt(getQuery("step") || "0", 10))
  }, [getQuery])

  return (
    <MainLayout>
      <section className={styles.onboarding}>
        <ProgressBar step={step} />
        {step === 1 ? <FirstStep /> : step === 2 ? <SecondStep /> : <ThirdStep/>}
      </section>
    </MainLayout>
  )
}

export default Onboarding
