import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework9LazyComponent } from './homework9-lazy.component';

describe('Homework9LazyComponent', () => {
  let component: Homework9LazyComponent;
  let fixture: ComponentFixture<Homework9LazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework9LazyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework9LazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
