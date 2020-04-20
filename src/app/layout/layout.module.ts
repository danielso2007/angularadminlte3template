import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [ContentComponent, NavbarComponent, SidebarComponent, BreadcrumbComponent, FooterComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgScrollbarModule
  ],
  exports: [
    ContentComponent,
    BreadcrumbComponent
  ]
})
export class LayoutModule {}
