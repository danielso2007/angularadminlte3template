import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardv3',
  templateUrl: './dashboardv3.component.html',
  styleUrls: ['./dashboardv3.component.css']
})
export class Dashboardv3Component implements OnInit {

  constructor(
    private title: Title,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard V3');
  }

}
