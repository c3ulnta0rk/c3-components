import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightTextOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: HighlightTextOverviewComponent;
  let fixture: ComponentFixture<HighlightTextOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightTextOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightTextOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
