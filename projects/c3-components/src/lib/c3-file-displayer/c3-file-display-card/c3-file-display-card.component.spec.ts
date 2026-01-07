import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3FileDisplayCardComponent, C3FileCardSize } from './c3-file-display-card.component';
import { of } from 'rxjs';
import { FileMetadata } from '../../c3-file-viewer/models/file-metadata';

describe('C3FileDisplayCardComponent', () => {
  let component: C3FileDisplayCardComponent;
  let fixture: ComponentFixture<C3FileDisplayCardComponent>;

  const mockFile: FileMetadata & { objectUrl?: any } = {
    name: 'test.jpg',
    type: 'image/jpeg',
    location: 'https://example.com/test.jpg',
    objectUrl: of('blob:https://example.com/12345'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3FileDisplayCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileDisplayCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should accept fileObjectUrl input', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    expect(component.fileObjectUrl()).toEqual(mockFile);
  });

  it('should have default size of 32', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    expect(component.size()).toBe('32');
  });

  it('should accept custom size', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.componentRef.setInput('size', '64' as C3FileCardSize);
    fixture.detectChanges();

    expect(component.size()).toBe('64');
  });

  it('should have deletable default to false', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    expect(component.deletable()).toBe(false);
  });

  it('should accept deletable input', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.componentRef.setInput('deletable', true);
    fixture.detectChanges();

    expect(component.deletable()).toBe(true);
  });

  it('should compute file type as image for image files', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    expect(component.getFileType()).toBe('image');
  });

  it('should compute file type as video for video files', () => {
    const videoFile = { ...mockFile, type: 'video/mp4' };
    fixture.componentRef.setInput('fileObjectUrl', videoFile);
    fixture.detectChanges();

    expect(component.getFileType()).toBe('video');
  });

  it('should compute file type as application for pdf files', () => {
    const pdfFile = { ...mockFile, type: 'application/pdf' };
    fixture.componentRef.setInput('fileObjectUrl', pdfFile);
    fixture.detectChanges();

    expect(component.getFileType()).toBe('application');
  });

  it('should compute file type as unknown for unknown types', () => {
    const unknownFile = { ...mockFile, type: 'text/plain' };
    fixture.componentRef.setInput('fileObjectUrl', unknownFile);
    fixture.detectChanges();

    expect(component.getFileType()).toBe('unknown');
  });

  it('should return objectUrl from getFileObjectUrl', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    expect(component.getFileObjectUrl()).toBe(mockFile.objectUrl);
  });

  it('should return null from getFileObjectUrl when no objectUrl', () => {
    const fileWithoutUrl = { ...mockFile, objectUrl: undefined };
    fixture.componentRef.setInput('fileObjectUrl', fileWithoutUrl);
    fixture.detectChanges();

    expect(component.getFileObjectUrl()).toBeNull();
  });

  it('should return file name from getFileName', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    expect(component.getFileName()).toBe('test.jpg');
  });

  it('should use custom displayFn', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.componentRef.setInput('displayFn', (file: FileMetadata) => `Custom: ${file.name}`);
    fixture.detectChanges();

    expect(component.getDisplayName()).toBe('Custom: test.jpg');
  });

  it('should emit onDelete event', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    const emitSpy = spyOn(component.onDelete, 'emit');
    component.onDelete.emit();

    expect(emitSpy).toHaveBeenCalled();
  });

  it('should emit onDownload event', () => {
    fixture.componentRef.setInput('fileObjectUrl', mockFile);
    fixture.detectChanges();

    const emitSpy = spyOn(component.onDownload, 'emit');
    component.onDownload.emit();

    expect(emitSpy).toHaveBeenCalled();
  });

  it('should handle null fileObjectUrl', () => {
    fixture.componentRef.setInput('fileObjectUrl', null);
    fixture.detectChanges();

    expect(component.getFileName()).toBe('');
    expect(component.getFileObjectUrl()).toBeNull();
  });
});




