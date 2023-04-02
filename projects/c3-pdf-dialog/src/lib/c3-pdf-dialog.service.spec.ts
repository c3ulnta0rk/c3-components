import { TestBed } from '@angular/core/testing';

import { C3PdfDialogService } from './c3-pdf-dialog.service';

describe('C3PdfDialogService', () => {
  let service: C3PdfDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(C3PdfDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
