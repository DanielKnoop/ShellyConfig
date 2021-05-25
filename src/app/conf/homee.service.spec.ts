import { TestBed } from '@angular/core/testing';

import { HomeeService } from './homee.service';

describe('HomeeService', () => {
  let service: HomeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
