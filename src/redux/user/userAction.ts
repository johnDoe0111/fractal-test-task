import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserBase, IUserInfo, UserFull } from "models/IUser";

export const createUser = createAsyncThunk(
  "userBase",
  async (userBase: UserFull, thunkAPI) => {
    try {
      return userBase;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "userBase error",
      });
    }
  }
);
