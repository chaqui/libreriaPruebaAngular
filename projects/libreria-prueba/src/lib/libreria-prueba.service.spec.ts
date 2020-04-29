import { TestBed } from '@angular/core/testing';

import { LibreriaPruebaService } from './libreria-prueba.service';

describe('LibreriaPruebaService', () => {
  let service: LibreriaPruebaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaPruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
