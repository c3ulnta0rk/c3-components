import { TestBed } from '@angular/core/testing';

import { C3DialogService } from './c3-dialog.service';

describe('C3DialogService', () => {
  let service: C3DialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3DialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
