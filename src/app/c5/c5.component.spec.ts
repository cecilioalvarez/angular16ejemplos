import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C5Component } from './c5.component';

describe('C5Component', () => {
  let component: C5Component;
  let fixture: ComponentFixture<C5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [C5Component]
    });
    fixture = TestBed.createComponent(C5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
