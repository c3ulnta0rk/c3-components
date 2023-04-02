import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3MenuComponent } from './c3-menu.component';

describe('C3MenuComponent', () => {
  let component: C3MenuComponent;
  let fixture: ComponentFixture<C3MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3MenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
