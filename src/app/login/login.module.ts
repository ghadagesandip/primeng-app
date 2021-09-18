import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import  { PrimengDesignModule } from '../primeng-design/primeng-design.module';
import { loginReducer } from './login.reducer';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('login', loginReducer),
    LoginRoutingModule,
    PrimengDesignModule
  ]
})
export class LoginModule { }
