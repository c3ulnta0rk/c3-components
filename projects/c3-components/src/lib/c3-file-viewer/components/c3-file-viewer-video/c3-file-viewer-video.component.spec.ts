import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerVideoComponent } from './c3-file-viewer-video.component';

describe('C3FileViewerVideoComponent', () => {
  let component: C3FileViewerVideoComponent;
  let fixture: ComponentFixture<C3FileViewerVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileViewerVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileViewerVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
