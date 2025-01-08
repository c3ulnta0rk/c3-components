import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDialogExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: PdfDialogExamplesComponent;
  let fixture: ComponentFixture<PdfDialogExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfDialogExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfDialogExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
