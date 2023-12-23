import styles from "./steps.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdvantageInput } from "components/form/AdvantageInput";
import Button from "components/form/Button";
import { Group } from "components/form/Group";
import { useQueryParams } from "hooks/useQueryParams";
import StepsLayout from "layouts/steps-layout/StepsLayout";
import { useForm } from "react-hook-form";
import { secondStepSchema } from "validation";

interface aboutFormData {
  advantages: any;
}

const SecondStep = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",
    resolver: yupResolver(secondStepSchema),
    defaultValues: {
      advantages: userData?.advantages || [],
    },
  });

  const onSubmit = (data: aboutFormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 3,
          advantages: data.advantages,
        };
        resolve(userData);
      }, 2000);
    }).then((res) => {
      navigateWithParams("/onboarding", "step", "3");
      localStorage.setItem("userData", JSON.stringify({ ...userData, res }));
      reset();
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <StepsLayout>
          <section className={styles.secondStep}>
            <AdvantageInput control={control} />

            <Group type="checkbox" title="Checkbox группа" />

            <Group type="radio" title="Radio группа" />
          </section>
        </StepsLayout>

        <div className={styles.onboardingButtons}>
          <Button title="Назад" id="button-back" type="button" />
          <Button title="Далее" id="button-next" type="submit" />
        </div>
      </form>
    </>
  );
};

export default SecondStep;
