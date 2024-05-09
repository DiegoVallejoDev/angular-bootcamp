import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework8Component } from './homework8.component';

describe('Homework8Component', () => {
  let component: Homework8Component;
  let fixture: ComponentFixture<Homework8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
