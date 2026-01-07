import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PdfViewerContentComponent } from './pdf-viewer-content.component';

describe('PdfViewerContentComponent', () => {
  let component: PdfViewerContentComponent;
  let fixture: ComponentFixture<PdfViewerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfViewerContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfViewerContentComponent);
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

  it('should have pdfViewer model initialized to null', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();

    expect(component.pdfViewer()).toBeNull();
  });

  it('should have pdfDocument model initialized to null', () => {
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

  it('should have content viewChild', () => {
    fixture.componentRef.setInput('src', 'test.pdf');
    fixture.detectChanges();

    // The content viewChild should be defined
    expect(component.content).toBeDefined();
  });
});




