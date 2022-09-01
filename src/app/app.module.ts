import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimengDesignModule } from './primeng-design/primeng-design.module';

import { DashboardModule } from './modules/dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { AppReducer } from './store/app.reducer';
import { LoginComponent } from './login/login.component';
import { RoleModule } from './modules/roles/role.module';
import { LoginEffects } from './store/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    PrimengDesignModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({
      name: 'NgRx App',
    }),
    HttpClientModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
