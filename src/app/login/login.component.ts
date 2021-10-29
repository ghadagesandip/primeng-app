import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { select, Store } from '@ngrx/store';
import { Login_Error, Login_Request, Login_Success } from "../store/app.actions";
import { getLoginResponse } from "../store/app.selector";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

export interface ILogin {
    username:string;
    password:string;
  } 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent  implements OnInit {

    @ViewChild('loginForm')
    loginForm!: NgForm;
    
    submitted:boolean = false;
    isloading: boolean = false;
    loginModel:ILogin;
    loggedInUser: any;
    loginStatus$: Observable<any>;

    constructor(
        private store: Store<{isloading: boolean, user: null| object, loginRequestStatus: '' }>,
        private router: Router
    ){
       this.loginModel = {
           username: '',
           password: ''
       }

       this.loginStatus$ = this.store.pipe(select(getLoginResponse));
       this.loginStatus$.subscribe(resp =>{
           console.log('resp', resp)
           if(resp.loggedIn){
               this.router.navigate(['dashboard'])
           }
       })
    }

    ngOnInit() {
        
    }


    onSubmit(){
        this.submitted = true;
        if(this.loginForm && this.loginForm.valid ){
            this.store.dispatch(Login_Request({username: this.loginModel.username, password: this.loginModel.password }))
           
                if(this.loginModel.username == 'sandip' && this.loginModel.password == 'sandip'){
                    this.store.dispatch(Login_Success())
                    this.isloading = false;
                }
                else{
                    this.store.dispatch(Login_Error())
                    this.isloading = false;
                } 
            
        }
      
    }
}