import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  login(user: any) {
    return this.http.post(`${environment.appUrl}auth/login`, user)
    .pipe(
      tap((res: any) => {
     
    })
   );
  }
  
}
