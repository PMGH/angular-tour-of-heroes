import { TestBed } from '@angular/core/testing';

import { testModuleConfig } from './test-ng-module-config';

import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule(testModuleConfig));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });
});
