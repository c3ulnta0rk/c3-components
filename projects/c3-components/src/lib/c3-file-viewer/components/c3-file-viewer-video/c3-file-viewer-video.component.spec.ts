import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { C3FileViewerVideoComponent } from './c3-file-viewer-video.component';
import { C3FileViewer } from '../../models/file-viewer';
import { C3FileViewerModule } from '../../c3-file-viewer.module';

describe('C3FileViewerVideoComponent', () => {
  let component: C3FileViewerVideoComponent;
  let fixture: ComponentFixture<C3FileViewerVideoComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let mockFileViewer: C3FileViewer;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(new Blob(['test'])));

    mockFileViewer = new C3FileViewer({ client: httpClientSpy as HttpClient });
    mockFileViewer.files = [
      {
        name: 'test.mp4',
        type: 'video/mp4',
        location: 'https://example.com/test.mp4',
      },
    ];

    await TestBed.configureTestingModule({
      imports: [C3FileViewerModule],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerVideoComponent);
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
