import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

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

    @ViewChild('loginForm') loginForm: NgForm | undefined;
    
    isLoading:boolean = false;
    loginModel:ILogin;

    submitted = false;
   
    constructor(){
       this.loginModel = {
           username: '',
           password: ''
       }
    }

    ngOnInit() {
     
    }


    onSubmit(formData: any){
        console.log('this.userModel ', formData.value )
        this.isLoading = true;
    }
}