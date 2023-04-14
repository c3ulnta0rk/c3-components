import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileViewerOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: FileViewerOverviewComponent;
  let fixture: ComponentFixture<FileViewerOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileViewerOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileViewerOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
