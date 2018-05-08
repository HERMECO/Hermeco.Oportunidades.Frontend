import { TestBed, inject } from '@angular/core/testing';

import { OportunidadService } from './oportunidad.service';

describe('OportunidadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OportunidadService]
    });
  });

  it('should be created', inject([OportunidadService], (service: OportunidadService) => {
    expect(service).toBeTruthy();
  }));
});
