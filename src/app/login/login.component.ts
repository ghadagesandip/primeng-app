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
import moment, { now } from 'moment';
import momentTz from 'moment-timezone';

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

  ngOnInit() {
    console.log('ngOnInit called');
    const zone = 'America/New_York';
    const format = 'MM/DD/YYYY H:m A';

    const mDate = momentTz.tz(new Date(), zone);
    const mstr = mDate.format(format);
    console.log('m date string', mstr);
    const dateObj = new Date(mstr);
    console.log('date obj', dateObj);

    // authgear
    //   .configure({
    //     // custom domain endpoint or default endpoint
    //     // default domain should be something like: https://<yourapp>.authgearapps.com
    //     endpoint: 'https://sandiptest.authgearapps.com/',
    //     // Client ID of your application
    //     clientID: '8ab2a64f3e2e5e19',
    //     // sessionType can be "refresh_token" or "cookie", default "refresh_token"
    //     sessionType: 'refresh_token',
    //   })
    //   .then(
    //     (res) => {
    //       console.log('succ', res);
    //       // configure successfully.
    //     },
    //     (err) => {
    //       console.log('failed', err);
    //       // failed to configure.
    //     }
    //   );
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm && this.loginForm.valid) {
      // authgear
      //   .startAuthorization({
      //     // configure redirectURI which users will be redirected to
      //     // after they have authenticated with Authgear
      //     // you can use any path in your website
      //     // make sure it is in the "Redirect URIs" list of the Application
      //     redirectURI: 'http://localhost:4200/dashboard',
      //     prompt: 'login',
      //   })
      //   .then(
      //     (res) => {
      //       console.log('succ 1', res);
      //       // started authorization, user should be redirected to Authgear
      //     },
      //     (err) => {
      //       console.log('err 1', err);

      //       // failed to start authorization
      //     }
      //   );

      this.store.dispatch(
        Login_Request({
          email: this.loginModel.email,
          password: this.loginModel.password,
        })
      );
    }
  }
}
