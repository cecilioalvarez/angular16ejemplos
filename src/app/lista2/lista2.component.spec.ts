import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista2Component } from './lista2.component';

describe('Lista2Component', () => {
  let component: Lista2Component;
  let fixture: ComponentFixture<Lista2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lista2Component]
    });
    fixture = TestBed.createComponent(Lista2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
