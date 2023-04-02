import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: FileExamplesComponent;
  let fixture: ComponentFixture<FileExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
