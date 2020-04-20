import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardv1',
  templateUrl: './dashboardv1.component.html',
  styleUrls: ['./dashboardv1.component.css']
})
export class Dashboardv1Component implements OnInit {

  constructor(
    private title: Title,
    private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard');
  }

}
