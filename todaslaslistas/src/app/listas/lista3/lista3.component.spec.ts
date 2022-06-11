import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista3Component } from './lista3.component';

describe('Lista3Component', () => {
  let component: Lista3Component;
  let fixture: ComponentFixture<Lista3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
