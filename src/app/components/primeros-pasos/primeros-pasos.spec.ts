import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerosPasos } from './primeros-pasos';

describe('PrimerosPasos', () => {
  let component: PrimerosPasos;
  let fixture: ComponentFixture<PrimerosPasos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimerosPasos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimerosPasos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
