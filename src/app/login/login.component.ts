import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BehaviorSubject } from "rxjs";
import { Store } from '@ngrx/store';
import { Login_Error, Login_Request, Login_Success } from "./login.actions";

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

    constructor(
        private store: Store<{isloading: boolean, user: null| object }>
    ){
       this.loginModel = {
           username: '',
           password: ''
       }
    }

    ngOnInit() {
     
    }


    onSubmit(){
        this.submitted = true;
        if(this.loginForm && this.loginForm.valid ){
            this.store.dispatch(Login_Request())
            console.log('this.userModel ', this.loginForm.value )
           
            setTimeout(()=>{
                if(this.loginModel.username == 'sandip' && this.loginModel.password == 'sandip'){
                    this.store.dispatch(Login_Success())
                    this.isloading = false;
                }
                else{
                    this.store.dispatch(Login_Error())
                    this.isloading = false;
                } 
            }, 2000)
            
        }
      
    }
}