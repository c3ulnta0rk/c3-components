import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: FileUploadExamplesComponent;
  let fixture: ComponentFixture<FileUploadExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUploadExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
