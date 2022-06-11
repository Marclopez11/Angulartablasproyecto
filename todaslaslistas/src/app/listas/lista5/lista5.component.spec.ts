import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista5Component } from './lista5.component';

describe('Lista5Component', () => {
  let component: Lista5Component;
  let fixture: ComponentFixture<Lista5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lista5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lista5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
