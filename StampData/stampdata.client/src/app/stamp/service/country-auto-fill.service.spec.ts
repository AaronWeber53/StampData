import { TestBed } from '@angular/core/testing';

import { CountryAutoFillService } from './country-auto-fill.service';

describe('CountryAutoFillService', () => {
  let service: CountryAutoFillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryAutoFillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
