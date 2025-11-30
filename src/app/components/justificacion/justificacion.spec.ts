import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Justificacion } from './justificacion';

describe('Justificacion', () => {
  let component: Justificacion;
  let fixture: ComponentFixture<Justificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Justificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Justificacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
