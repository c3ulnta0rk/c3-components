import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { C3DropdownComponent } from './c3-dropdown.component';
import { Component } from '@angular/core';
import { C3DropdownModule } from '../c3-dropdown.module';

@Component({
  template: `
    <c3-dropdown [panelClass]="panelClass">
      <div class="dropdown-content">Content</div>
    </c3-dropdown>
  `,
  standalone: false,
})
class TestHostComponent {
  panelClass: string | string[] | Set<string> | { [key: string]: any } = 'custom-class';
}

describe('C3DropdownComponent', () => {
  let component: C3DropdownComponent;
  let fixture: ComponentFixture<C3DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3DropdownModule],
    }).compileComponents();

    fixture = TestBed.createComponent(C3DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have template viewChild', () => {
    expect(component.template).toBeTruthy();
  });

  it('should have isOpen signal initialized to false', () => {
    expect(component.isOpen()).toBe(false);
  });

  it('should toggle isOpen', () => {
    component.isOpen.set(true);
    expect(component.isOpen()).toBe(true);

    component.isOpen.set(false);
    expect(component.isOpen()).toBe(false);
  });
});

describe('C3DropdownComponent with host', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [C3DropdownModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should accept panelClass input', () => {
    const dropdownEl = fixture.debugElement.children[0];
    const dropdownComponent = dropdownEl.componentInstance as C3DropdownComponent;

    expect(dropdownComponent.panelClass()).toBe('custom-class');
  });

  it('should accept array panelClass', () => {
    hostComponent.panelClass = ['class1', 'class2'];
    fixture.detectChanges();

    const dropdownEl = fixture.debugElement.children[0];
    const dropdownComponent = dropdownEl.componentInstance as C3DropdownComponent;

    expect(dropdownComponent.panelClass()).toEqual(['class1', 'class2']);
  });

  it('should accept object panelClass', () => {
    hostComponent.panelClass = { active: true, disabled: false };
    fixture.detectChanges();

    const dropdownEl = fixture.debugElement.children[0];
    const dropdownComponent = dropdownEl.componentInstance as C3DropdownComponent;

    expect(dropdownComponent.panelClass()).toEqual({ active: true, disabled: false });
  });

  it('should mark for check when panelClass changes', fakeAsync(() => {
    hostComponent.panelClass = 'new-class';
    fixture.detectChanges();
    tick();

    const dropdownEl = fixture.debugElement.children[0];
    const dropdownComponent = dropdownEl.componentInstance as C3DropdownComponent;

    expect(dropdownComponent.panelClass()).toBe('new-class');
  }));
});
