import { TestBed } from '@angular/core/testing';

import { C3HighlightTextService } from './c3-highlight-text.service';

describe('C3HighlightTextService', () => {
  let service: C3HighlightTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3HighlightTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
