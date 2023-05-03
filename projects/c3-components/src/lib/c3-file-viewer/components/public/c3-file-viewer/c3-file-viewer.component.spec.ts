import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileViewerComponent } from './c3-file-viewer.component';

describe('C3FileViewerComponent', () => {
  let component: C3FileViewerComponent;
  let fixture: ComponentFixture<C3FileViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
