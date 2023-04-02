import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: DialogOverviewComponent;
  let fixture: ComponentFixture<DialogOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
