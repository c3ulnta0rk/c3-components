import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { C3AlertDialogComponent, AlertConfig } from './c3-dialog-alert.component';
import { C3DialogModule } from '../c3-dialog.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('C3AlertDialogComponent', () => {
  let component: C3AlertDialogComponent;
  let fixture: ComponentFixture<C3AlertDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<C3AlertDialogComponent>>;

  const mockData: AlertConfig = {
    text: 'Test alert message',
    width: '300px',
    acceptText: 'OK',
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3AlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have injected data', () => {
    expect(component.data.text).toBe('Test alert message');
    expect(component.data.acceptText).toBe('OK');
  });

  it('should have dialogRef', () => {
    expect(component.dialogRef).toBeTruthy();
  });

  it('should close dialog on onNoClick', () => {
    component.onNoClick();

    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should display text content', () => {
    const content = fixture.nativeElement.querySelector('mat-dialog-content');
    expect(content.textContent).toContain('Test alert message');
  });

  it('should display custom acceptText', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent.trim()).toBe('OK');
  });

  it('should display default acceptText when not provided', async () => {
    await TestBed.resetTestingModule()
      .configureTestingModule({
        imports: [C3DialogModule, NoopAnimationsModule],
        providers: [
          { provide: MatDialogRef, useValue: dialogRefSpy },
          { provide: MAT_DIALOG_DATA, useValue: { text: 'Test' } },
        ],
      })
      .compileComponents();

    const newFixture = TestBed.createComponent(C3AlertDialogComponent);
    newFixture.detectChanges();

    const button = newFixture.nativeElement.querySelector('button');
    expect(button.textContent.trim()).toBe('ok');
  });
});

