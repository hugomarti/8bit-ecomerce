import { ITEMS } from "./8bitsItems";

const INITIAL_STATE = ITEMS;

export const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
