import { TestBed } from '@angular/core/testing';

import { ToolCallingService } from './tool-calling-service';

describe('ToolCallingService', () => {
  let service: ToolCallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolCallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
