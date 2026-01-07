import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { C3FileViewerDialogComponent } from './c3-file-viewer-dialog.component';
import { C3FileViewer } from '../../../models/file-viewer';

describe('C3FileViewerDialogComponent', () => {
  let component: C3FileViewerDialogComponent;
  let fixture: ComponentFixture<C3FileViewerDialogComponent>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let mockFileViewer: C3FileViewer;

  beforeEach(async () => {
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    matDialogSpy.open.and.returnValue({} as MatDialogRef<any>);

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(new Blob(['test'])));

    mockFileViewer = new C3FileViewer({ client: httpClientSpy as HttpClient });

    await TestBed.configureTestingModule({
      declarations: [C3FileViewerDialogComponent],
      providers: [{ provide: MatDialog, useValue: matDialogSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerDialogComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have c3-file-viewer-dialog class on host', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(fixture.nativeElement.classList.contains('c3-file-viewer-dialog')).toBe(true);
  });

  it('should accept fileViewer input', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(component.fileViewer()).toBe(mockFileViewer);
  });

  it('should have default dialogConfig', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    expect(component.dialogConfig()).toEqual({
      panelClass: 'c3-file-viewer-dialog',
      width: '80%',
      height: '80%',
    });
  });

  it('should accept custom dialogConfig', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.componentRef.setInput('dialogConfig', {
      panelClass: 'custom-dialog',
      width: '100%',
      height: '100%',
    });
    fixture.detectChanges();

    expect(component.dialogConfig()).toEqual({
      panelClass: 'custom-dialog',
      width: '100%',
      height: '100%',
    });
  });

  it('should open dialog on click', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    component.openDialog();

    expect(matDialogSpy.open).toHaveBeenCalled();
  });

  it('should pass fileViewer as data to dialog', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.detectChanges();

    component.openDialog();

    expect(matDialogSpy.open).toHaveBeenCalledWith(
      jasmine.any(Function),
      jasmine.objectContaining({
        data: mockFileViewer,
      })
    );
  });

  it('should merge dialogConfig with defaults', () => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.componentRef.setInput('dialogConfig', { width: '90%' });
    fixture.detectChanges();

    component.openDialog();

    expect(matDialogSpy.open).toHaveBeenCalledWith(
      jasmine.any(Function),
      jasmine.objectContaining({
        width: '90%',
      })
    );
  });
});
