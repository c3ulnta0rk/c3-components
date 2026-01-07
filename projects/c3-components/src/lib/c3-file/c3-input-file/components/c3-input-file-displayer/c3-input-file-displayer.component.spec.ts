import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3InputFileDisplayerComponent } from './c3-input-file-displayer.component';
import { C3InputFileComponent } from '../c3-input-file/c3-input-file.component';
import { C3InputFile } from '../../class/c3-input-file';
import { Subject } from 'rxjs';

describe('C3InputFileDisplayerComponent', () => {
  let component: C3InputFileDisplayerComponent;
  let fixture: ComponentFixture<C3InputFileDisplayerComponent>;
  let mockInputFileComponent: jasmine.SpyObj<C3InputFileComponent>;
  let fileAddedSubject: Subject<C3InputFile>;

  beforeEach(async () => {
    fileAddedSubject = new Subject<C3InputFile>();

    mockInputFileComponent = jasmine.createSpyObj('C3InputFileComponent', ['click'], {
      fileAdded: {
        subscribe: (callback: any, error: any, complete: any) => {
          return fileAddedSubject.subscribe(callback, error, complete);
        },
      },
    });

    await TestBed.configureTestingModule({
      declarations: [C3InputFileDisplayerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3InputFileDisplayerComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fileAddedSubject.complete();
  });

  it('should create', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have empty files array initially', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    expect(component.files.length).toBe(0);
  });

  it('should have default autoclose as undefined', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    expect(component.autoclose()).toBeUndefined();
  });

  it('should accept boolean autoclose', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.componentRef.setInput('autoclose', true);
    fixture.detectChanges();

    expect(component.autoclose()).toBe(true);
  });

  it('should accept number autoclose', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.componentRef.setInput('autoclose', 5);
    fixture.detectChanges();

    expect(component.autoclose()).toBe(5);
  });

  it('should start not minimized', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    expect(component.minimized).toBe(false);
  });

  it('should toggle minimized state', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    component.toggleMinimize();
    expect(component.minimized).toBe(true);

    component.toggleMinimize();
    expect(component.minimized).toBe(false);
  });

  it('should close and clear files', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    // Add a mock file
    const mockFile = new C3InputFile({
      fileName: 'test.jpg',
      mimetype: 'image/jpeg',
      size: 1024,
    });
    component.files.push(mockFile);
    expect(component.files.length).toBe(1);

    component.close();

    expect(component.files.length).toBe(0);
  });

  it('should be closable when all files are loaded or aborded', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    const mockFile = new C3InputFile({
      fileName: 'test.jpg',
      mimetype: 'image/jpeg',
      size: 1024,
    });
    mockFile.loaded = true;
    component.files.push(mockFile);

    expect(component.closable).toBe(true);
  });

  it('should not be closable when files are still uploading', () => {
    fixture.componentRef.setInput('c3InputFile', mockInputFileComponent);
    fixture.detectChanges();

    const mockFile = new C3InputFile({
      fileName: 'test.jpg',
      mimetype: 'image/jpeg',
      size: 1024,
    });
    mockFile.loaded = false;
    mockFile.aborded = false;
    component.files.push(mockFile);

    expect(component.closable).toBe(false);
  });
});




