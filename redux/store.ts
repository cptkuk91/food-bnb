import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    authReducer,
  },
  // redux-devtools 사용을 위한 개발환경용 코드
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useAppSelector 사용하는 이유는 useSelector만 사용할 경우, type에러를 발생시키기 때문이다.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// 참고 사이트
// https://codevoweb.com/setup-redux-toolkit-in-nextjs-13-app-directory/
