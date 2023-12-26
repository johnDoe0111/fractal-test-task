import {
  getUserAbout,
  getUserAdvantages,
  getUserBase,
  getUserInfo,
} from "./userAction";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IUserAbout,
  IUserAdvantages,
  IUserBase,
  IUserInfo,
} from "models/IUser";

interface UserState {
  userBase: IUserBase;
  userInfo: IUserInfo;
  userAdvantages: IUserAdvantages;
  userAbout: IUserAbout;
  isLoading: boolean;
  error: string;
}

const initialState: UserState = {
  userBase: {} as IUserBase,
  userInfo: {} as IUserInfo,
  userAdvantages: {} as IUserAdvantages,
  userAbout: {} as IUserAbout,
  isLoading: false,
  error: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserBase.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserBase.fulfilled,
      (state, action: PayloadAction<IUserBase>) => {
        state.isLoading = false;
        state.error = "";
        state.userBase = action.payload;
      }
    );
    builder.addCase(
      getUserBase.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(getUserInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserInfo.fulfilled,
      (state, action: PayloadAction<IUserInfo>) => {
        state.isLoading = false;
        state.error = "";
        state.userInfo = action.payload;
      }
    );
    builder.addCase(
      getUserInfo.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(getUserAdvantages.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserAdvantages.fulfilled,
      (state, action: PayloadAction<IUserAdvantages>) => {
        state.isLoading = false;
        state.error = "";
        state.userAdvantages = action.payload;
      }
    );
    builder.addCase(
      getUserAdvantages.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
    builder.addCase(getUserAbout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getUserAbout.fulfilled,
      (state, action: PayloadAction<IUserAbout>) => {
        state.isLoading = false;
        state.error = "";
        state.userAbout = action.payload;
      }
    );
    builder.addCase(
      getUserAbout.rejected,
      (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export default userSlice.reducer;
