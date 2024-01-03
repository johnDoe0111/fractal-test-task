import { createUser } from './userAction';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserFull } from 'models/IUser';

interface UserState {
  user: UserFull;
  isLoading: boolean;
  error: any;
}

const initialState: UserState = {
  user: {} as UserFull,
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createUser.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      createUser.fulfilled,
      (state, action: PayloadAction<any>) => {
        state.error = action.payload;
        state.isLoading = false;
      }
    );
  },
});

export default userSlice.reducer;
