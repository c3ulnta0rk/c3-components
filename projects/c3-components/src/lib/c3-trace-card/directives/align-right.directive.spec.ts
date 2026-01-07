import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { C3TraceCardAlignRightDirective } from './align-right.directive';
import { C3TraceCardComponent } from '../components/c3-trace-card/c3-trace-card.component';
import { C3TraceCardModule } from '../c3-trace-card.module';

describe('C3TraceCardAlignRightDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3TraceCardModule, C3TraceCardAlignRightDirective],
    }).compileComponents();
  });

  it('should create an instance and set align to right', () => {
    @Component({
      template: `<c3-trace-card align-right>Content</c3-trace-card>`,
      standalone: true,
      imports: [C3TraceCardModule, C3TraceCardAlignRightDirective],
    })
    class TestHostComponent {}

    const hostFixture = TestBed.createComponent(TestHostComponent);
    hostFixture.detectChanges();

    const traceCardEl = hostFixture.debugElement.children[0];
    expect(traceCardEl).toBeTruthy();

    const traceCardComponent = traceCardEl.componentInstance as C3TraceCardComponent;
    expect(traceCardComponent.align()).toBe('right');
  });
});

