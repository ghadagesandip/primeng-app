import { createAction, props } from '@ngrx/store';

export const Login_Request = createAction(
    '[User] Login Request',
    props<{username: string; password: string}>()
);
export const Login_Success = createAction('[User] Login Success');
export const Login_Error = createAction('[User] Login Error');