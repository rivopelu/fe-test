import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers } from './RootReducers.ts';
import { configureStore } from '@reduxjs/toolkit';

const storeRedux = configureStore({
  reducer: combineReducers,
});
export type RootState = ReturnType<typeof storeRedux.getState>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default storeRedux;
