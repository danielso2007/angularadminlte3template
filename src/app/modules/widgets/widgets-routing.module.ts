import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetsComponent } from './components/widgets.component';
import { ContentComponent } from 'src/app/layout/content/content.component';

const routes: Routes = [
  { path: '', redirectTo: 'widgets', pathMatch: 'full' },
  {
    path: '', component: ContentComponent,
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
