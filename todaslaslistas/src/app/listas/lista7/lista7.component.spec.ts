import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista7Component } from './lista7.component';

describe('Lista7Component', () => {
  let component: Lista7Component;
  let fixture: ComponentFixture<Lista7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
