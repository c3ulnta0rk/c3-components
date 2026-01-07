import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync, flush } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, BehaviorSubject } from 'rxjs';
import { C3FileViewerComponent } from './c3-file-viewer.component';
import { C3FileViewer } from '../../../models/file-viewer';
import { CustomFileEvent } from '../../../models/custom-file-event.model';
import { C3FileViewerModule } from '../../../c3-file-viewer.module';

describe('C3FileViewerComponent', () => {
  let component: C3FileViewerComponent;
  let fixture: ComponentFixture<C3FileViewerComponent>;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let mockFileViewer: C3FileViewer;
  let cdr: ChangeDetectorRef;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(new Blob(['test'])));

    mockFileViewer = new C3FileViewer({ client: httpClientSpy as HttpClient });
    mockFileViewer.files = [
      {
        name: 'test.jpg',
        type: 'image/jpeg',
        location: 'https://example.com/test.jpg',
      },
    ];

    await TestBed.configureTestingModule({
      imports: [C3FileViewerModule],
      providers: [
        { provide: HttpClient, useValue: httpClientSpy },
        { provide: 'config', useValue: null },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileViewerComponent);
    component = fixture.componentInstance;
    cdr = fixture.componentRef.injector.get(ChangeDetectorRef);
  });

  it('should create', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();
    expect(component).toBeTruthy();
  }));

  it('should have c3-file-viewer class on host', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();

    expect(fixture.nativeElement.classList.contains('c3-file-viewer')).toBe(true);
  }));

  it('should accept fileViewer input', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();

    expect(component.fileViewer()).toBe(mockFileViewer);
  }));

  it('should have default screenHeightOccupied of 0', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();

    expect(component.screenHeightOccupied()).toBe(0);
  }));

  it('should accept screenHeightOccupied input', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.componentRef.setInput('screenHeightOccupied', 100);
    cdr.detectChanges();
    tick();
    flush();

    expect(component.screenHeightOccupied()).toBe(100);
  }));

  it('should set hovered to true on mouse over', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();

    component.onMouseOver();

    expect(mockFileViewer.hovered).toBe(true);
  }));

  it('should set hovered to false on mouse leave', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();
    mockFileViewer.hovered = true;

    component.onMouseLeave();

    expect(mockFileViewer.hovered).toBe(false);
  }));

  it('should call nextImage on ArrowRight key', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();

    const nextSpy = spyOn(mockFileViewer, 'nextImage');
    const event = new KeyboardEvent('keyup', { key: 'ArrowRight' });

    component.next(event);

    expect(nextSpy).toHaveBeenCalledWith(event);
  }));

  it('should call previousImage on ArrowLeft key', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    cdr.detectChanges();
    tick();
    flush();

    const previousSpy = spyOn(mockFileViewer, 'previousImage');
    const event = new KeyboardEvent('keyup', { key: 'ArrowLeft' });

    component.previous(event);

    expect(previousSpy).toHaveBeenCalledWith(event);
  }));

  it('should define style height on init', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    fixture.componentRef.setInput('screenHeightOccupied', 50);
    // Don't call detectChanges yet to avoid ExpressionChangedAfterItHasBeenCheckedError
    // ngOnInit will be called automatically
    fixture.detectChanges(false);
    tick();
    flush();
    TestBed.flushEffects();
    tick();
    // Now do a proper change detection
    fixture.detectChanges();

    expect(mockFileViewer.styleHeight).toBe('calc(100% - 50px)');
  }));

  it('should emit indexChange when index changes', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    // Initial change detection without throwing errors
    fixture.detectChanges(false);
    tick();
    flush();
    // Wait for effects to run
    TestBed.flushEffects();
    tick();
    // Now do proper change detection
    fixture.detectChanges();

    let emittedIndex: number | undefined;
    component.indexChange.subscribe((index) => (emittedIndex = index));

    mockFileViewer.index$.next(1);
    TestBed.flushEffects();
    tick();
    fixture.detectChanges(false);
    tick();

    expect(emittedIndex).toBe(1);
  }));

  it('should emit configChange when config changes', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    // Initial change detection without throwing errors
    fixture.detectChanges(false);
    tick();
    flush();
    // Wait for effects to run
    TestBed.flushEffects();
    tick();
    // Now do proper change detection
    fixture.detectChanges();

    let emittedConfig: any;
    component.configChange.subscribe((config) => (emittedConfig = config));

    mockFileViewer.config = { zoomFactor: 0.5 };
    TestBed.flushEffects();
    tick();
    fixture.detectChanges(false);
    tick();

    expect(emittedConfig).toBeDefined();
  }));

  it('should emit customFileEvent', fakeAsync(() => {
    fixture.componentRef.setInput('fileViewer', mockFileViewer);
    // Initial change detection without throwing errors
    fixture.detectChanges(false);
    tick();
    flush();
    // Wait for effects to run
    TestBed.flushEffects();
    tick();
    // Now do proper change detection
    fixture.detectChanges();

    let emittedEvent: CustomFileEvent | undefined;
    component.customFileEvent.subscribe((event) => (emittedEvent = event));

    const customEvent = new CustomFileEvent('imageNotFound', 'test.jpg');
    mockFileViewer.customFile$.next(customEvent);
    TestBed.flushEffects();
    tick();
    fixture.detectChanges(false);
    tick();

    expect(emittedEvent).toBe(customEvent);
  }));
});
