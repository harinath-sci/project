import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Books1Component } from './books1.component';

describe('Books1Component', () => {
  let component: Books1Component;
  let fixture: ComponentFixture<Books1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Books1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Books1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
