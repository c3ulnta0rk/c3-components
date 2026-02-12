import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { C3RoundedTitleComponent } from './c3-rounded-title.component';

@Component({
  template: `<c3-rounded-title>Test Title</c3-rounded-title>`,
  standalone: true,
  imports: [C3RoundedTitleComponent],
})
class TestHostComponent {}

describe('C3RoundedTitleComponent', () => {
  let fixture: ComponentFixture<C3RoundedTitleComponent>;
  let component: C3RoundedTitleComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3RoundedTitleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3RoundedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have c3-rounded-title host class', () => {
    expect(
      fixture.nativeElement.classList.contains('c3-rounded-title')
    ).toBeTrue();
  });

  it('should contain a .title element', () => {
    const titleEl = fixture.nativeElement.querySelector('.title');
    expect(titleEl).toBeTruthy();
  });
});

describe('C3RoundedTitleComponent with content projection', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should project content into .title', () => {
    const titleEl = fixture.nativeElement.querySelector('.title');
    expect(titleEl.textContent.trim()).toBe('Test Title');
  });
});
