import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  public pageTitle = 'Widgets';

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
  }

}
