import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { C3TabsModule } from '../../c3-tabs.module';
import { C3TabsComponent } from './c3-tabs.component';

describe('C3TabsComponent', () => {
  let fixture: ComponentFixture<C3TabsComponent>;
  let component: C3TabsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3TabsModule],
      providers: [
        {
          provide: Router,
          useValue: { events: of(), isActive: () => false },
        },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default ignoreQueryParams false', () => {
    expect(component.ignoreQueryParams()).toBe(false);
  });

  it('should expose btnBackgroundOffset and btnWidth', () => {
    expect(component.btnBackgroundOffset).toBeDefined();
    expect(component.btnWidth).toBeDefined();
  });

  it('should have c3-tabs host class', () => {
    expect(fixture.nativeElement.classList.contains('c3-tabs')).toBeTrue();
  });

  it('should contain .menu-text__container', () => {
    const container = fixture.nativeElement.querySelector(
      '.menu-text__container'
    );
    expect(container).toBeTruthy();
  });

  it('should contain .toggle-btn__background', () => {
    const bg = fixture.nativeElement.querySelector(
      '.toggle-btn__background'
    );
    expect(bg).toBeTruthy();
  });
});

describe('C3TabsComponent (server platform)', () => {
  let fixture: ComponentFixture<C3TabsComponent>;
  let component: C3TabsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3TabsModule],
      providers: [
        {
          provide: Router,
          useValue: { events: of(), isActive: () => false },
        },
        { provide: PLATFORM_ID, useValue: 'server' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create on server', () => {
    expect(component).toBeTruthy();
  });

  it('should return 0 for getLeftPositionElement on server', () => {
    expect(
      component.getLeftPositionElement(document.createElement('div'))
    ).toBe(0);
  });
});
