import { TestBed, async, inject } from '@angular/core/testing';

import { AuthoGuard } from './autho.guard';

describe('AuthoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthoGuard]
    });
  });

  it('should ...', inject([AuthoGuard], (guard: AuthoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
