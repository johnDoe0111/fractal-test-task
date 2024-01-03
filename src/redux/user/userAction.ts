import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserFull } from 'models/IUser';

export const createUser = createAsyncThunk(
  'userBase',
  async (user: UserFull) => {
    try {
      return user;
    } catch (error) {
      return error;
    }
  }
);
