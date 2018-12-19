import { TestBed, inject } from '@angular/core/testing';

import { NavjreadService } from './navjread.service';

describe('NavjreadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavjreadService]
    });
  });

  it('should be created', inject([NavjreadService], (service: NavjreadService) => {
    expect(service).toBeTruthy();
  }));
});
