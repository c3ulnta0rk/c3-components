import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: FileUploadApiComponent;
  let fixture: ComponentFixture<FileUploadApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUploadApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
