import { Component, OnInit } from '@angular/core';
import { version } from '../../../../package.json';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="main-footer" style="font-size: 0.7rem;padding: 0.5rem;">
    <strong>Copyright &copy; 2014-2019 <a href="http://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> {{version}}
    </div>
  </footer>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public version: string = version;

  constructor() { }

  ngOnInit(): void {
  }

}
