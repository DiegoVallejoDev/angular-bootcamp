import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework9SlugComponent } from './homework9-slug.component';

describe('Homework9SlugComponent', () => {
  let component: Homework9SlugComponent;
  let fixture: ComponentFixture<Homework9SlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework9SlugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework9SlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
