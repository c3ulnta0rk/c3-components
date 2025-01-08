import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDialogApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: PdfDialogApiComponent;
  let fixture: ComponentFixture<PdfDialogApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfDialogApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfDialogApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
