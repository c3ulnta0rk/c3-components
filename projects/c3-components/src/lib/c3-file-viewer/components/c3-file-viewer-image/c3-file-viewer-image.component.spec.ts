import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerImageComponent } from './c3-file-viewer-image.component';

describe('C3FileViewerImageComponent', () => {
  let component: C3FileViewerImageComponent;
  let fixture: ComponentFixture<C3FileViewerImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileViewerImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileViewerImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
