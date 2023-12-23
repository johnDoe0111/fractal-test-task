import styles from "./steps.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdvantageInput } from "components/form/AdvantageInput";
import Button from "components/form/Button";
import { Group } from "components/form/Group";
import { useQueryParams } from "hooks/useQueryParams";
import StepsLayout from "layouts/steps-layout/StepsLayout";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { secondStepSchema } from "validation";

interface aboutFormData {
  advantages: any;
}

interface UserData {
  id: number
  advantages: any
}

const SecondStep = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const [loading, setLoading] = useState(false);

  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<aboutFormData>({
    mode: "all",
    resolver: yupResolver(secondStepSchema),
    defaultValues: {
      advantages: userData?.advantages || [],
    },
  });

  const onSubmit = (data: aboutFormData) => {
    setLoading(true);
    return new Promise<UserData>((resolve) => {
      setTimeout(() => {
        const userData: UserData = {
          id: 3,
          advantages: data.advantages,
        };
        resolve(userData);
      }, 2000);
    })
      .then((res: UserData) => {
        navigateWithParams("/onboarding", "step", "3");
        localStorage.setItem("userData", JSON.stringify({ ...userData, ...res }));
        reset();
      })
      .finally(() => setLoading(false));
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
          <Button
            title={loading ? "Загрузка..." : "Далее"}
            id="button-next"
            type="submit"
            disabled={loading}
          />
        </div>
      </form>
    </>
  );
};

export default SecondStep;
