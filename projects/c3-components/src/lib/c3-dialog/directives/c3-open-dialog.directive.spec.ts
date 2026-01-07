import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3OpenDialogDirective } from './c3-open-dialog.directive';
import { C3DialogService, C3CreateDialogFromComponentResult } from '../services/c3-dialog.service';
import { C3DialogTemplateComponent } from '../components/c3-dialog-template/c3-dialog-template.component';
import { C3DialogModule } from '../c3-dialog.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('C3OpenDialogDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let dialogServiceSpy: jasmine.SpyObj<C3DialogService>;
  let mockDialogResult: C3CreateDialogFromComponentResult<unknown>;

  // Test host component
  @Component({
    template: `<button [c3-dialog]="template" [c3-dialog-config]="config">Open</button>`,
    standalone: false,
  })
  class TestHostComponent {
    template: C3DialogTemplateComponent | undefined;
    config: any;
  }

  beforeEach(async () => {
    mockDialogResult = {
      id: 'test-id',
      disableClose: false,
      close: jasmine.createSpy('close'),
      afterClosed: jasmine.createSpy('afterClosed'),
      afterOpened: jasmine.createSpy('afterOpened'),
      beforeClosed: jasmine.createSpy('beforeClosed'),
      backdropClick: jasmine.createSpy('backdropClick'),
      getState: jasmine.createSpy('getState'),
      keydownEvents: jasmine.createSpy('keydownEvents'),
      updateSize: jasmine.createSpy('updateSize'),
      updatePosition: jasmine.createSpy('updatePosition'),
      addPanelClass: jasmine.createSpy('addPanelClass'),
      removePanelClass: jasmine.createSpy('removePanelClass'),
      afterComponentMounted: jasmine.createSpy('afterComponentMounted'),
    } as any;

    dialogServiceSpy = jasmine.createSpyObj('C3DialogService', [
      'createDialogFromTemplate',
    ]);
    dialogServiceSpy.createDialogFromTemplate.and.returnValue(mockDialogResult);

    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule],
      declarations: [TestHostComponent],
      providers: [{ provide: C3DialogService, useValue: dialogServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
  });

  it('should create an instance', () => {
    fixture.detectChanges();
    const buttonEl = fixture.debugElement.children[0];
    expect(buttonEl).toBeTruthy();
  });

  it('should not open dialog when template is undefined', () => {
    fixture.componentInstance.template = undefined;
    fixture.detectChanges();

    const button = fixture.debugElement.children[0].nativeElement;
    button.click();

    expect(dialogServiceSpy.createDialogFromTemplate).not.toHaveBeenCalled();
  });

  it('should not open dialog when template has no templateRef', () => {
    const mockTemplate = {
      templateRef: signal(null),
      dialogRef: signal(null),
    } as unknown as C3DialogTemplateComponent;

    fixture.componentInstance.template = mockTemplate;
    fixture.detectChanges();

    const button = fixture.debugElement.children[0].nativeElement;
    button.click();

    expect(dialogServiceSpy.createDialogFromTemplate).not.toHaveBeenCalled();
  });

  it('should open dialog when template has templateRef', () => {
    const mockTemplateRef = {} as any;
    const mockTemplate = {
      templateRef: signal(mockTemplateRef),
      dialogRef: { set: jasmine.createSpy('set') },
    } as unknown as C3DialogTemplateComponent;

    fixture.componentInstance.template = mockTemplate;
    fixture.componentInstance.config = { width: '500px' };
    fixture.detectChanges();

    const button = fixture.debugElement.children[0].nativeElement;
    button.click();

    expect(dialogServiceSpy.createDialogFromTemplate).toHaveBeenCalledWith(
      mockTemplateRef,
      { width: '500px' }
    );
    expect(mockTemplate.dialogRef.set).toHaveBeenCalledWith(mockDialogResult);
  });

  it('should pass config to dialog service', () => {
    const mockTemplateRef = {} as any;
    const mockTemplate = {
      templateRef: signal(mockTemplateRef),
      dialogRef: { set: jasmine.createSpy('set') },
    } as unknown as C3DialogTemplateComponent;

    const customConfig = {
      width: '800px',
      height: '600px',
      disableClose: true,
    };

    fixture.componentInstance.template = mockTemplate;
    fixture.componentInstance.config = customConfig;
    fixture.detectChanges();

    const button = fixture.debugElement.children[0].nativeElement;
    button.click();

    expect(dialogServiceSpy.createDialogFromTemplate).toHaveBeenCalledWith(
      mockTemplateRef,
      customConfig
    );
  });
});

