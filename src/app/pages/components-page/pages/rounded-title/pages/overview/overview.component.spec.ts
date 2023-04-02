import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedTitleOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: RoundedTitleOverviewComponent;
  let fixture: ComponentFixture<RoundedTitleOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundedTitleOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundedTitleOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
