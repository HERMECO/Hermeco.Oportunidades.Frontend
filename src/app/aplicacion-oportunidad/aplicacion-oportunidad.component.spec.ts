import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionOportunidadComponent } from './aplicacion-oportunidad.component';

describe('AplicacionOportunidadComponent', () => {
  let component: AplicacionOportunidadComponent;
  let fixture: ComponentFixture<AplicacionOportunidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionOportunidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionOportunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
