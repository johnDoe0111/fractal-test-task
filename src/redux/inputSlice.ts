import { createSlice } from '@reduxjs/toolkit';
import { initialInputs } from '../constants';

const inputsSlice = createSlice({
  name: 'inputs',
  initialState: initialInputs,
  reducers: {
    addInput: (state, action) => {
      // Добавь логику для добавления нового инпута
      const newInput = { id: action.payload.id, type: action.payload.type };
      state.push(newInput);
    },
  },
});

export const { addInput } = inputsSlice.actions;
export default inputsSlice.reducer;