import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user: any) {
    if (user.email == 'sandip@yopmail.com' && user.password == 'sandip123') {
      return of({ userData: user, token: '123token' });
    } else {
      const error: any = new Error(`Invalid crednetials provided`);
      error.status = 401;
      return new Observable((subscriber) => {
        subscriber.error(error);
      });
    }
    return this.http
      .post(`${environment.appUrl}auth/login`, user)
      .pipe(tap((res: any) => {}));
  }
}
