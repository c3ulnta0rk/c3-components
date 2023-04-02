import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: MenuOverviewComponent;
  let fixture: ComponentFixture<MenuOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
