import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { C3FileViewerDialog } from './c3-file-viewer-dialog';
import { C3FileViewer } from '../../../models/file-viewer';
import { C3FileViewerModule } from '../../../c3-file-viewer.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BehaviorSubject } from 'rxjs';

describe('C3FileViewerDialog', () => {
  let component: C3FileViewerDialog;
  let fixture: ComponentFixture<C3FileViewerDialog>;
  let mockFileViewer: C3FileViewer;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<C3FileViewerDialog>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    const mockFiles = [
      {
        name: 'test.jpg',
        type: 'image/jpeg',
        location: 'https://example.com/test.jpg',
      },
    ];
    mockFileViewer = {
      files: mockFiles,
      filesObjectUrl: mockFiles,
      zoom: 1,
      rotation: 0,
      currentIndex: 0,
      config: {},
      customFile$: new BehaviorSubject<any>(null),
      index$: new BehaviorSubject<number>(0),
      config$: new BehaviorSubject<any>({}),
      get currentFile() {
        return (this as any).filesObjectUrl[(this as any).currentIndex];
      },
    } as unknown as C3FileViewer;

    await TestBed.configureTestingModule({
      declarations: [C3FileViewerDialog],
      imports: [C3FileViewerModule, MatDialogModule, HttpClientTestingModule, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockFileViewer },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject fileViewer from MAT_DIALOG_DATA', () => {
    expect(component.fileViewer).toBe(mockFileViewer);
  });
});
