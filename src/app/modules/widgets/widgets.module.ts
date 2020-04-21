import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsComponent } from './components/widgets.component';


@NgModule({
  declarations: [WidgetsComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule
  ]
})
export class WidgetsModule { }
