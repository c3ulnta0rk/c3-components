import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3DialogTemplateComponent } from './c3-dialog-template.component';
import { C3DialogModule } from '../../c3-dialog.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <c3-dialog-template>
      <div class="template-content">Template Content</div>
    </c3-dialog-template>
  `,
  standalone: false,
})
class TestHostComponent {
  @ViewChild(C3DialogTemplateComponent)
  dialogTemplate!: C3DialogTemplateComponent;
}

describe('C3DialogTemplateComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3DialogModule, NoopAnimationsModule],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.dialogTemplate).toBeTruthy();
  });

  it('should have templateRef viewChild', () => {
    expect(component.dialogTemplate.templateRef).toBeDefined();
  });

  it('should have dialogRef signal initialized to null', () => {
    expect(component.dialogTemplate.dialogRef()).toBeNull();
  });

  it('should allow setting dialogRef', () => {
    const mockDialogRef = { id: 'test' } as any;
    component.dialogTemplate.dialogRef.set(mockDialogRef);

    expect(component.dialogTemplate.dialogRef()).toBe(mockDialogRef);
  });

  it('should have TemplateRef available after view init', () => {
    expect(component.dialogTemplate.templateRef()).toBeTruthy();
  });
});

