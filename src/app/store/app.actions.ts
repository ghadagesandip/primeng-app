import { createAction, props } from '@ngrx/store';

export const Login_Request = createAction(
  '[User] Login Request',
  props<{ email: string; password: string }>()
);
export const Login_Success = createAction(
  '[User] Login Success',
  props<{ user: any }>()
);
export const Login_Error = createAction(
  '[User] Login Error',
  props<{ user: any }>()
);
