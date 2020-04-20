import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
  <div class="wrapper">
    <app-navbar></app-navbar>
    <app-sidebar></app-sidebar>
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <router-outlet></router-outlet>
        </div>
      </section>
    </div>
    <app-footer></app-footer>
  </div>
  `,
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
