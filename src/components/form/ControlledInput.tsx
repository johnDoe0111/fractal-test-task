import styles from "./controlledInput.module.css";
import { FC } from "react";
import { Control, useController } from "react-hook-form";
import InputMask from "react-input-mask";

interface Props {
  control: Control<any>;
  name: string;
  placeholder?: string;
  mask?: string;
  type: string;
  label: string;
  data?: string;
  style?: string;
  bg?: string;
}

export const ControlledInput: FC<Props> = ({
  control,
  name,
  placeholder,
  mask,
  type,
  label,
  style,
  bg,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  if (mask) {
    return (
      <InputMask mask={mask} {...field}>
        <div className={style}>
          <label>{label}</label>
          <input
            placeholder={placeholder}
            type={type}
            className={styles.input}
          />
          <div>
            <p className="error-message">{error?.message}</p>
          </div>
        </div>
      </InputMask>
    );
  }

  return (
    <div className={style}>
      <label className={styles.label}>{label}</label>
      <input
        {...field}
        placeholder={placeholder}
        type={type}
        className={bg ? `${bg}` : `${styles.input}`}
      />
      <div>
        <p className="error-message">{error?.message}</p>
      </div>
    </div>
  );
};

export default ControlledInput;
