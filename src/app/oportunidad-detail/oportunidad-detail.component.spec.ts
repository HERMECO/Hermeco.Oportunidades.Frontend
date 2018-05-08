import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadDetailComponent } from './oportunidad-detail.component';

describe('OportunidadDetailComponent', () => {
  let component: OportunidadDetailComponent;
  let fixture: ComponentFixture<OportunidadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OportunidadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
