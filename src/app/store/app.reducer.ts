import { createReducer, on } from '@ngrx/store';
import { Login_Request, Login_Success, Login_Error } from './app.actions';

interface ILoginState {
  loggedIn: boolean;
  userData: object | null;
  token: string;
}

export const initialState: ILoginState = {
  loggedIn: false,
  userData: null,
  token: '',
};

const _appReducer = createReducer(
  initialState,
  on(Login_Request, (state, action) => {
    console.log('login action Login_Request', action);
    return { ...initialState, loginRequestStatus: 'pending' };
  }),
  on(Login_Success, (state, user: any) => {
    console.log('login action succes', user);
    return {
      ...state,
      loggedIn: true,
      userData: user.userData,
      token: user.token,
    };
  }),
  on(Login_Error, (state, err) => {
    console.log('login action failed', err);
    return { ...initialState, loginRequestStatus: 'failed', err: err };
  })
);

export function AppReducer(state: any, action: any) {
  return _appReducer(state, action);
}
