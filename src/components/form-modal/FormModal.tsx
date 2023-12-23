import CompleteIcon from "../../assets/icons/CompleteIcon.png";
import ErrorIcon from "../../assets/icons/Error.png";
import styles from "./formModal.module.css";
import Button from "components/form/Button";
import { FC } from "react";

interface Props {
  title: string;
  success: boolean;
}

export const FormModal: FC<Props> = ({ title, success }) => {
  return (
    <div className={success ? styles.modalInner : styles.errorInner}>
      <p>{title}</p>
      <div className={styles.iconBlock}>
        <img src={success ? CompleteIcon : ErrorIcon} alt="complete-icon" />
      </div>
      <div className={styles.buttonBlock}>
        {success ? (
          <Button title="На главную" type="button" />
        ) : (
          <Button title="Закрыть" type="button" />
        )}
      </div>
    </div>
  );
};
