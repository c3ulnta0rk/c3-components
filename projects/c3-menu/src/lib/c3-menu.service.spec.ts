import { TestBed } from '@angular/core/testing';

import { C3MenuService } from './c3-menu.service';

describe('C3MenuService', () => {
  let service: C3MenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3MenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
