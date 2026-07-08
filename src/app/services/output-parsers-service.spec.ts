import { TestBed } from '@angular/core/testing';

import { OutputParsersService } from './output-parsers-service';

describe('OutputParsersService', () => {
  let service: OutputParsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutputParsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
