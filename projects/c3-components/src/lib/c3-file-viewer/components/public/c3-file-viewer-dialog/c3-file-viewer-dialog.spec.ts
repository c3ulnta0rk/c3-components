import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerDialog } from './c3-file-viewer-dialog';

describe('C3FileViewerDialog', () => {
  let component: C3FileViewerDialog;
  let fixture: ComponentFixture<C3FileViewerDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C3FileViewerDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
