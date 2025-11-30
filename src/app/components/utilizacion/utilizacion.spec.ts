import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Utilizacion } from './utilizacion';

describe('Utilizacion', () => {
  let component: Utilizacion;
  let fixture: ComponentFixture<Utilizacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Utilizacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Utilizacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
