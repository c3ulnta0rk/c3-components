import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerActionsComponent } from './c3-file-viewer-actions.component';

describe('C3FileViewerActionsComponent', () => {
  let component: C3FileViewerActionsComponent;
  let fixture: ComponentFixture<C3FileViewerActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileViewerActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileViewerActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
