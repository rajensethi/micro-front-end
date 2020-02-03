import { TestBed } from '@angular/core/testing';

import { DonationslibService } from './donationslib.service';

describe('DonationslibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonationslibService = TestBed.get(DonationslibService);
    expect(service).toBeTruthy();
  });
});
