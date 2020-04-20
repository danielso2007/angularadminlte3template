import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
  <div class="wrapper">
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <div class="content-wrapper">
      <app-breadcrumb></app-breadcrumb>
      <section class="content">
        <div class="container-fluid">
          <router-outlet></router-outlet>
        </div>
      </section>
    </div>
    <app-footer></app-footer>
  </div>
  <script>
    $.widget.bridge('uibutton', $.ui.button)
  </script>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
