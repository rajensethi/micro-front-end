import { TestBed } from '@angular/core/testing';

import { MasterlibService } from './masterlib.service';

describe('MasterlibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterlibService = TestBed.get(MasterlibService);
    expect(service).toBeTruthy();
  });
});
