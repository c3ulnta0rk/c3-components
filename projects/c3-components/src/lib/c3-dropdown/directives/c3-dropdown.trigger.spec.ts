import { Component, signal, TemplateRef, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { C3DropdownTrigger } from './c3-dropdown.trigger';
import { C3DropdownComponent } from '../components/c3-dropdown.component';
import { C3DropdownModule } from '../c3-dropdown.module';

// Mock C3DropdownComponent
class MockDropdownComponent {
  isOpen = signal(false);
  template = signal<TemplateRef<any> | null>(null);
}

@Component({
  template: `
    <button [c3DropdownTrigger]="dropdown">Open Dropdown</button>
    <ng-template #dropdownTemplate>
      <div class="dropdown-content">Dropdown Content</div>
    </ng-template>
  `,
  standalone: false,
})
class TestHostComponent {
  @ViewChild('dropdownTemplate') dropdownTemplate!: TemplateRef<any>;
  dropdown = new MockDropdownComponent() as unknown as C3DropdownComponent;

  ngAfterViewInit() {
    (this.dropdown as any).template.set(this.dropdownTemplate);
  }
}

describe('C3DropdownTrigger', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let overlayRefSpy: jasmine.SpyObj<OverlayRef>;
  let overlaySpy: jasmine.SpyObj<Overlay>;

  beforeEach(async () => {
    const backdropSubject = new Subject<MouseEvent>();
    const detachSubject = new Subject<void>();

    overlayRefSpy = jasmine.createSpyObj('OverlayRef', [
      'attach',
      'detach',
      'hasAttached',
      'backdropClick',
      'detachments',
    ]);
    overlayRefSpy.hasAttached.and.returnValue(true);
    overlayRefSpy.backdropClick.and.returnValue(backdropSubject.asObservable());
    overlayRefSpy.detachments.and.returnValue(detachSubject.asObservable());

    const positionStrategySpy = jasmine.createSpyObj('FlexibleConnectedPositionStrategy', [
      'withLockedPosition',
      'withPositions',
    ]);
    positionStrategySpy.withLockedPosition.and.returnValue(positionStrategySpy);
    positionStrategySpy.withPositions.and.returnValue(positionStrategySpy);

    const positionBuilderSpy = jasmine.createSpyObj('OverlayPositionBuilder', [
      'flexibleConnectedTo',
    ]);
    positionBuilderSpy.flexibleConnectedTo.and.returnValue(positionStrategySpy);

    overlaySpy = jasmine.createSpyObj('Overlay', ['create', 'position']);
    overlaySpy.create.and.returnValue(overlayRefSpy);
    overlaySpy.position.and.returnValue(positionBuilderSpy);

    await TestBed.configureTestingModule({
      imports: [C3DropdownModule, OverlayModule],
      declarations: [TestHostComponent],
      providers: [{ provide: Overlay, useValue: overlaySpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const buttonEl = fixture.debugElement.children[0];
    expect(buttonEl).toBeTruthy();
  });

  it('should not show dropdown when template is not set', () => {
    (component.dropdown as any).template = signal(null);
    fixture.detectChanges();

    const button = fixture.debugElement.children[0].nativeElement;
    button.click();

    expect(overlaySpy.create).not.toHaveBeenCalled();
  });

  it('should show dropdown on click when template is set', fakeAsync(() => {
    // Wait for ngAfterViewInit
    tick();
    fixture.detectChanges();

    const button = fixture.debugElement.children[0].nativeElement;
    button.click();

    expect(overlaySpy.create).toHaveBeenCalled();
    expect(overlayRefSpy.attach).toHaveBeenCalled();
    expect(component.dropdown.isOpen()).toBe(true);
  }));

  it('should close dropdown and set isOpen to false', fakeAsync(() => {
    tick();
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.children[0];
    const directive = buttonEl.injector.get(C3DropdownTrigger);

    // Open first
    directive.show();
    expect(component.dropdown.isOpen()).toBe(true);

    // Then close
    directive.close();

    expect(overlayRefSpy.detach).toHaveBeenCalled();
    expect(component.dropdown.isOpen()).toBe(false);
  }));

  it('should clean up on destroy', fakeAsync(() => {
    tick();
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.children[0];
    const directive = buttonEl.injector.get(C3DropdownTrigger);

    // Open the dropdown
    directive.show();

    // Destroy the directive
    directive.ngOnDestroy();

    expect(component.dropdown.isOpen()).toBe(false);
  }));

  it('should have dropdownDisabled input defaulting to false', () => {
    const buttonEl = fixture.debugElement.children[0];
    const directive = buttonEl.injector.get(C3DropdownTrigger);

    expect(directive.dropdownDisabled()).toBe(false);
  });

  it('should have dropdownClass input defaulting to empty string', () => {
    const buttonEl = fixture.debugElement.children[0];
    const directive = buttonEl.injector.get(C3DropdownTrigger);

    expect(directive.dropdownClass()).toBe('');
  });
});

