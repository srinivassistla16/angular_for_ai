import { TestBed } from '@angular/core/testing';

import { StructuredOutputService } from './structured-output-service';

describe('StructuredOutputService', () => {
  let service: StructuredOutputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StructuredOutputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
