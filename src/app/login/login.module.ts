import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login.component';
import  { PrimengDesignModule } from '../primeng-design/primeng-design.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PrimengDesignModule
  ]
})
export class LoginModule { }
