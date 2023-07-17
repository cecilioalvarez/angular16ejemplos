import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPersonasComponent } from './fila-personas.component';

describe('FilaPersonasComponent', () => {
  let component: FilaPersonasComponent;
  let fixture: ComponentFixture<FilaPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilaPersonasComponent]
    });
    fixture = TestBed.createComponent(FilaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
