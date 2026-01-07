import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3FlowingMenuItemContentComponent } from './c3-flowing-menu-item-content.component';
import { C3FlowingMenuModule } from '../../c3-flowing-menu.module';

@Component({
  template: `
    <c3-flowing-menu-item-content>
      <div class="custom-content">Custom Content</div>
    </c3-flowing-menu-item-content>
  `,
  standalone: false,
})
class TestHostComponent {}

describe('C3FlowingMenuItemContentComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [C3FlowingMenuModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const contentEl = fixture.debugElement.children[0];
    expect(contentEl).toBeTruthy();
  });

  it('should project content', () => {
    const customContent = fixture.debugElement.nativeElement.querySelector('.custom-content');
    expect(customContent).toBeTruthy();
    expect(customContent.textContent).toBe('Custom Content');
  });
});




