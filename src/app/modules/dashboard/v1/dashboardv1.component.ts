import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboardv1',
  templateUrl: './dashboardv1.component.html',
  styleUrls: ['./dashboardv1.component.css']
})
export class Dashboardv1Component implements OnInit {

  public pageTitle = 'Dashboard';

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

}
