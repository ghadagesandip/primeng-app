import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import {
  Login_Error,
  Login_Request,
  Login_Success,
} from '../store/app.actions';
import { getLoginResponse } from '../store/app.selector';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import authgear from '@authgear/web';

export interface ILogin {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnChanges, DoCheck {
  @ViewChild('loginForm')
  loginForm!: NgForm;

  submitted: boolean = false;
  isloading: boolean = false;
  loginModel: ILogin;
  loggedInUser: any;
  loginStatus$: Observable<any>;

  constructor(
    private store: Store<{
      isloading: boolean;
      user: null | object;
      loginRequestStatus: '';
    }>,
    private router: Router
  ) {
    this.loginModel = {
      email: '',
      password: '',
    };

    this.loginStatus$ = this.store.pipe(select(getLoginResponse));
    this.loginStatus$.subscribe((resp) => {
      if (resp.loggedIn) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
  }

  ngOnInit() {}

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm && this.loginForm.valid) {
      this.store.dispatch(
        Login_Request({
          email: this.loginModel.email,
          password: this.loginModel.password,
        })
      );
    }
  }
}
