import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3ExpansionComponent } from './c3-expansion.component';
import { C3ExpansionModule } from '../../c3-expansion.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  template: `
    <c3-expansion [(isExpanded)]="expanded" [headerClass]="headerClass">
      <c3-expansion-header>Header</c3-expansion-header>
      <div class="content">Content</div>
    </c3-expansion>
  `,
  standalone: false,
})
class TestHostComponent {
  expanded = false;
  headerClass = 'custom-header';
}

describe('C3ExpansionComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3ExpansionModule, NoopAnimationsModule],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const expansionEl = fixture.debugElement.children[0];
    expect(expansionEl).toBeTruthy();
  });

  it('should have c3-expansion class on host', () => {
    const expansionEl = fixture.debugElement.children[0].nativeElement;
    expect(expansionEl.classList.contains('c3-expansion')).toBe(true);
  });

  it('should start collapsed by default', () => {
    expect(component.expanded).toBe(false);
  });

  it('should toggle expansion state', () => {
    const expansionEl = fixture.debugElement.children[0];
    const expansionComponent = expansionEl.componentInstance as C3ExpansionComponent;

    expect(expansionComponent.isExpanded()).toBe(false);

    expansionComponent.toggleExpand();

    expect(expansionComponent.isExpanded()).toBe(true);

    expansionComponent.toggleExpand();

    expect(expansionComponent.isExpanded()).toBe(false);
  });

  it('should accept headerClass input', () => {
    const expansionEl = fixture.debugElement.children[0];
    const expansionComponent = expansionEl.componentInstance as C3ExpansionComponent;

    expect(expansionComponent.headerClass()).toBe('custom-header');
  });

  it('should have default headerClass', async () => {
    @Component({
      template: `<c3-expansion></c3-expansion>`,
      standalone: false,
    })
    class MinimalTestComponent {}

    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [C3ExpansionModule, NoopAnimationsModule],
      declarations: [MinimalTestComponent],
    }).compileComponents();

    const minimalFixture = TestBed.createComponent(MinimalTestComponent);
    minimalFixture.detectChanges();

    const expansionComponent = minimalFixture.debugElement.children[0]
      .componentInstance as C3ExpansionComponent;
    expect(expansionComponent.headerClass()).toBe('c3-expansion-header');
  });

  it('should two-way bind isExpanded', () => {
    const expansionEl = fixture.debugElement.children[0];
    const expansionComponent = expansionEl.componentInstance as C3ExpansionComponent;

    expansionComponent.isExpanded.set(true);
    fixture.detectChanges();

    expect(component.expanded).toBe(true);
  });
});

