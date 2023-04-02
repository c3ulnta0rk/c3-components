import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3RoundedTitleComponent } from './c3-rounded-title.component';

describe('C3RoundedTitleComponent', () => {
  let component: C3RoundedTitleComponent;
  let fixture: ComponentFixture<C3RoundedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3RoundedTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3RoundedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
