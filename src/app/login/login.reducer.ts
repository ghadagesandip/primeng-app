import { createReducer, on } from '@ngrx/store';
import { Login_Request, Login_Success, Login_Error } from './login.actions';

interface ILoginState {
    loggedIn: boolean;
    user: object | null;
}

export const initialState: ILoginState = {
    loggedIn: false, 
    user: null
};
 
const _loginReducer = createReducer(
  initialState,
  on(Login_Request, (state) => initialState),
  on(Login_Success, (state) => ({...state,  loggedIn: true, user: {username: 'snadip'}})),
  on(Login_Error, (state) => initialState)
);
 
export function loginReducer(state: ILoginState, action: any) {
  return _loginReducer(state, action);
}