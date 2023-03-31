import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: DropdownOverviewComponent;
  let fixture: ComponentFixture<DropdownOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
