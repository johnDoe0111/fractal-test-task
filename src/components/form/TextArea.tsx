import styles from './textArea.module.css';
import { textAreaProps } from 'consts';
import React, { FC, useState } from 'react';
import { Control, useController } from 'react-hook-form';

interface Props {
  control: Control<any>;
  name: string;
}

export const TextArea: FC<Props> = ({ control, name }) => {
  const [charCount, setCharCount] = useState(0);
  const maxCharCount = 200;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    setCharCount(inputValue.length);
    field.onChange(event);
  };

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div className={styles.textAreaWrapper}>
      {textAreaProps.map(item => (
        <div key={item.id}>
          <label className={styles.label}>{item.label}</label>
          <textarea
            className={styles.textArea}
            placeholder={item.placeholder}
            {...field}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <div>
        <p className='error-message'>{error?.message}</p>
        <p>
          {charCount}/{maxCharCount}
        </p>
      </div>
    </div>
  );
};
