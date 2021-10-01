import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PrimengDesignModule } from '../../primeng-design/primeng-design.module';
import { Widget4Component } from './widget4/widget4.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Widget4Component
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengDesignModule
  ]
})
export class DashboardModule { }
