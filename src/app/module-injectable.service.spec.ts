import { TestBed } from '@angular/core/testing';

import { ModuleInjectableService } from './module-injectable.service';

describe('ModuleInjectableService', () => {
  let service: ModuleInjectableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleInjectableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
