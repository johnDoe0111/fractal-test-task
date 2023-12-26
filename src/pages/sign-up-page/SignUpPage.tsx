import { getUserBase } from "../../redux/user/userAction";
import styles from "./signUp.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/form/Button";
import ControlledInput from "components/form/ControlledInput";
import { mainHeaderIcons, name } from "consts";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { useQueryParams } from "hooks/useQueryParams";
import MainLayout from "layouts/main-layout/MainLayout";
import { useForm } from "react-hook-form";
import { signUpSchema } from "validation";

interface SignUpFormData {
  tel: string;
  email: string;
}

const SignUpPage = () => {
  const dispatch = useAppDispatch();
  const { userBase, isLoading, error } = useAppSelector((state) => state.user);
  const { navigateWithParams } = useQueryParams();

  const { handleSubmit, control, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    mode: "all",
    defaultValues: {
      tel: userBase?.tel || "",
      email: userBase?.email || "",
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    dispatch(getUserBase(data));

    if (!isLoading) {
      navigateWithParams("/onboarding", "step", "1");
      reset();
    }
  };

  const words = name.split(" ");

  const initials = words.map((word) => word[0]).join("");

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <MainLayout>
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <div className={styles.main}>
          <div className={styles.flex}>
            <div className={styles.circle}>{initials}</div>
            <div>
              <div className={`${styles.name} ${styles.textColor}`}>{name}</div>
              <div className={styles.flex}>
                {mainHeaderIcons.map((item) => (
                  <div
                    className={`${styles.flex} ${styles.iconsMargin}`}
                    key={item.id}
                  >
                    <img src={item.image} alt="main-icon" />
                    <a className={styles.link} href={item.link}>
                      {item.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.line} />

          <div className={styles.form}>
            <div>
              <ControlledInput
                control={control}
                name="tel"
                mask="+7(999) 999-99-99"
                placeholder="+7 999 999-99-99"
                type="tel"
                label="Номер телефона"
                variant="long-input"
              />
            </div>
            <div>
              <ControlledInput
                control={control}
                name="email"
                type="email"
                placeholder="webstudio.fractal@example.com"
                label="Email"
                variant="long-input"
              />
            </div>

            <div className={styles.buttonStart}>
              <Button
                title={isLoading ? "Загрузка..." : "Начать"}
                id="button-start"
                type="submit"
                disabled={isLoading}
              />
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default SignUpPage;
