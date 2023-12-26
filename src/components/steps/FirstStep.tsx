import { createUser } from "../../redux/user/userAction";
import styles from "./steps.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/form/Button";
import ControlledInput from "components/form/ControlledInput";
import { Select } from "components/form/Select";
import { firstStepInputs, options } from "consts";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useQueryParams } from "hooks/useQueryParams";
import StepsLayout from "layouts/steps-layout/StepsLayout";
import { UserFull } from "models/IUser";
import { useForm } from "react-hook-form";
import { firstStepSchema } from "validation";

interface userFormData {
  nickname: string;
  name: string;
  lastname: string;
  category: string;
}

const FirstStep = () => {
  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector((state) => state.user);

  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<userFormData>({
    mode: "all",
    resolver: yupResolver(firstStepSchema),
    defaultValues: {
      nickname: user?.nickname || "",
      name: user?.name || "",
      lastname: user?.lastname || "",
      category: user?.category || "",
    },
  });

  const onSubmit = (data: userFormData) => {
    dispatch(createUser(data as UserFull));
    if (!isLoading) {
      navigateWithParams("/onboarding", "step", "2");
      reset();
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

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
        <Button
          title={isLoading ? "Загрузка..." : "Далее"}
          id="button-next"
          type="submit"
          disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default FirstStep;
