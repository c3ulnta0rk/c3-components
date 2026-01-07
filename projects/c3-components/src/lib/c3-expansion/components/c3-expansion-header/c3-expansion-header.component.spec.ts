import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3ExpansionHeaderComponent } from './c3-expansion-header.component';
import { C3ExpansionModule } from '../../c3-expansion.module';

@Component({
  template: `
    <c3-expansion-header
      [title]="title"
      [isExpanded]="expanded"
      (toggleExpand)="onToggle()"
    >
      <span class="custom-content">Custom Content</span>
    </c3-expansion-header>
  `,
  standalone: false,
})
class TestHostComponent {
  title = 'Test Title';
  expanded = false;
  toggleCount = 0;

  onToggle() {
    this.toggleCount++;
  }
}

describe('C3ExpansionHeaderComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [C3ExpansionModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const headerEl = fixture.debugElement.children[0];
    expect(headerEl).toBeTruthy();
  });

  it('should have c3-expansion-header class on host', () => {
    const headerEl = fixture.debugElement.children[0].nativeElement;
    expect(headerEl.classList.contains('c3-expansion-header')).toBe(true);
  });

  it('should accept title input', () => {
    const headerEl = fixture.debugElement.children[0];
    const headerComponent = headerEl.componentInstance as C3ExpansionHeaderComponent;

    expect(headerComponent.title()).toBe('Test Title');
  });

  it('should accept isExpanded input', () => {
    const headerEl = fixture.debugElement.children[0];
    const headerComponent = headerEl.componentInstance as C3ExpansionHeaderComponent;

    expect(headerComponent.isExpanded()).toBe(false);

    component.expanded = true;
    // Use detectChanges with checkNoChanges to avoid ExpressionChangedAfterItHasBeenCheckedError
    fixture.detectChanges(false);
    fixture.detectChanges();

    expect(headerComponent.isExpanded()).toBe(true);
  });

  it('should emit toggleExpand event', () => {
    const headerEl = fixture.debugElement.children[0];
    const headerComponent = headerEl.componentInstance as C3ExpansionHeaderComponent;

    expect(component.toggleCount).toBe(0);

    headerComponent.toggleExpand.emit();
    fixture.detectChanges();

    expect(component.toggleCount).toBe(1);
  });

  it('should project content', () => {
    const customContent = fixture.debugElement.query(
      (el) => el.nativeElement.classList.contains('custom-content')
    );
    expect(customContent).toBeTruthy();
    expect(customContent.nativeElement.textContent).toBe('Custom Content');
  });

  it('should have default isExpanded as false', async () => {
    @Component({
      template: `<c3-expansion-header></c3-expansion-header>`,
      standalone: false,
    })
    class MinimalTestComponent {}

    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      declarations: [MinimalTestComponent],
      imports: [C3ExpansionModule],
    }).compileComponents();

    const minimalFixture = TestBed.createComponent(MinimalTestComponent);
    minimalFixture.detectChanges();

    const headerComponent = minimalFixture.debugElement.children[0]
      .componentInstance as C3ExpansionHeaderComponent;
    expect(headerComponent.isExpanded()).toBe(false);
  });
});




