import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista4Component } from './lista4.component';

describe('Lista4Component', () => {
  let component: Lista4Component;
  let fixture: ComponentFixture<Lista4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
