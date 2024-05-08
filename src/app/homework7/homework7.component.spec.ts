import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework7Component } from './homework7.component';

describe('Homework7Component', () => {
  let component: Homework7Component;
  let fixture: ComponentFixture<Homework7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
