import { TestBed } from '@angular/core/testing';

import { MaintserviceService } from './maintservice.service';

describe('MaintserviceService', () => {
  let service: MaintserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
