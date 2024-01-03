import ControlledInput from './ControlledInput';
import { signUpInputs } from 'consts';
import { FC } from 'react';
import { Control } from 'react-hook-form';

interface Props {
  control: Control<any>;
}

export const SignUpInputs: FC<Props> = ({ control }) => {
  return (
    <>
      {signUpInputs.map(input => (
        <ControlledInput
          control={control}
          key={input.id}
          name={input.name}
          mask={input.mask}
          placeholder={input.placeholder}
          type={input.type}
          label={input.label}
          variant={input.variant}
        />
      ))}
    </>
  );
};
