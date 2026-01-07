import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3TraceCardAlignLeftDirective } from './align-left.directive';
import { C3TraceCardComponent } from '../components/c3-trace-card/c3-trace-card.component';
import { C3TraceCardModule } from '../c3-trace-card.module';

describe('C3TraceCardAlignLeftDirective', () => {
  let fixture: ComponentFixture<C3TraceCardComponent>;

  beforeEach(async () => {
    TestBed.resetTestingModule();
    await TestBed.configureTestingModule({
      imports: [C3TraceCardModule, C3TraceCardAlignLeftDirective],
    }).compileComponents();
  });

  it('should create an instance and set align to left', () => {
    @Component({
      template: `<c3-trace-card align-left>Content</c3-trace-card>`,
      standalone: true,
      imports: [C3TraceCardModule, C3TraceCardAlignLeftDirective],
    })
    class TestHostComponent {}

    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const traceCardEl = hostFixture.debugElement.children[0];
    expect(traceCardEl).toBeTruthy();

    const traceCardComponent = traceCardEl.componentInstance as C3TraceCardComponent;
    expect(traceCardComponent.align()).toBe('left');
  });
});

