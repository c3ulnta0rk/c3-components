import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: NavbarOverviewComponent;
  let fixture: ComponentFixture<NavbarOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
