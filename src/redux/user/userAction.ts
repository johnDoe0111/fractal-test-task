import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserAbout, IUserAdvantages, IUserBase, IUserInfo } from "models/IUser";

export const getUserBase = createAsyncThunk(
  "userBase",
  async (userBase: IUserBase, thunkAPI) => {
    try {
      return userBase;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "userBase error",
      });
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "userInfo",
  async (userInfo: IUserInfo, thunkAPI) => {
    try {
      return userInfo;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "userInfo error",
      });
    }
  }
);

export const getUserAdvantages = createAsyncThunk(
  "userAdvantages",
  async (userAdvantaes: IUserAdvantages, thunkAPI) => {
    try {
      return userAdvantaes;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "userAdvantaes error",
      });
    }
  }
);

export const getUserAbout = createAsyncThunk(
  "userAbout",
  async (userAbout: IUserAbout, thunkAPI) => {
    try {
      return userAbout;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        error: "userAbout error",
      });
    }
  }
);
