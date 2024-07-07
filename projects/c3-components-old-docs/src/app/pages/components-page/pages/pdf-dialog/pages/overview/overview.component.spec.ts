import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDialogOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: PdfDialogOverviewComponent;
  let fixture: ComponentFixture<PdfDialogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PdfDialogOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfDialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
