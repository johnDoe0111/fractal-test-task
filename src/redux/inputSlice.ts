import { initialInputs } from "../consts";
import { createSlice } from "@reduxjs/toolkit";

const inputsSlice = createSlice({
  name: "inputs",
  initialState: initialInputs,
  reducers: {
    addInput: (state, action) => {
      const newInput = { id: action.payload.id, type: action.payload.type };
      state.push(newInput);
    },
    deleteInput: (state, action) => {
      const inputIdToRemove = action.payload;
      return state.filter((input) => input.id !== inputIdToRemove);
    },
  },
});

export const { addInput, deleteInput } = inputsSlice.actions;
export default inputsSlice.reducer;
