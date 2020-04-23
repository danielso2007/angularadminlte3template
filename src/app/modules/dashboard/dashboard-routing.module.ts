import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'src/app/layout/content/content.component';
import { Dashboardv1Component } from './v1/dashboardv1.component';
import { Dashboardv2Component } from './v2/dashboardv2.component';
import { Dashboardv3Component } from './v3/dashboardv3.component';
import { AuthGuard } from 'src/app/core/security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'v1', pathMatch: 'full' },
  {
    path: '', component: ContentComponent, canActivate: [ AuthGuard ], canActivateChild: [ AuthGuard ],
    children: [
      { path: 'v1', component: Dashboardv1Component, data: {title: 'Dashboard', items: [{title: 'Dashboard v1', link: undefined, isActive: true, isHome: false}]} },
      { path: 'v2', component: Dashboardv2Component, data: {title: 'Dashboard v2', items: [{title: 'Dashboard v2', link: undefined, isActive: true, isHome: false}]}  },
      { path: 'v3', component: Dashboardv3Component, data: {title: 'Dashboard v3', items: [{title: 'Dashboard v3', link: undefined, isActive: true, isHome: false}]}  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
