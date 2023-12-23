import styles from "./steps.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/form/Button";
import ControlledInput from "components/form/ControlledInput";
import { Select } from "components/form/Select";
import { firstStepInputs, options } from "consts";
import { useQueryParams } from "hooks/useQueryParams";
import StepsLayout from "layouts/steps-layout/StepsLayout";
import { useForm } from "react-hook-form";
import { firstStepSchema } from "validation";

interface userFormData {
  nickname: string;
  name: string;
  lastname: string;
  category: string;
}

const FirstStep = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  console.log(userData);

  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<userFormData>({
    mode: "all",
    resolver: yupResolver(firstStepSchema),
    defaultValues: {
      nickname: userData?.nickname,
      name: userData?.name,
      lastname: userData?.lastname,
      category: userData?.category,
    },
  });

  const onSubmit = (data: userFormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 2,
          nickname: data.nickname,
          name: data.name,
          lastname: data.lastname,
          category: data.category,
        };
        resolve(userData);
      }, 2000);
    }).then((res) => {
      navigateWithParams("/onboarding", "step", "2");
      localStorage.setItem("userData", JSON.stringify({ ...res, ...userData }));
      reset();
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
      <StepsLayout>
        <section className={styles.firstStep}>
          {firstStepInputs.map((item) => (
            <div key={item.id}>
              <ControlledInput
                control={control}
                label={item.label}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                bg="input-bg"
              />
            </div>
          ))}

          <div>
            <Select
              control={control}
              name="category"
              label="Пол"
              options={options || []}
            />
          </div>
        </section>
      </StepsLayout>

      <div className={styles.onboardingButtons}>
        <Button title="Назад" id="button-back" type="button" />
        <Button title="Далее" id="button-next" type="submit" />
      </div>
    </form>
  );
};

export default FirstStep;
