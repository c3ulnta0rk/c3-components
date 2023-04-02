import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3NavbarComponent } from './c3-navbar.component';

describe('C3NavbarComponent', () => {
  let component: C3NavbarComponent;
  let fixture: ComponentFixture<C3NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3NavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
