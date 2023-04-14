import { TestBed } from '@angular/core/testing';

import { C3FileViewerService } from './c3-file-viewer.service';

describe('C3FileViewerService', () => {
  let service: C3FileViewerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3FileViewerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
