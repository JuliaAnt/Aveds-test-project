import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../consts';
import { genderData } from './gender-data-slice';

export const rootReducer = combineReducers({
  [NameSpace.GenderData]: genderData.reducer,
});