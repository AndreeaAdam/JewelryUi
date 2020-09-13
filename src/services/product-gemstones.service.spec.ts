import { TestBed } from '@angular/core/testing';

import { ProductGemstonesService } from './product-gemstones.service';

describe('ProductGemstonesService', () => {
  let service: ProductGemstonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductGemstonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
