import styles from "./steps.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormModal } from "components/form-modal/FormModal";
import Button from "components/form/Button";
import { TextArea } from "components/form/TextArea";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { ModaLayout } from "layouts/modal-layout/ModalLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { getUserAbout } from "../../redux/user/userAction";
import { thirdStepSchema } from "validation";

interface aboutFormData {
  about: string;
}

const ThirdStep = () => {
  const dispatch = useAppDispatch();
  const { userAbout, isLoading, error } = useAppSelector((state) => state.user);
  const [modalActive, setModalActive] = useState(false);
  const [success, setSuccess] = useState(false);

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",
    resolver: yupResolver(thirdStepSchema),
    defaultValues: {
      about: userAbout?.about || "",
    },
  });

  const onSubmit = (data: aboutFormData) => {
    if (error) {
      setSuccess(false);
      setModalActive(true);
    } else {
      dispatch(getUserAbout(data))
      reset();
      setSuccess(true);
    }
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
            title={isLoading ? "Загрузка..." : "Отправить"}
            id="button-next"
            type="submit"
            setActive={setModalActive}
            disabled={isLoading}
          />
        </div>
      </section>

      {modalActive ? (
        <ModaLayout setActive={setModalActive}>
          {isLoading ? null : !isLoading && success ? (
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
