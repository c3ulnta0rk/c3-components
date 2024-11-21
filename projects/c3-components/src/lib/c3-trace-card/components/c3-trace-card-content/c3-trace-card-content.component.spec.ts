import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3TraceCardContentComponent } from './c3-trace-card-content.component';

describe('C3TraceCardContentComponent', () => {
  let component: C3TraceCardContentComponent;
  let fixture: ComponentFixture<C3TraceCardContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3TraceCardContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C3TraceCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
