import { addInput } from './inputSlice';

export const addInputAction = (input: { id: string; type: string }) => {
  return addInput(input);
};