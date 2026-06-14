import { TestBed } from '@angular/core/testing';

import { OfertasServicio } from './ofertas-servicio';

describe('OfertasServicio', () => {
  let service: OfertasServicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfertasServicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
