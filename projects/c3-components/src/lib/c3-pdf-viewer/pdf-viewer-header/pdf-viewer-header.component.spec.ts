import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfViewerHeaderComponent } from './pdf-viewer-header.component';

describe('PdfViewerHeaderComponent', () => {
  let component: PdfViewerHeaderComponent;
  let fixture: ComponentFixture<PdfViewerHeaderComponent>;

  const mockPdfViewer = {
    currentPageNumber: 1,
    pagesCount: 10,
  } as any;

  const mockPdfDocument = {
    numPages: 10,
  } as any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfViewerHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfViewerHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('pdfViewer', mockPdfViewer);
    fixture.componentRef.setInput('pdfDocument', mockPdfDocument);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should accept pdfViewer input', () => {
    fixture.componentRef.setInput('pdfViewer', mockPdfViewer);
    fixture.componentRef.setInput('pdfDocument', mockPdfDocument);
    fixture.detectChanges();

    expect(component.pdfViewer()).toBe(mockPdfViewer);
  });

  it('should accept pdfDocument input', () => {
    fixture.componentRef.setInput('pdfViewer', mockPdfViewer);
    fixture.componentRef.setInput('pdfDocument', mockPdfDocument);
    fixture.detectChanges();

    expect(component.pdfDocument()).toBe(mockPdfDocument);
  });
});




