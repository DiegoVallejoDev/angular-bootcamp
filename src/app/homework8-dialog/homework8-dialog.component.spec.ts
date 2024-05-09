import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework8DialogComponent } from './homework8-dialog.component';

describe('Homework8DialogComponent', () => {
  let component: Homework8DialogComponent;
  let fixture: ComponentFixture<Homework8DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework8DialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework8DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
