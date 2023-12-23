import styles from "./steps.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormModal } from "components/form-modal/FormModal";
import Button from "components/form/Button";
import { TextArea } from "components/form/TextArea";
import { ModaLayout } from "layouts/modal-layout/ModalLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { thirdStepSchema } from "validation";

interface aboutFormData {
  about: string;
}

const ThirdStep = () => {
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",
    resolver: yupResolver(thirdStepSchema),
    defaultValues: {
      about: userData?.about,
    },
  });

  const onSubmit = (data: aboutFormData) => {
    setModalActive(false);
    setLoading(true);
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 4,
          about: data.about,
        };
        resolve(userData);
      }, 2000);
    })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify({ ...userData, res }));
        reset();
        setSuccess(true);
        setModalActive(true);
      })
      .catch((error) => {
        setSuccess(false);
      })
      .finally(() => setLoading(false));
  };

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
          <Button
            title={loading ? "Загрузка..." : "Отправить"}
            id="button-next"
            type="submit"
            setActive={setModalActive}
            disabled={loading}
          />
        </div>
      </section>

      {modalActive ? (
        <ModaLayout setActive={setModalActive}>
          {loading ? null : !loading && success ? (
            <FormModal title="Форма успешно отправлена" success={success} />
          ) : (
            <FormModal title="Ошибка" success={success} />
          )}
        </ModaLayout>
      ) : null}
    </form>
  );
};

export default ThirdStep;
