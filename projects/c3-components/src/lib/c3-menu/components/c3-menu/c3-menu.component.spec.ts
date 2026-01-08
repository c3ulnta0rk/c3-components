import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3MenuComponent } from './c3-menu.component';
import { C3MenuService } from '../../services/c3-menu.service';
import { C3MenuModule } from '../../c3-menu.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  standalone: false,
  template: `
    <c3-menu>
      <c3-nav-item route="/home" itemTitle="Home"></c3-nav-item>
      <c3-nav-item route="/about" itemTitle="About"></c3-nav-item>
    </c3-menu>
  `
})
class TestHostComponent { }

describe('C3MenuComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let menuService: C3MenuService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent],
      imports: [C3MenuModule, RouterTestingModule],
      providers: [C3MenuService],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    menuService = TestBed.inject(C3MenuService);
    fixture.detectChanges();
  });

  it('should create and project content', () => {
    const menuComponent = fixture.debugElement.query(By.directive(C3MenuComponent));
    expect(menuComponent).toBeTruthy();

    const navItems = fixture.debugElement.queryAll(By.css('c3-nav-item'));
    expect(navItems.length).toBe(2);
    expect(navItems[0].nativeElement.textContent).toContain('Home');
    expect(navItems[1].nativeElement.textContent).toContain('About');
  });

  it('should hide menu when headless mode is true', () => {
    menuService.isHeadless.set(true);
    fixture.detectChanges();

    const menuContainer = fixture.debugElement.query(By.css('#app-menu'));
    expect(menuContainer).toBeFalsy();

    const mainLayout = fixture.debugElement.query(By.css('.layout-main'));
    expect(mainLayout.classes['headless']).toBeTrue();
  });

  it('should show menu when headless mode is false', () => {
    menuService.isHeadless.set(false);
    fixture.detectChanges();

    const menuContainer = fixture.debugElement.query(By.css('#app-menu'));
    expect(menuContainer).toBeTruthy();

    const mainLayout = fixture.debugElement.query(By.css('.layout-main'));
    expect(mainLayout.classes['headless']).toBeFalsy();
  });
});

