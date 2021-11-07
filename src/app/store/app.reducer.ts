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
    token:'',
};
 
const _appReducer = createReducer(
  initialState,
  on(Login_Request, (state, action) => {
    console.log('logi action called', action)
    return {...initialState, loginRequestStatus: 'pending'}
  }, ),
  on(Login_Success, (state, user: any) => ({...state,  loggedIn: true, userData: user.userData, token: user.token})),
  on(Login_Error, (state) => ({...initialState, loginRequestStatus: 'failed'}))
);
 
export function AppReducer(state: any, action: any) {
  return _appReducer(state, action);
}