import { TestBed } from '@angular/core/testing';

import { ProductMaterialService } from './product-material.service';

describe('ProductMaterialService', () => {
  let service: ProductMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
