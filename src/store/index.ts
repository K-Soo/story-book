import { configureStore, ThunkAction, Action, AnyAction, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { IState } from './rootReducer';
import logger from 'redux-logger';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

const store = () =>
  configureStore({
    reducer: rootReducer as Reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(logger),
    // devTools: process.env.NODE_ENV !== 'production',
    devTools: true,
  });

export type AppStore = ReturnType<typeof store>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

export const useAppSelector: TypedUseSelectorHook<IState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default createWrapper(store, {
  // debug: process.env.NODE_ENV !== 'production',
  debug: true,
});
