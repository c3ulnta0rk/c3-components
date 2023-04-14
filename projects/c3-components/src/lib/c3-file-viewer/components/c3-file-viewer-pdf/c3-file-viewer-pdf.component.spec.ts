import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerPdfComponent } from './c3-file-viewer-pdf.component';

describe('C3FileViewerPdfComponent', () => {
  let component: C3FileViewerPdfComponent;
  let fixture: ComponentFixture<C3FileViewerPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileViewerPdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileViewerPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
