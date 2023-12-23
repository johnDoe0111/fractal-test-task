import styles from "./signUp.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "components/form/Button";
import ControlledInput from "components/form/ControlledInput";
import { mainHeaderIcons, name } from "consts";
import { useQueryParams } from "hooks/useQueryParams";
import MainLayout from "layouts/main-layout/MainLayout";
import { useForm } from "react-hook-form";
import { signUpSchema } from "validation";

interface SignUpFormData {
  tel: string;
  email: string;
}

const SignUpPage = () => {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");

  const { navigateWithParams } = useQueryParams();

  console.log(userData);

  const { handleSubmit, control, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(signUpSchema),
    mode: "all",
    defaultValues: {
      tel: userData?.tel,
      email: userData?.email,
    },
  });

  const onSubmit = (data: SignUpFormData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const userData = {
          id: 1,
          tel: data.tel,
          email: data.email,
        };

        resolve(userData);
      }, 2000);
    }).then((res) => {
      navigateWithParams("/onboarding", "step", "1");
      localStorage.setItem("userData", JSON.stringify({ ...res, ...userData }));
      reset();
    });
  };

  const words = name.split(" ");

  const initials = words.map((word) => word[0]).join("");

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
                style="long-input"
              />
            </div>
            <div>
              <ControlledInput
                control={control}
                name="email"
                type="email"
                placeholder="webstudio.fractal@example.com"
                label="Email"
                style="long-input"
              />
            </div>

            <div className={styles.buttonStart}>
              <Button title="Начать" id="button-start" type="submit" />
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
};

export default SignUpPage;
