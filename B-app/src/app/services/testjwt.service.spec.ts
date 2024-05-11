import { TestBed } from '@angular/core/testing';

import { TestjwtService } from './testjwt.service';

describe('TestjwtService', () => {
  let service: TestjwtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestjwtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
