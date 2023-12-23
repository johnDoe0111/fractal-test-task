import { addInput, deleteInput } from "./inputSlice";

export const addInputAction = (input: { id: string; type: string }) => {
  return addInput(input);
};

export const deleteInputAction = (inputId: string) => {
  return deleteInput(inputId);
};
