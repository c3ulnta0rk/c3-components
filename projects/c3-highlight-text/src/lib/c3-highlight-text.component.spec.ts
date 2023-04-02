import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3HighlightTextComponent } from './c3-highlight-text.component';

describe('C3HighlightTextComponent', () => {
  let component: C3HighlightTextComponent;
  let fixture: ComponentFixture<C3HighlightTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3HighlightTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3HighlightTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
