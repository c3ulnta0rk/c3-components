import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3TraceCardComponent } from './c3-trace-card.component';

describe('C3TraceCardComponent', () => {
  let component: C3TraceCardComponent;
  let fixture: ComponentFixture<C3TraceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3TraceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C3TraceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
