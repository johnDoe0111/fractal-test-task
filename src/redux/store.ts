import { Action, ThunkAction, configureStore, combineReducers } from "@reduxjs/toolkit"
import inputReducer from './inputSlice'


const rootReducer = combineReducers({
  inputs: inputReducer
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
