import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3PdfDialogComponent } from './c3-pdf-dialog.component';

describe('C3PdfDialogComponent', () => {
  let component: C3PdfDialogComponent;
  let fixture: ComponentFixture<C3PdfDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3PdfDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3PdfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
