import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerDialogComponent } from './c3-file-viewer-dialog.component';

describe('C3FileViewerDialogComponent', () => {
  let component: C3FileViewerDialogComponent;
  let fixture: ComponentFixture<C3FileViewerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileViewerDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileViewerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
