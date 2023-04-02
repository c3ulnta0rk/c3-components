import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: NavbarApiComponent;
  let fixture: ComponentFixture<NavbarApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
