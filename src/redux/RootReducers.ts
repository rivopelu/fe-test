import { AccountSlice } from './reducers/AccountSlice.ts';

export const combineReducers = {
  Account: AccountSlice.reducer,
};
