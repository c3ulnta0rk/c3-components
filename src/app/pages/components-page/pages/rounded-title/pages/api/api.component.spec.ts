import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedTitleApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: RoundedTitleApiComponent;
  let fixture: ComponentFixture<RoundedTitleApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundedTitleApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoundedTitleApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
