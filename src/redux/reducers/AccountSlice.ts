import { createSlice } from '@reduxjs/toolkit';
import { IResLogin } from '../../model/response/IResLogin.ts';
import { BasePayload, IPayloadData } from '../../model/interfaces/IRedux.ts';

const initState: IAccountSlice = {};
export const AccountSlice = createSlice({
  name: 'account',
  initialState: initState,
  reducers: {
    login: (state: IAccountSlice, actions: BasePayload<IResLogin>) => {
      state.login = actions.payload;
    },
  },
});

export interface IAccountSlice {
  login?: IPayloadData<IResLogin>;
}
