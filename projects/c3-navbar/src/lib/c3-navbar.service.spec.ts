import { TestBed } from '@angular/core/testing';

import { C3NavbarService } from './c3-navbar.service';

describe('C3NavbarService', () => {
  let service: C3NavbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3NavbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
