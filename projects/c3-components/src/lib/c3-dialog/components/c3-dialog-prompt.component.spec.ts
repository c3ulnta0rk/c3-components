import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { C3PromptDialogComponent, PromptConfig } from './c3-dialog-prompt.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

describe('C3PromptDialogComponent', () => {
  let component: C3PromptDialogComponent;
  let fixture: ComponentFixture<C3PromptDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<C3PromptDialogComponent>>;

  const mockData: PromptConfig = {
    text: 'Enter your name',
    placeholder: 'Name',
    defaultValue: 'John',
    accept: {
      color: 'primary',
      text: 'Submit',
    },
    reject: {
      color: 'warn',
      text: 'Cancel',
    },
  };

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [C3PromptDialogComponent],
      imports: [ReactiveFormsModule, NoopAnimationsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3PromptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have injected data', () => {
    expect(component.data.text).toBe('Enter your name');
    expect(component.data.placeholder).toBe('Name');
    expect(component.data.defaultValue).toBe('John');
  });

  it('should initialize result FormControl with default value', () => {
    expect(component.result.value).toBe('John');
  });

  it('should have dialogRef', () => {
    expect(component.dialogRef).toBeTruthy();
  });

  it('should close dialog on onNoClick', () => {
    component.onNoClick();

    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should display title text', () => {
    const title = fixture.nativeElement.querySelector('[mat-dialog-title]');
    expect(title.textContent).toBe('Enter your name');
  });

  it('should have input field', () => {
    const input = fixture.nativeElement.querySelector('input[matInput]');
    expect(input).toBeTruthy();
  });

  it('should update result value', () => {
    component.result.setValue('Jane');

    expect(component.result.value).toBe('Jane');
  });
});

describe('C3PromptDialogComponent with validators', () => {
  let component: C3PromptDialogComponent;
  let fixture: ComponentFixture<C3PromptDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<C3PromptDialogComponent>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    const dataWithValidators: PromptConfig = {
      text: 'Enter email',
      validators: Validators.email,
      required: true,
    };

    await TestBed.configureTestingModule({
      declarations: [C3PromptDialogComponent],
      imports: [ReactiveFormsModule, NoopAnimationsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: dataWithValidators },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3PromptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should apply validators', () => {
    component.result.setValue('invalid-email');

    expect(component.result.valid).toBe(false);
  });

  it('should be valid with correct email', () => {
    component.result.setValue('test@example.com');

    expect(component.result.valid).toBe(true);
  });
});

describe('C3PromptDialogComponent with multiline', () => {
  let component: C3PromptDialogComponent;
  let fixture: ComponentFixture<C3PromptDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<C3PromptDialogComponent>>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    const multilineData: PromptConfig = {
      text: 'Enter description',
      multiline: true,
    };

    await TestBed.configureTestingModule({
      declarations: [C3PromptDialogComponent],
      imports: [ReactiveFormsModule, NoopAnimationsModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: multilineData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3PromptDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have textarea for multiline', () => {
    // The textarea might not have matInput as an attribute, but as a directive
    // Try different selectors to find the textarea
    const textarea = fixture.nativeElement.querySelector('textarea[matInput]') ||
                     fixture.nativeElement.querySelector('textarea') ||
                     fixture.nativeElement.querySelector('mat-form-field textarea');
    expect(textarea).toBeTruthy();
  });

  it('should not have input for multiline', () => {
    const input = fixture.nativeElement.querySelector('input[matInput]');
    expect(input).toBeFalsy();
  });
});


