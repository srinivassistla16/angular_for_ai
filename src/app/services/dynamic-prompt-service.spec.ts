import { TestBed } from '@angular/core/testing';

import { DynamicPromptService } from './dynamic-prompt-service';

describe('DynamicPromptService', () => {
  let service: DynamicPromptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicPromptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
