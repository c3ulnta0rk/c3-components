import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: DialogExamplesComponent;
  let fixture: ComponentFixture<DialogExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
