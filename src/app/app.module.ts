import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimengDesignModule } from './primeng-design/primeng-design.module';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component'; 
import { AppReducer } from './store/app.reducer';
import { LoginComponent } from './login/login.component';
import { RoleModule } from './modules/roles/role.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({app: AppReducer}),
    PrimengDesignModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DashboardModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx App',
    }),
    RoleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
