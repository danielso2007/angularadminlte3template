import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { BreadcrumbItem } from './model/breadcrumb-item.model';

@Component({
  selector: 'app-breadcrumb',
  template: `
  <div class="content-header">
  <div class="container-fluid">
    <div class="row mb-2">
      <div class="col-sm-6">
        <h1 class="m-0 text-dark">{{title}}</h1>
      </div>
      <div class="col-sm-6">
        <ol class="breadcrumb float-sm-right">
          <li *ngFor="let item of items; let i = index" class="breadcrumb-item" [ngClass]="{'active': item.isActive}">
              <a *ngIf="item.isHome" [routerLink]="routerLinkHome">{{item.title}}</a>
              <span *ngIf="!item.isHome">{{item.title}}</span>
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input() title: String;
  routerLinkHome:String[] = environment.routerLinkHome;
  items: BreadcrumbItem[] = [{
    title: undefined,
    link: environment.routerLinkHome,
    isActive: false,
    isHome: true
  }];

  constructor(private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.title ? this.title : (this.activatedRoute.snapshot.data.title ? this.activatedRoute.snapshot.data.title : '');
    
    this.items[0].title = this.title;

    if (this.activatedRoute.snapshot.data.items) {
      this.activatedRoute.snapshot.data.items.forEach(element => {
        this.items.push(element)
      });
    }
    //console.log(this.items);
    //console.log(this.activatedRoute.snapshot.data);
  }

}
