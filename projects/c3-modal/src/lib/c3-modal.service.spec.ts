import { TestBed } from '@angular/core/testing';

import { C3ModalService } from './c3-modal.service';

describe('C3ModalService', () => {
  let service: C3ModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
