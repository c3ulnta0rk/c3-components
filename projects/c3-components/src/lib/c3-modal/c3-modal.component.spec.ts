import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { C3ModalComponent } from './c3-modal.component';

describe('C3ModalComponent', () => {
  let fixture: ComponentFixture<C3ModalComponent>;
  let component: C3ModalComponent;

  beforeEach(async () => {
    // Share the same object reference for the current URL segment
    const currentSegment = { path: 'modal' };
    await TestBed.configureTestingModule({
      imports: [C3ModalComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: [currentSegment] },
            pathFromRoot: [
              { snapshot: { url: [] } },
              { snapshot: { url: [{ path: 'dashboard' }] } },
              { snapshot: { url: [currentSegment] } },
            ],
          },
        },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-modal host class', () => {
    expect(
      fixture.nativeElement.classList.contains('c3-modal')
    ).toBeTrue();
  });

  it('should compute return route from route tree', () => {
    expect(component._returnRoute()).toBe('/dashboard/');
  });

  it('should have a container element', () => {
    const container = fixture.nativeElement.querySelector('.container');
    expect(container).toBeTruthy();
  });

  it('should have an outer backdrop element', () => {
    const outer = fixture.nativeElement.querySelector('.outer');
    expect(outer).toBeTruthy();
  });

  it('should set height', () => {
    expect(component.height()).toBeTruthy();
  });
});

describe('C3ModalComponent (server platform)', () => {
  let fixture: ComponentFixture<C3ModalComponent>;
  let component: C3ModalComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3ModalComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: [] },
            pathFromRoot: [{ snapshot: { url: [] } }],
          },
        },
        { provide: PLATFORM_ID, useValue: 'server' },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(C3ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create on server', () => {
    expect(component).toBeTruthy();
  });

  it('should default return route to /', () => {
    expect(component._returnRoute()).toBe('/');
  });
});
