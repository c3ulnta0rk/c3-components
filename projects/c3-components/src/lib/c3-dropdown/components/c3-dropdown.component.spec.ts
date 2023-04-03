import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3DropdownComponent } from './c3-dropdown.component';

describe('C3DropdownComponent', () => {
  let component: C3DropdownComponent;
  let fixture: ComponentFixture<C3DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C3DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
