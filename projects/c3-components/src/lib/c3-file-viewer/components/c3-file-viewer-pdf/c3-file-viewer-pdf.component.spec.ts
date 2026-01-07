import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { C3FileViewerPdfComponent } from './c3-file-viewer-pdf.component';
import { C3FileViewer } from '../../models/file-viewer';
import { C3FileViewerModule } from '../../c3-file-viewer.module';

describe('C3FileViewerPdfComponent', () => {
  let component: C3FileViewerPdfComponent;
  let fixture: ComponentFixture<C3FileViewerPdfComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let mockFileViewer: C3FileViewer;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(new Blob(['test'])));

    mockFileViewer = new C3FileViewer({ client: httpClientSpy as HttpClient });
    mockFileViewer.files = [
      {
        name: 'document.pdf',
        type: 'application/pdf',
        location: 'https://example.com/document.pdf',
      },
    ];

    await TestBed.configureTestingModule({
      imports: [C3FileViewerModule],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerPdfComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have c3-file-viewer-pdf class on host', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('c3-file-viewer-pdf')).toBe(true);
  });

  it('should accept fileViewer input', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(component.fileViewer()).toBe(mockFileViewer);
  });

  it('should have dragstart output', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(component.dragstart).toBeDefined();
  });

  it('should emit dragstart event', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    const emitSpy = spyOn(component.dragstart, 'emit');
    const mockDragEvent = new DragEvent('dragstart');

    component.dragstart.emit(mockDragEvent);

    expect(emitSpy).toHaveBeenCalledWith(mockDragEvent);
  });
});
