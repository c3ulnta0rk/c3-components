import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: FileOverviewComponent;
  let fixture: ComponentFixture<FileOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
