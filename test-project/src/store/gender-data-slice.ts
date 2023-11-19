import { createSlice } from "@reduxjs/toolkit";
import { Result } from "../types/result";
import { NameSpace } from "../consts";
import { fetchGenderDataAction } from "./api-actions";

type InitialState = {
  result: Result | null;
};

const initialState: InitialState = {
  result: null,
};

export const genderData = createSlice({
  name: NameSpace.GenderData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchGenderDataAction.fulfilled, (state, action) => {
      state.result = action.payload;
    });
  },
});
