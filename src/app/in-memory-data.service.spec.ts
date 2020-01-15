import { TestBed } from '@angular/core/testing';

import { testModuleConfig } from './test-ng-module-config';

import { InMemoryDataService } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule(testModuleConfig));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
