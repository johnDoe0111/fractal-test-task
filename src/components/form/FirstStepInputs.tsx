import ControlledInput from './ControlledInput';
import { firstStepInputs } from 'consts';
import { FC } from 'react';
import { Control } from 'react-hook-form';

interface Props {
  control: Control<any>;
}

export const FirstStepInputs: FC<Props> = ({ control }) => {
  return (
    <>
      {firstStepInputs.map(item => (
        <ControlledInput
          key={item.id}
          control={control}
          label={item.label}
          name={item.name}
          type={item.type}
          placeholder={item.placeholder}
          bg={item.bg}
        />
      ))}
    </>
  );
};
