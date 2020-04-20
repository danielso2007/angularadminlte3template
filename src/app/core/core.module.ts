import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { ErrorPageComponent } from './components/error-page/error-page.component';


@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {}
