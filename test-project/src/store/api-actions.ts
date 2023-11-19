import { createAsyncThunk } from "@reduxjs/toolkit";
import { Result } from "../types/result";
import { AppDispatch, State } from "../types/state";
import { AxiosInstance } from "axios";

export const fetchGenderDataAction = createAsyncThunk<
  Result,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>("fetchGenderData", async (enteredName, { extra: api }) => {
  const { data } = await api.get<Result>(`?name=${enteredName}`);
  return data;
});
