import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: FileApiComponent;
  let fixture: ComponentFixture<FileApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FileApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FileApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
