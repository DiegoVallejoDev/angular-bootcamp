import { TestBed } from '@angular/core/testing';

import { RootInjectableService } from './root-injectable.service';

describe('RootInjectableService', () => {
  let service: RootInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RootInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
