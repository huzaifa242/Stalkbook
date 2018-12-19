import { TestBed, inject } from '@angular/core/testing';

import { LoadprofileService } from './loadprofile.service';

describe('LoadprofileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadprofileService]
    });
  });

  it('should be created', inject([LoadprofileService], (service: LoadprofileService) => {
    expect(service).toBeTruthy();
  }));
});
