import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { Dashboardv1Component } from './v1/dashboardv1.component';
import { Dashboardv2Component } from './v2/dashboardv2.component';
import { Dashboardv3Component } from './v3/dashboardv3.component';


@NgModule({
  declarations: [Dashboardv1Component, Dashboardv2Component, Dashboardv3Component],
  imports: [
    CommonModule,
    LayoutModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
