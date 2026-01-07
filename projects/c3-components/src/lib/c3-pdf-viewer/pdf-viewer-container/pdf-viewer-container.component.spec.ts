import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfViewerContainerComponent } from './pdf-viewer-container.component';

describe('PdfViewerContainerComponent', () => {
  let component: PdfViewerContainerComponent;
  let fixture: ComponentFixture<PdfViewerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfViewerContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfViewerContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should accept src input', () => {
    fixture.componentRef.setInput('src', 'https://example.com/document.pdf');
    fixture.detectChanges();

    expect(component.src()).toBe('https://example.com/document.pdf');
  });

  it('should have pdfViewer signal initialized to null', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();

    expect(component.pdfViewer()).toBeNull();
  });

  it('should have pdfDocument signal initialized to null', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();

    expect(component.pdfDocument()).toBeNull();
  });

  it('should allow setting pdfViewer', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();

    const mockViewer = {} as any;
    component.pdfViewer.set(mockViewer);

    expect(component.pdfViewer()).toBe(mockViewer);
  });

  it('should allow setting pdfDocument', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();

    const mockDocument = {} as any;
    component.pdfDocument.set(mockDocument);

    expect(component.pdfDocument()).toBe(mockDocument);
  });
});




