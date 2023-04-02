import { TestBed } from '@angular/core/testing';

import { C3TabsService } from './c3-tabs.service';

describe('C3TabsService', () => {
  let service: C3TabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3TabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
