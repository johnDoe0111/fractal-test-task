import styles from './select.module.css';
import { FC } from 'react';
import { Control, useController } from 'react-hook-form';

interface Props {
  control: Control<any>;
  name: string;
  label: string;
  options: { id: number; value: string }[];
}

export const Select: FC<Props> = ({ label, name, control, options }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className={styles.selectBlock}>
      <label>{label}</label>
      <select value={field.value} onChange={field.onChange}>
        {options.map(item => (
          <option key={item.id} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
      <div>
        <p className='error-message'>
          {field.value === 'Не выбрано' ? error?.message : ''}
        </p>
      </div>
    </div>
  );
};
