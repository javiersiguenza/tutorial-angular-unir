import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conclusiones } from './conclusiones';

describe('Conclusiones', () => {
  let component: Conclusiones;
  let fixture: ComponentFixture<Conclusiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conclusiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conclusiones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
