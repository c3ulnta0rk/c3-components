import { Component, TemplateRef, ViewChild, signal } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { C3FlowingMenuComponent } from './c3-flowing-menu.component';
import { C3FlowingMenuItemComponent } from '../c3-flowing-menu-item/c3-flowing-menu-item.component';
import { C3FlowingMenuModule } from '../../c3-flowing-menu.module';

// Mock C3FlowingMenuItemComponent
@Component({
  selector: 'c3-flowing-menu-item',
  template: `
    <ng-template #contentTemplate>
      <ng-content></ng-content>
    </ng-template>
  `,
  standalone: true,
})
class MockC3FlowingMenuItemComponent {
  @ViewChild('contentTemplate') contentTemplate!: TemplateRef<any>;
  contentTpl = signal<TemplateRef<any> | null>(null);

  ngAfterViewInit() {
    this.contentTpl.set(this.contentTemplate);
  }
}

@Component({
  template: `
    <c3-flowing-menu [(selectedIndex)]="selectedIndex">
      <c3-flowing-menu-item>
        <div class="item-content-1">Content 1</div>
      </c3-flowing-menu-item>
      <c3-flowing-menu-item>
        <div class="item-content-2">Content 2</div>
      </c3-flowing-menu-item>
    </c3-flowing-menu>
  `,
  standalone: true,
  imports: [C3FlowingMenuModule],
})
class TestHostComponent {
  selectedIndex = 0;
}

describe('C3FlowingMenuComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const menuEl = fixture.debugElement.children[0];
    expect(menuEl).toBeTruthy();
  });

  it('should have c3-flowing-menu class on host', () => {
    const menuEl = fixture.debugElement.children[0].nativeElement;
    expect(menuEl.classList.contains('c3-flowing-menu')).toBe(true);
  });

  it('should initialize with selectedIndex 0', () => {
    const menuEl = fixture.debugElement.children[0];
    const menuComponent = menuEl.componentInstance as C3FlowingMenuComponent;

    expect(menuComponent.selectedIndex()).toBe(0);
  });

  it('should two-way bind selectedIndex', () => {
    const menuEl = fixture.debugElement.children[0];
    const menuComponent = menuEl.componentInstance as C3FlowingMenuComponent;

    menuComponent.selectedIndex.set(1);
    fixture.detectChanges();

    expect(component.selectedIndex).toBe(1);
  });

  it('should have selectMenu method', () => {
    const menuEl = fixture.debugElement.children[0];
    const menuComponent = menuEl.componentInstance as C3FlowingMenuComponent;

    expect(typeof menuComponent.selectMenu).toBe('function');
  });

  it('should update selectedIndex on selectMenu', () => {
    const menuEl = fixture.debugElement.children[0];
    const menuComponent = menuEl.componentInstance as C3FlowingMenuComponent;

    menuComponent.selectMenu(1);

    expect(menuComponent.selectedIndex()).toBe(1);
  });

  it('should have contentChildren for menu items', fakeAsync(() => {
    fixture.detectChanges();
    tick();

    const menuEl = fixture.debugElement.children[0];
    const menuComponent = menuEl.componentInstance as C3FlowingMenuComponent;

    expect(menuComponent.c3FlowingMenu()).toBeDefined();
    expect(menuComponent.c3FlowingMenu().length).toBe(2);
  }));
});




