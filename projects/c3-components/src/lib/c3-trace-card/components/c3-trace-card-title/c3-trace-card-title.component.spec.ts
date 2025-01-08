import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3TraceCardTitleComponent } from './c3-trace-card-title.component';

describe('C3TraceCardTitleComponent', () => {
  let component: C3TraceCardTitleComponent;
  let fixture: ComponentFixture<C3TraceCardTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3TraceCardTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(C3TraceCardTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
