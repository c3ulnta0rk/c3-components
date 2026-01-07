import { Component, TemplateRef, ViewChild, Input } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { C3DialogEmbedChildComponent } from './c3-dialog-embed-child.component';
import { C3DialogModule } from '../c3-dialog.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// Test child component
@Component({
  selector: 'test-child',
  template: '<div class="test-child">{{ testInput }}</div>',
  standalone: true,
})
class TestChildComponent {
  @Input() testInput = 'default';
}

describe('C3DialogEmbedChildComponent', () => {
  let component: C3DialogEmbedChildComponent<TestChildComponent>;
  let fixture: ComponentFixture<C3DialogEmbedChildComponent<TestChildComponent>>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<C3DialogEmbedChildComponent<TestChildComponent>>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    const mockData = {
      component: TestChildComponent,
      inputs: { testInput: 'custom value' },
    };

    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule, CommonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(
      C3DialogEmbedChildComponent<TestChildComponent>
    );
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have dialogRef', () => {
    fixture.detectChanges();
    expect(component.dialogRef).toBeTruthy();
  });

  it('should have data', () => {
    fixture.detectChanges();
    expect(component.data).toBeTruthy();
    expect(component.data.component).toBe(TestChildComponent);
  });

  it('should initialize createdComponent signal', () => {
    fixture.detectChanges();
    expect(component.createdComponent).toBeDefined();
  });

  it('should create child component after view init', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    expect(component.createdComponent()).toBeTruthy();
  }));

  it('should return createdComponent from createdComponentInstance', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const instance = component.createdComponentInstance();
    expect(instance).toBe(component.createdComponent());
  }));
});

describe('C3DialogEmbedChildComponent with toolbar', () => {
  let fixture: ComponentFixture<C3DialogEmbedChildComponent<any>>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    const mockData = {
      component: TestChildComponent,
      toolbar: {
        title: 'Test Dialog',
        closeBtn: true,
        closeColor: 'warn',
        color: 'primary',
      },
    };

    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule, CommonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3DialogEmbedChildComponent);
    fixture.detectChanges();
  });

  it('should display toolbar with title', () => {
    const toolbar = fixture.nativeElement.querySelector('mat-toolbar');
    expect(toolbar).toBeTruthy();
    expect(toolbar.textContent).toContain('Test Dialog');
  });

  it('should display close button when closeBtn is true', () => {
    const closeBtn = fixture.nativeElement.querySelector(
      'mat-toolbar button[mat-icon-button]'
    );
    expect(closeBtn).toBeTruthy();
  });
});

describe('C3DialogEmbedChildComponent with actions', () => {
  let fixture: ComponentFixture<C3DialogEmbedChildComponent<any>>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<any>>;
  let actionSpy: jasmine.Spy;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    actionSpy = jasmine.createSpy('action');

    const mockData = {
      component: TestChildComponent,
      actions: [
        { label: 'Save', action: actionSpy, apperance: 'raised' },
        { label: 'Cancel', action: actionSpy, apperance: 'basic' },
      ],
    };

    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule, CommonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3DialogEmbedChildComponent);
    fixture.detectChanges();
  });

  it('should display action buttons', () => {
    const actions = fixture.nativeElement.querySelector('.dialog-actions');
    expect(actions).toBeTruthy();

    const buttons = actions.querySelectorAll('button');
    expect(buttons.length).toBe(2);
  });

  it('should call action on button click', () => {
    const buttons = fixture.nativeElement.querySelectorAll(
      '.dialog-actions button'
    );
    buttons[0].click();

    expect(actionSpy).toHaveBeenCalled();
  });
});

describe('C3DialogEmbedChildComponent with templateRef', () => {
  @Component({
    template: `
      <ng-template #testTemplate>
        <div class="template-content">Template Content</div>
      </ng-template>
    `,
    standalone: true,
  })
  class TemplateHostComponent {
    @ViewChild('testTemplate') template!: TemplateRef<any>;
  }

  let fixture: ComponentFixture<C3DialogEmbedChildComponent<any>>;
  let templateFixture: ComponentFixture<TemplateHostComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [TemplateHostComponent, C3DialogModule, NoopAnimationsModule, CommonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    templateFixture = TestBed.createComponent(TemplateHostComponent);
    templateFixture.detectChanges();

    // Update the data with the template
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule, CommonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        {
          provide: MAT_DIALOG_DATA,
          useValue: { templateRef: templateFixture.componentInstance.template },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3DialogEmbedChildComponent);
    fixture.detectChanges();
  });

  it('should render template content', () => {
    const content = fixture.nativeElement.querySelector('.template-content');
    expect(content).toBeTruthy();
    expect(content.textContent).toBe('Template Content');
  });

  it('should set createdComponent to null for template', fakeAsync(() => {
    tick();
    expect(fixture.componentInstance.createdComponent()).toBeNull();
  }));
});

describe('C3DialogEmbedChildComponent without component or template', () => {
  let fixture: ComponentFixture<C3DialogEmbedChildComponent<any>>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<any>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule, CommonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3DialogEmbedChildComponent);
  });

  it('should close dialog when no component or template', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    expect(dialogRefSpy.close).toHaveBeenCalledWith(false);
  }));
});

