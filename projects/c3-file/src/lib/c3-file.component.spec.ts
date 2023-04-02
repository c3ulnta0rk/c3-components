import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3FileComponent } from './c3-file.component';

describe('C3FileComponent', () => {
  let component: C3FileComponent;
  let fixture: ComponentFixture<C3FileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3FileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
