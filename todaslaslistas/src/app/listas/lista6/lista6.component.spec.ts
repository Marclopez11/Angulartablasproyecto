import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista6Component } from './lista6.component';

describe('Lista6Component', () => {
  let component: Lista6Component;
  let fixture: ComponentFixture<Lista6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
