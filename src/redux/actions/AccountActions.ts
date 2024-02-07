import BaseActions from '../BaseActions.ts';
import { IReqLogin } from '../../model/request/IReqLogin.ts';
import { ENDPOINT } from '../../constants/endpoint.ts';
import { Dispatch } from 'redux';
import { AccountSlice } from '../reducers/AccountSlice.ts';
import { BaseResponse } from '../../model/interfaces/IRedux.ts';
import { IResLogin } from '../../model/response/IResLogin.ts';

export class AccountActions extends BaseActions {
  private actions = AccountSlice.actions;
  login(data: IReqLogin) {
    return async (dispatch: Dispatch) => {
      dispatch(this.actions.login({ loading: true, data: undefined }));
      await this.httpService
        .POST(ENDPOINT.LOGIN(), data)
        .then((res: BaseResponse<IResLogin>) => {
          dispatch(this.actions.login({ loading: false, data: res.data }));
        })
        .catch((e) => {
          dispatch(this.actions.login({ loading: false, data: undefined }));
          this.errorService.fetchApiError(e);
        });
    };
  }

  register(data: IReqLogin) {
    return async () => {
      return await this.httpService.POST(ENDPOINT.REGISTER(), data);
    };
  }
}
