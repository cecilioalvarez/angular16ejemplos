import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lista1PersonasComponent } from './lista1-personas.component';

describe('Lista1PersonasComponent', () => {
  let component: Lista1PersonasComponent;
  let fixture: ComponentFixture<Lista1PersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lista1PersonasComponent]
    });
    fixture = TestBed.createComponent(Lista1PersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
