import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightTextExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: HighlightTextExamplesComponent;
  let fixture: ComponentFixture<HighlightTextExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighlightTextExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HighlightTextExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
