import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { C3NavItemComponent } from './c3-nav-item.component';
import { C3MenuService } from '../../services/c3-menu.service';
import { C3MenuModule } from '../../c3-menu.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

@Component({
  template: `
    <c3-nav-item
      [route]="route"
      [itemTitle]="itemTitle"
      [check]="check"
      [isExternal]="isExternal"
    ></c3-nav-item>
  `,
  standalone: false,
})
class TestHostComponent {
  route = '/test-route';
  itemTitle = 'Test Item';
  check: string | null = null;
  isExternal = false;
}

describe('C3NavItemComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;
  let menuServiceSpy: jasmine.SpyObj<C3MenuService>;
  let routeChangeSubject: Subject<string>;

  beforeEach(async () => {
    routeChangeSubject = new Subject<string>();

    menuServiceSpy = jasmine.createSpyObj('C3MenuService', ['setSelectedItem'], {
      currentRoute: signal('/'),
      currentRouteChange: routeChangeSubject.asObservable(),
      isHeadless: signal(false),
      selectedElement: null,
    });

    await TestBed.configureTestingModule({
      imports: [C3MenuModule, RouterTestingModule],
      declarations: [TestHostComponent],
      providers: [{ provide: C3MenuService, useValue: menuServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    routeChangeSubject.complete();
  });

  it('should create', () => {
    const navItemEl = fixture.debugElement.children[0];
    expect(navItemEl).toBeTruthy();
  });

  it('should accept route input', () => {
    const navItemEl = fixture.debugElement.children[0];
    const navItemComponent = navItemEl.componentInstance as C3NavItemComponent;

    expect(navItemComponent.route()).toBe('/test-route');
  });

  it('should accept itemTitle input', () => {
    const navItemEl = fixture.debugElement.children[0];
    const navItemComponent = navItemEl.componentInstance as C3NavItemComponent;

    expect(navItemComponent.itemTitle()).toBe('Test Item');
  });

  it('should accept check input', () => {
    component.check = '/custom-check';
    fixture.detectChanges();

    const navItemEl = fixture.debugElement.children[0];
    const navItemComponent = navItemEl.componentInstance as C3NavItemComponent;

    expect(navItemComponent.check()).toBe('/custom-check');
  });

  it('should have null check by default', () => {
    const navItemEl = fixture.debugElement.children[0];
    const navItemComponent = navItemEl.componentInstance as C3NavItemComponent;

    expect(navItemComponent.check()).toBeNull();
  });

  it('should accept isExternal input', () => {
    component.isExternal = true;
    fixture.detectChanges();

    const navItemEl = fixture.debugElement.children[0];
    const navItemComponent = navItemEl.componentInstance as C3NavItemComponent;

    expect(navItemComponent.isExternal()).toBe(true);
  });

  it('should have isExternal false by default', () => {
    const navItemEl = fixture.debugElement.children[0];
    const navItemComponent = navItemEl.componentInstance as C3NavItemComponent;

    expect(navItemComponent.isExternal()).toBe(false);
  });

  it('should set selected item when route matches', fakeAsync(() => {
    component.route = '/matching-route';
    fixture.detectChanges();
    tick();

    routeChangeSubject.next('/matching-route');
    tick();

    // The service should have been called if the route matches
    expect(menuServiceSpy.setSelectedItem).toHaveBeenCalled();
  }));
});

