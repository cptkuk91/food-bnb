import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isAuth: boolean;
  id: number;
  email: string;
};

const initialState = {
  value: {
    isAuth: false,
    id: 0,
    email: '',
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // TODO: 로그아웃 맨 아래 코드 참고
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<AuthState>) => {
      return {
        value: {
          isAuth: true,
          id: action.payload.id,
          email: action.payload.email,
        },
      };
    },
  },
});

export const { logIn, logOut } = auth.actions;

export default auth.reducer;

// 로그아웃의 경우
// const onClickLogOut = () => {
//     dispatchEvent(logOut());
// }
