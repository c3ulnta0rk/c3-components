import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: FileViewerExamplesComponent;
  let fixture: ComponentFixture<FileViewerExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileViewerExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileViewerExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
