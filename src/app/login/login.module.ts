import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import  { PrimengDesignModule } from '../primeng-design/primeng-design.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    PrimengDesignModule
  ]
})
export class LoginModule { }
