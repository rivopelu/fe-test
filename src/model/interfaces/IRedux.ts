import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

export type BasePayload<T> = PayloadAction<IBasePayload<T>>;

interface IBasePayload<T> {
  data?: T;
  loading?: boolean;
  isNotFound?: boolean;
  errorMessage?: string;
}

export interface IPayloadData<T> {
  data?: T;
  loading?: boolean;
  isNotFound?: boolean;
}

export type BaseResponse<T> = AxiosResponse<T>;
