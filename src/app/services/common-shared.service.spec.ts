import { TestBed } from '@angular/core/testing';

import { CommonSharedService } from './common-shared.service';

describe('CommonSharedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonSharedService = TestBed.get(CommonSharedService);
    expect(service).toBeTruthy();
  });
});
