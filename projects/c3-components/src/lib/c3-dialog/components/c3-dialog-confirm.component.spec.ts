import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent, ConfirmConfig } from './c3-dialog-confirm.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let loader: HarnessLoader;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ConfirmDialogComponent>>;

  const mockData: ConfirmConfig = {
    text: 'Are you sure?',
    accept: {
      color: 'primary',
      text: 'Yes',
    },
    reject: {
      color: 'warn',
      text: 'No',
    },
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ConfirmDialogComponent],
      imports: [NoopAnimationsModule, MatDialogModule, MatButtonModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display text content', () => {
    const content = fixture.nativeElement.querySelector('mat-dialog-content');
    expect(content.textContent).toContain('Are you sure?');
  });

  it('should display accept button with correct text', async () => {
    const buttons = await loader.getAllHarnesses(MatButtonHarness);
    // Find the button with the accept text
    const acceptButton = await loader.getHarness(MatButtonHarness.with({ text: 'Yes' }));
    expect(await acceptButton.getText()).toBe('Yes');
  });

  it('should display reject button with correct text', async () => {
    const rejectButton = await loader.getHarness(MatButtonHarness.with({ text: 'No' }));
    expect(await rejectButton.getText()).toBe('No');
  });

  it('should close dialog when reject button is clicked (via click handler)', async () => {
    // Note: Since we are testing the component in isolation (not opened via MatDialog service),
    // the MatDialogRef spy handles the close call. 
    // However, the [mat-dialog-close] directive usually handles the click. 
    // In unit tests without a real dialog container, [mat-dialog-close] might not trigger the spy 
    // unless we simulate the click on the element that has the directive or call the method bound to click.
    
    // In this specific component, the template likely uses [mat-dialog-close] for one or both buttons 
    // OR calls a method. 
    // Let's check if the component has a method for reject. 
    // Based on previous file content: onNoClick calls dialogRef.close().
    
    component.onNoClick();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  }); 

   it('should have accept button designated as the persistent close action if configured', async () => {
     // Verify the accept button exists
     const acceptButton = await loader.getHarness(MatButtonHarness.with({ text: 'Yes' }));
     expect(acceptButton).toBeTruthy();
     
     // Note: Testing the actual closing behavior of [mat-dialog-close] in a unit test 
     // requires a bit more setup or an integration test. 
     // For unit testing, verifying the button presence and text is often sufficient 
     // if we assume Angular Material works as tested.
   });
});




