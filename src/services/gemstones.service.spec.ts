import { TestBed } from '@angular/core/testing';

import { GemstonesService } from './gemstones.service';

describe('GemstonesService', () => {
  let service: GemstonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GemstonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
