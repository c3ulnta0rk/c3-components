import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { C3NavbarComponent } from './c3-navbar.component';

@Component({
  template: `<c3-navbar>
    <a class="link">Link 1</a>
    <a class="link">Link 2</a>
  </c3-navbar>`,
  standalone: true,
  imports: [C3NavbarComponent],
})
class TestHostComponent {}

describe('C3NavbarComponent', () => {
  let fixture: ComponentFixture<C3NavbarComponent>;
  let component: C3NavbarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-navbar host class', () => {
    expect(
      fixture.nativeElement.classList.contains('c3-navbar')
    ).toBeTrue();
  });

  it('should have mat-elevation-z4 class', () => {
    expect(
      fixture.nativeElement.classList.contains('mat-elevation-z4')
    ).toBeTrue();
  });
});

describe('C3NavbarComponent with content projection', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project links', () => {
    const links = fixture.nativeElement.querySelectorAll('.link');
    expect(links.length).toBe(2);
    expect(links[0].textContent.trim()).toBe('Link 1');
    expect(links[1].textContent.trim()).toBe('Link 2');
  });
});
