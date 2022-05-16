import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Editbook1Component } from './editbook1.component';

describe('Editbook1Component', () => {
  let component: Editbook1Component;
  let fixture: ComponentFixture<Editbook1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Editbook1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Editbook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
