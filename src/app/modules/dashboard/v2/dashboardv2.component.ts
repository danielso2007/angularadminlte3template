import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardv2',
  templateUrl: './dashboardv2.component.html',
  styleUrls: ['./dashboardv2.component.css']
})
export class Dashboardv2Component implements OnInit {

  constructor(
    private title: Title,
    private router: Router) { }

  ngOnInit(): void {
    this.title.setTitle('Dashboard V2');
  }

}
