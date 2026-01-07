import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { C3FileViewerDefaultComponent } from './c3-file-viewer-default.component';
import { C3FileViewer } from '../../models/file-viewer';

describe('C3FileViewerDefaultComponent', () => {
  let component: C3FileViewerDefaultComponent;
  let fixture: ComponentFixture<C3FileViewerDefaultComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let mockFileViewer: C3FileViewer;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(new Blob(['test'])));

    mockFileViewer = new C3FileViewer({ client: httpClientSpy as HttpClient });
    // Ensure currentFile is defined to avoid metadata errors
    mockFileViewer.files = [
      {
        name: 'test.jpg',
        type: 'image/jpeg',
        location: 'https://example.com/test.jpg',
      },
    ];
    mockFileViewer.filesObjectUrl = [
      {
        name: 'test.jpg',
        type: 'image/jpeg',
        location: 'https://example.com/test.jpg',
      },
    ];

    await TestBed.configureTestingModule({
      declarations: [C3FileViewerDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerDefaultComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should accept fileViewer input', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(component.fileViewer()).toBe(mockFileViewer);
  });
});




