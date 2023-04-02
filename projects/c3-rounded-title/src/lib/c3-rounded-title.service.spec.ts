import { TestBed } from '@angular/core/testing';

import { C3RoundedTitleService } from './c3-rounded-title.service';

describe('C3RoundedTitleService', () => {
  let service: C3RoundedTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3RoundedTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
