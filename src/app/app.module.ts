import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule} from './login/login.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PrimengDesignModule } from './primeng-design/primeng-design.module';

import { AppComponent } from './app.component'; 


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
    StoreDevtoolsModule.instrument({
      name: 'NgRx App',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
