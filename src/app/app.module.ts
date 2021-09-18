import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule} from './login/login.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimengDesignModule } from './primeng-design/primeng-design.module';

import { AppComponent } from './app.component'; 
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    PrimengDesignModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }