import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: FileViewerApiComponent;
  let fixture: ComponentFixture<FileViewerApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileViewerApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileViewerApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
