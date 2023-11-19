import { NameSpace } from "../consts";
import { Result } from "../types/result";
import { State } from "../types/state";

export const getGenderData = (state: State): Result | null =>
  state[NameSpace.GenderData].result;
