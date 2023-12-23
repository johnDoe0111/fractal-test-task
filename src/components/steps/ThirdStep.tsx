import styles from "./steps.module.css"
import { yupResolver } from "@hookform/resolvers/yup"
import { FormModal } from "components/form-modal/FormModal"
import Button from "components/form/Button"
import { TextArea } from "components/form/TextArea"
import { ModaLayout } from "layouts/modal-layout/ModalLayout"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { thirdStepSchema } from "validation"

interface aboutFormData {
  about: string
}

const ThirdStep = () => {
  const [modalActive, setModalActive] = useState(true);
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem("aboutData")
    if (user) {
      return JSON.parse(user)
    }
  })

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",
    resolver: yupResolver(thirdStepSchema),
    defaultValues: {
      about: userData?.about,
    },
  })

  const onSubmit = (data: aboutFormData) => {
    setLoading(true)
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 1,
          about: data.about,
        }
        resolve(userData)
      }, 2000)
    }).then((res) => {
      localStorage.removeItem("aboutData")
      localStorage.setItem("aboutData", JSON.stringify(res))
      setLoading(false)
      reset()
      setSuccess(true)
    })
  }

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <section className={styles.thirdStep}>
        <TextArea
          label="О себе"
          placeholder="Placeholder"
          control={control}
          name="about"
        />

        <div className={styles.onboardingButtons}>
          <Button title="Назад" id="button-back" type="button" />
          <Button title="Отправить" id="button-next" type="submit" setActive={setModalActive}/>
        </div>
      </section>

      {modalActive ? (
        <ModaLayout setActive={setModalActive} active={modalActive}>
          {success ? <FormModal title="Форма успешно отправлена" success={success}/> : <FormModal title="Ошибка" success={success}/>}
        </ModaLayout>
      ): null}
    </form>
  )
}

export default ThirdStep
