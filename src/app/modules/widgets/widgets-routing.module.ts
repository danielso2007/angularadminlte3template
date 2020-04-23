import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './components/widgets.component';
import { ContentComponent } from 'src/app/layout/content/content.component';
import { AuthGuard } from 'src/app/core/security/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'widgets', pathMatch: 'full' },
  {
    path: '', component: ContentComponent, canActivate: [ AuthGuard ], canActivateChild: [ AuthGuard ],
    children: [
      { path: 'widgets', component: WidgetsComponent, data: { title: 'Widgets', items: [{ title: 'Widgets', link: undefined, isActive: true, isHome: false }]}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WidgetsRoutingModule { }
