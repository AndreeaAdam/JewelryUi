import { TestBed } from '@angular/core/testing';

import { GendersService } from './genders.service';

describe('GenderService', () => {
  let service: GendersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GendersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
