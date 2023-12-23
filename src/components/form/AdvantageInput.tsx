import Trash from "../../assets/icons/Trash.png";
import { addInput, deleteInput } from "../../redux/inputSlice";
import Button from "./Button";
import ControlledInput from "./ControlledInput";
import styles from "./advantageInput.module.css";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import { FC } from "react";
import { Control } from "react-hook-form";

interface Props {
  control: Control<any>;
}

export const AdvantageInput: FC<Props> = ({ control }) => {
  const inputs = useAppSelector((state: any) => state.inputs);
  const dispatch = useAppDispatch();

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1, type: "input" };
    dispatch(addInput(newInput));
  };

  const handleDeleteInput = (id: number) => {
    dispatch(deleteInput(id));
  };

  return (
    <div>
      {inputs.map((item: { id: number; type: string }) => (
        <div className={styles.inputs} key={item.id}>
          <div className={styles.leftItem}>
            <ControlledInput
              control={control}
              label="Премущества"
              name={`advantages-${item.id}`}
              type={item.type}
              placeholder="Placeholder"
              bg="input-bg"
            />
          </div>
          <div
            className={styles.trash}
            onClick={() => handleDeleteInput(item.id)}
          >
            <img src={Trash} alt="delete-icon" />
          </div>
        </div>
      ))}

      <div>
        <Button type="button" handleClick={handleAddInput} />
      </div>
    </div>
  );
};
