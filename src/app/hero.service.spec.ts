import { TestBed } from '@angular/core/testing';

import { testModuleConfig } from './test-ng-module-config';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule(testModuleConfig));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
