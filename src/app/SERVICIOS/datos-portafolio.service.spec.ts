import { TestBed } from '@angular/core/testing';

import { DatosPortafolioService } from './datos-portafolio.service';

describe('DatosPortafolioService', () => {
  let service: DatosPortafolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosPortafolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
