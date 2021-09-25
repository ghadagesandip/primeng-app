import { createReducer, on } from '@ngrx/store';
import { Login_Request, Login_Success, Login_Error } from './login.actions';

interface ILoginState {
    loggedIn: boolean;
    user: object | null;
    loginRequestStatus: string;
}

export const initialState: ILoginState = {
    loggedIn: false, 
    user: null,
    loginRequestStatus: ''
};
 
const _loginReducer = createReducer(
  initialState,
  on(Login_Request, (state, action) => {
    console.log('logi action called', action)
    return {...initialState, loginRequestStatus: 'pending'}
  }, ),
  on(Login_Success, (state) => ({...state,  loggedIn: true, user: {username: 'snadip'}, loginRequestStatus: 'success'})),
  on(Login_Error, (state) => ({...initialState, loginRequestStatus: 'failed'}))
);
 
export function loginReducer(state: ILoginState, action: any) {
  return _loginReducer(state, action);
}