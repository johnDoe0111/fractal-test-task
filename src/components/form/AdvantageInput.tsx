import { Control } from "react-hook-form"
import Trash from "../../assets/icons/Trash.png"
import Button from "./Button"
import ControlledInput from "./ControlledInput"
import styles from "./advantageInput.module.css"
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks"
import { addInput } from "../../redux/inputSlice"
import { FC } from "react"

interface Props {
  control: Control<any>
}

export const AdvantageInput:FC<Props> = ({ control }) => {
  const inputs = useAppSelector((state: any) => state.inputs)
  const dispatch = useAppDispatch()

  const handleAddInput = () => {
    const newInput = { id: inputs.length + 1, type: "input" }
    dispatch(addInput(newInput))
  }

  console.log(inputs)

  return (
    <div>
      {inputs.map((item: any) => (
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
          <div className={styles.trash}>
            <img src={Trash} alt="delete-icon" />
          </div>
        </div>
      ))}

      <div>
        <Button type="button" handleClick={handleAddInput} />
      </div>
    </div>
  )
}
