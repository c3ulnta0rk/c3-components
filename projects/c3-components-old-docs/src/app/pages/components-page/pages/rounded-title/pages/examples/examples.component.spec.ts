import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedTitleExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: RoundedTitleExamplesComponent;
  let fixture: ComponentFixture<RoundedTitleExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundedTitleExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundedTitleExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
