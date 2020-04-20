import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashboardv1Component } from './dashboardv1.component';

describe('Dashboardv1Component', () => {
  let component: Dashboardv1Component;
  let fixture: ComponentFixture<Dashboardv1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboardv1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboardv1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
