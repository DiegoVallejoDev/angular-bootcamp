import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework9Component } from './homework9.component';

describe('Homework9Component', () => {
  let component: Homework9Component;
  let fixture: ComponentFixture<Homework9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
