import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework6Component } from './homework6.component';

describe('Homework6Component', () => {
  let component: Homework6Component;
  let fixture: ComponentFixture<Homework6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
