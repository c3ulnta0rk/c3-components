import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';
import { MatDialog, MatDialogRef, MatDialogState } from '@angular/material/dialog';
import { of, Subject } from 'rxjs';
import { Injector, TemplateRef, Component } from '@angular/core';

import { C3DialogService, C3CreateDialogFromComponentConfig } from './c3-dialog.service';
import { ConfirmDialogComponent } from '../components/c3-dialog-confirm.component';
import { C3PromptDialogComponent } from '../components/c3-dialog-prompt.component';
import { C3AlertDialogComponent } from '../components/c3-dialog-alert.component';
import { C3DialogEmbedChildComponent } from '../components/c3-dialog-embed-child.component';
import { C3ConfirmService } from './c3-confirm.service';
import { C3PromptService } from './c3-prompt.service';
import { C3AlertService } from './c3-alert.service';

// Mock component for testing createDialogFromComponent
@Component({
  selector: 'mock-component',
  template: '<div>Mock</div>',
  standalone: true,
})
class MockComponent {
  mockInput?: string;
}

describe('C3DialogService', () => {
  let service: C3DialogService;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<any>>;
  let afterClosedSubject: Subject<any>;

  beforeEach(() => {
    TestBed.resetTestingModule();
    afterClosedSubject = new Subject<any>();

    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', [
      'close',
      'afterClosed',
      'afterOpened',
      'beforeClosed',
      'backdropClick',
      'getState',
      'keydownEvents',
      'updateSize',
      'updatePosition',
      'addPanelClass',
      'removePanelClass',
    ]);
    dialogRefSpy.afterClosed.and.returnValue(afterClosedSubject.asObservable());
    dialogRefSpy.afterOpened.and.returnValue(of(undefined));
    dialogRefSpy.beforeClosed.and.returnValue(of(null));
    dialogRefSpy.backdropClick.and.returnValue(of(new MouseEvent('click')));
    dialogRefSpy.getState.and.returnValue(MatDialogState.OPEN);
    dialogRefSpy.keydownEvents.and.returnValue(of(new KeyboardEvent('keydown')));
    dialogRefSpy.id = 'test-dialog-id';
    dialogRefSpy.disableClose = false;

    // Mock componentInstance for C3DialogEmbedChildComponent
    const mockCreatedComponent = jasmine.createSpy('createdComponent').and.returnValue(null);
    dialogRefSpy.componentInstance = {
      createdComponent: mockCreatedComponent,
    } as any;
    (dialogRefSpy as any).componentRef = null;
    (dialogRefSpy as any)._containerInstance = {} as any;

    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    matDialogSpy.open.and.returnValue(dialogRefSpy);

    TestBed.configureTestingModule({
      providers: [
        C3DialogService,
        C3ConfirmService,
        C3PromptService,
        C3AlertService,
        { provide: MatDialog, useValue: matDialogSpy },
      ],
    });

    service = TestBed.inject(C3DialogService);
  });

  afterEach(() => {
    afterClosedSubject.complete();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('confirm()', () => {
    it('should open ConfirmDialogComponent with default options', fakeAsync(() => {
      const config = { text: 'Are you sure?' };

      const promise = service.confirm(config);
      afterClosedSubject.next(true);
      tick();

      expect(matDialogSpy.open).toHaveBeenCalledWith(ConfirmDialogComponent, {
        width: '250px',
        data: {
          text: 'Are you sure?',
          reject: {
            color: undefined,
            text: 'Annuler',
          },
          accept: {
            color: 'primary',
            text: 'Accepter',
          },
        },
      });
    }));

    it('should open ConfirmDialogComponent with custom width', fakeAsync(() => {
      const config = { text: 'Are you sure?', width: '400px' };

      service.confirm(config);
      afterClosedSubject.next(true);
      tick();

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        ConfirmDialogComponent,
        jasmine.objectContaining({ width: '400px' })
      );
    }));

    it('should resolve with true when user accepts', fakeAsync(() => {
      const config = { text: 'Are you sure?' };
      let result: boolean | undefined;

      service.confirm(config).then((r) => (result = r));
      afterClosedSubject.next(true);
      tick();

      expect(result).toBe(true);
    }));

    it('should resolve with false when user rejects', fakeAsync(() => {
      const config = { text: 'Are you sure?' };
      let result: boolean | undefined;

      service.confirm(config).then((r) => (result = r));
      afterClosedSubject.next(false);
      tick();

      expect(result).toBe(false);
    }));

    it('should use custom accept and reject options', fakeAsync(() => {
      const config = {
        text: 'Delete item?',
        accept: { color: 'warn', text: 'Delete' },
        reject: { color: 'accent', text: 'Cancel' },
      };

      service.confirm(config);
      afterClosedSubject.next(true);
      tick();

      expect(matDialogSpy.open).toHaveBeenCalledWith(ConfirmDialogComponent, {
        width: '250px',
        data: {
          text: 'Delete item?',
          reject: {
            color: 'accent',
            text: 'Cancel',
          },
          accept: {
            color: 'warn',
            text: 'Delete',
          },
        },
      });
    }));
  });

  describe('prompt()', () => {
    it('should open C3PromptDialogComponent with default options', fakeAsync(() => {
      const config = { text: 'Enter value' };

      service.prompt(config);
      afterClosedSubject.next('test');
      tick();

      expect(matDialogSpy.open).toHaveBeenCalledWith(C3PromptDialogComponent, {
        width: '250px',
        maxWidth: '100vw',
        data: jasmine.objectContaining({
          text: 'Enter value',
          reject: { color: undefined, text: 'Annuler' },
          accept: { color: 'primary', text: 'Accepter' },
        }),
      });
    }));

    it('should resolve with entered value when user submits', fakeAsync(() => {
      const config = { text: 'Enter value' };
      let result: string | false | undefined;

      service.prompt(config).then((r) => (result = r));
      afterClosedSubject.next('user input');
      tick();

      expect(result).toBe('user input');
    }));

    it('should resolve with false when user cancels (undefined)', fakeAsync(() => {
      const config = { text: 'Enter value' };
      let result: string | false | undefined;

      service.prompt(config).then((r) => (result = r));
      afterClosedSubject.next(undefined);
      tick();

      expect(result).toBe(false);
    }));

    it('should pass validators and multiline options', fakeAsync(() => {
      const config = {
        text: 'Enter value',
        multiline: true,
        required: true,
        placeholder: 'Your input',
        defaultValue: 'default',
      };

      service.prompt(config);
      afterClosedSubject.next('test');
      tick();

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3PromptDialogComponent,
        jasmine.objectContaining({
          data: jasmine.objectContaining({
            multiline: true,
            required: true,
            placeholder: 'Your input',
            defaultValue: 'default',
          }),
        })
      );
    }));

    it('should use custom width and maxWidth', fakeAsync(() => {
      const config = { text: 'Enter value', width: '500px', maxWidth: '80vw' };

      service.prompt(config);
      afterClosedSubject.next('test');
      tick();

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3PromptDialogComponent,
        jasmine.objectContaining({
          width: '500px',
          maxWidth: '80vw',
        })
      );
    }));
  });

  describe('alert()', () => {
    it('should open C3AlertDialogComponent with text', () => {
      service.alert('Alert message');

      expect(matDialogSpy.open).toHaveBeenCalledWith(C3AlertDialogComponent, {
        data: {
          text: 'Alert message',
        },
      });
    });

    it('should open C3AlertDialogComponent with custom config', () => {
      service.alert('Alert message', { text: 'Alert message', width: '300px', acceptText: 'OK' });

      expect(matDialogSpy.open).toHaveBeenCalledWith(C3AlertDialogComponent, {
        data: jasmine.objectContaining({
          text: 'Alert message',
          width: '300px',
          acceptText: 'OK',
        }),
      });
    });

    it('should return afterClosed observable', () => {
      const result = service.alert('Alert message');

      expect(result).toBeDefined();
      expect(dialogRefSpy.afterClosed).toHaveBeenCalled();
    });
  });

  describe('createDialogFromComponent()', () => {
    it('should throw error when no component is provided', () => {
      const config = {} as C3CreateDialogFromComponentConfig<any>;

      expect(() => service.createDialogFromComponent(config)).toThrowError(
        'No component provided'
      );
    });

    it('should open dialog with component', () => {
      const config: C3CreateDialogFromComponentConfig<MockComponent> = {
        component: MockComponent,
      };

      service.createDialogFromComponent(config);

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          data: jasmine.objectContaining({
            component: MockComponent,
          }),
        })
      );
    });

    it('should pass toolbar configuration', () => {
      const config: C3CreateDialogFromComponentConfig<MockComponent> = {
        component: MockComponent,
        toolbar: {
          title: 'Test Title',
          closeBtn: true,
          closeColor: 'warn',
          color: 'primary',
        },
      };

      service.createDialogFromComponent(config);

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          data: jasmine.objectContaining({
            toolbar: {
              title: 'Test Title',
              closeBtn: true,
              closeColor: 'warn',
              color: 'primary',
            },
          }),
        })
      );
    });

    it('should pass actions configuration', () => {
      const actionSpy = jasmine.createSpy('action');
      const config: C3CreateDialogFromComponentConfig<MockComponent> = {
        component: MockComponent,
        actions: [
          { label: 'Save', action: actionSpy, apperance: 'raised' },
          { label: 'Cancel', action: actionSpy },
        ],
      };

      service.createDialogFromComponent(config);

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          data: jasmine.objectContaining({
            actions: config.actions,
          }),
        })
      );
    });

    it('should pass class configurations', () => {
      const config: C3CreateDialogFromComponentConfig<MockComponent> = {
        component: MockComponent,
        classActions: 'action-class',
        classContainer: 'container-class',
        classContent: 'content-class',
      };

      service.createDialogFromComponent(config);

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          data: jasmine.objectContaining({
            classActions: 'action-class',
            classContainer: 'container-class',
            classContent: 'content-class',
          }),
        })
      );
    });

    it('should pass component inputs via data', () => {
      const config: C3CreateDialogFromComponentConfig<MockComponent> = {
        component: MockComponent,
        data: { mockInput: 'test value' },
      };

      service.createDialogFromComponent(config);

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          data: jasmine.objectContaining({
            inputs: { mockInput: 'test value' },
          }),
        })
      );
    });

    it('should return result object with all required properties', () => {
      const config: C3CreateDialogFromComponentConfig<MockComponent> = {
        component: MockComponent,
      };

      const result = service.createDialogFromComponent(config);

      expect(result.id).toBe('test-dialog-id');
      expect(result.disableClose).toBe(false);
      expect(typeof result.close).toBe('function');
      expect(typeof result.afterClosed).toBe('function');
      expect(typeof result.afterOpened).toBe('function');
      expect(typeof result.beforeClosed).toBe('function');
      expect(typeof result.backdropClick).toBe('function');
      expect(typeof result.getState).toBe('function');
      expect(typeof result.keydownEvents).toBe('function');
      expect(typeof result.updateSize).toBe('function');
      expect(typeof result.updatePosition).toBe('function');
      expect(typeof result.addPanelClass).toBe('function');
      expect(typeof result.removePanelClass).toBe('function');
      expect(typeof result.afterComponentMounted).toBe('function');
    });
  });

  describe('createDialogFromTemplate()', () => {
    it('should open dialog with template ref', () => {
      const mockTemplateRef = {} as TemplateRef<any>;

      service.createDialogFromTemplate(mockTemplateRef);

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          data: {
            templateRef: mockTemplateRef,
          },
        })
      );
    });

    it('should pass additional config options', () => {
      const mockTemplateRef = {} as TemplateRef<any>;

      service.createDialogFromTemplate(mockTemplateRef, {
        width: '600px',
        height: '400px',
        disableClose: true,
      });

      expect(matDialogSpy.open).toHaveBeenCalledWith(
        C3DialogEmbedChildComponent,
        jasmine.objectContaining({
          width: '600px',
          height: '400px',
          disableClose: true,
        })
      );
    });

    it('should return result object', () => {
      const mockTemplateRef = {} as TemplateRef<any>;

      const result = service.createDialogFromTemplate(mockTemplateRef);

      expect(result).toBeDefined();
      expect(result.id).toBe('test-dialog-id');
      expect(typeof result.afterClosed).toBe('function');
    });
  });
});

