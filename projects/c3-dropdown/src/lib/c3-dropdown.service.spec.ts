import { TestBed } from '@angular/core/testing';

import { C3DropdownService } from './c3-dropdown.service';

describe('C3DropdownService', () => {
  let service: C3DropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3DropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
