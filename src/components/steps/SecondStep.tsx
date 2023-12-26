import { createUser } from "../../redux/user/userAction";
import styles from "./steps.module.css";
import { AdvantageInputs } from "components/form/AdvantageInputs";
import Button from "components/form/Button";
import { Group } from "components/form/Group";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useQueryParams } from "hooks/useQueryParams";
import StepsLayout from "layouts/steps-layout/StepsLayout";
import { UserFull } from "models/IUser";
import { useForm } from "react-hook-form";

interface aboutFormData {
  advantages: string;
}

const SecondStep = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector(
    (state) => state.user
  );

  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",

    defaultValues: {
      advantages: user?.advantages || "",
    },
  });

  const onSubmit = (data: aboutFormData) => {
    dispatch(createUser(data as UserFull));
    if (!isLoading) {
      navigateWithParams("/onboarding", "step", "3");
      reset();
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <StepsLayout>
          <section className={styles.secondStep}>
            <AdvantageInputs control={control} />

            <Group type="checkbox" title="Checkbox группа" />

            <Group type="radio" title="Radio группа" />
          </section>
        </StepsLayout>

        <div className={styles.onboardingButtons}>
          <Button title="Назад" id="button-back" type="button" />
          <Button
            title={isLoading ? "Загрузка..." : "Далее"}
            id="button-next"
            type="submit"
            disabled={isLoading}
          />
        </div>
      </form>
    </>
  );
};

export default SecondStep;
