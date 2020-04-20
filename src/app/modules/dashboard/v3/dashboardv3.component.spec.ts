import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv3Component } from './dashboardv3.component';

describe('Dashboardv3Component', () => {
  let component: Dashboardv3Component;
  let fixture: ComponentFixture<Dashboardv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
