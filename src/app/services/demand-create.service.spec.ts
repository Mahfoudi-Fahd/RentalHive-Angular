import { TestBed } from '@angular/core/testing';

import { DemandCreateService } from './demand-create.service';

describe('DemandCreateService', () => {
  let service: DemandCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
