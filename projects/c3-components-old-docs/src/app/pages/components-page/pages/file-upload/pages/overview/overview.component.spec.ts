import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: FileUploadOverviewComponent;
  let fixture: ComponentFixture<FileUploadOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileUploadOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileUploadOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
