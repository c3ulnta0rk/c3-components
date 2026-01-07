import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3MenuComponent } from './c3-menu.component';
import { C3MenuService } from '../../services/c3-menu.service';
import { C3MenuModule } from '../../c3-menu.module';
import { RouterTestingModule } from '@angular/router/testing';
import { signal } from '@angular/core';
import { of } from 'rxjs';

describe('C3MenuComponent', () => {
  let component: C3MenuComponent;
  let fixture: ComponentFixture<C3MenuComponent>;
  let menuServiceSpy: jasmine.SpyObj<C3MenuService>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    menuServiceSpy = jasmine.createSpyObj('C3MenuService', ['setSelectedItem'], {
      currentRoute: signal('/'),
      isHeadless: signal(false),
      currentRouteChange: of('/'),
      selectedElement: null,
    });

    await TestBed.configureTestingModule({
      imports: [C3MenuModule, RouterTestingModule],
      providers: [{ provide: C3MenuService, useValue: menuServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(C3MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should inject C3MenuService', () => {
    expect(component._c3Menu).toBeTruthy();
    expect(component._c3Menu).toBe(menuServiceSpy);
  });

  it('should have access to menu service properties', () => {
    expect(component._c3Menu.currentRoute()).toBe('/');
    expect(component._c3Menu.isHeadless()).toBe(false);
  });
});

