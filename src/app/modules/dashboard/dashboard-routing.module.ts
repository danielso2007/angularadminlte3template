import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/layout/content/content.component';
import { Dashboardv1Component } from './v1/dashboardv1.component';
import { Dashboardv2Component } from './v2/dashboardv2.component';
import { Dashboardv3Component } from './v3/dashboardv3.component';


const routes: Routes = [
  {
    path: '', component: ContentComponent,
    children: [
      { path: '', component: Dashboardv1Component },
      { path: 'v2', component: Dashboardv2Component },
      { path: 'v3', component: Dashboardv3Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
