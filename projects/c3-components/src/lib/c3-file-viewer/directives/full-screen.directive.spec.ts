import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullScreenDirective } from './full-screen.directive';
import { C3FileViewerModule } from '../c3-file-viewer.module';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [c3-full-screen]="isFullScreen"></div>`,
  standalone: false,
})
class TestHostComponent {
  isFullScreen: boolean | null = null;
}

describe('FullScreenDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let directiveElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3FileViewerModule],
      declarations: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
    directiveElement = fixture.debugElement.query(By.directive(FullScreenDirective));
  });

  it('should create an instance', () => {
    expect(directiveElement).toBeTruthy();
  });

  it('should have fullscreenStateSetter input', () => {
    const directive = directiveElement.injector.get(FullScreenDirective);
    expect(directive.fullscreenStateSetter()).toBeNull();
  });
});
