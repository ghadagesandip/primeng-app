import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../login/login.service';
import { Login_Error, Login_Request, Login_Success } from './app.actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(Login_Request),
      exhaustMap((action) =>
        this.loginService
          .login({ email: action.email, password: action.password })
          .pipe(
            map((user: any) => {
              console.log('user >>', user);
              localStorage.setItem('token', user.token);
              localStorage.setItem('userData', JSON.stringify(user.userData));
              return Login_Success(user);
            }),
            catchError((err) => {
              console.log('error >>', err);
              return of(Login_Error(err));
            })
          )
      )
    )
  );

  constructor(private actions$: Actions, private loginService: LoginService) {}
}
