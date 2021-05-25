import { TestBed } from '@angular/core/testing';

import { WlanService } from './wlan.service';

describe('WlanService', () => {
  let service: WlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
