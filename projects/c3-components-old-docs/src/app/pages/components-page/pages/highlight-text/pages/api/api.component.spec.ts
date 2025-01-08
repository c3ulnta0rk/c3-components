import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightTextApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: HighlightTextApiComponent;
  let fixture: ComponentFixture<HighlightTextApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightTextApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightTextApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
