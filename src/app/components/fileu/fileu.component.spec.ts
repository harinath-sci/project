import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileuComponent } from './fileu.component';

describe('FileuComponent', () => {
  let component: FileuComponent;
  let fixture: ComponentFixture<FileuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
