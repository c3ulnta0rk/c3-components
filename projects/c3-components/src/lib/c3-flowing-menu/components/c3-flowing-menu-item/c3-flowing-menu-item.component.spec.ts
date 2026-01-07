import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3FlowingMenuItemComponent } from './c3-flowing-menu-item.component';
import { C3FlowingMenuModule } from '../../c3-flowing-menu.module';

@Component({
  template: `
    <c3-flowing-menu-item>
      <div class="item-content">Content</div>
    </c3-flowing-menu-item>
  `,
  standalone: true,
  imports: [C3FlowingMenuModule],
})
class TestHostComponent {
  @ViewChild(C3FlowingMenuItemComponent)
  menuItem!: C3FlowingMenuItemComponent;
}

describe('C3FlowingMenuItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.menuItem).toBeTruthy();
  });

  it('should have active signal initialized to false', () => {
    expect(component.menuItem.active()).toBe(false);
  });

  it('should toggle active state', () => {
    component.menuItem.active.set(true);
    expect(component.menuItem.active()).toBe(true);
  });

  it('should have content template viewChild', () => {
    expect(component.menuItem.contentTpl).toBeDefined();
  });

  it('should have menu template viewChild', () => {
    expect(component.menuItem.menuTpl).toBeDefined();
  });
});

