import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogViewerComponent } from './dialog-viewer.component';

describe('DialogViewerComponent', () => {
  let component: DialogViewerComponent;
  let fixture: ComponentFixture<DialogViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
