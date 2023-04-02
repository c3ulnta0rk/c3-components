import { TestBed } from '@angular/core/testing';

import { C3FileService } from './c3-file.service';

describe('C3FileService', () => {
  let service: C3FileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3FileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
