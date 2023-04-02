import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3DialogComponent } from './c3-dialog.component';

describe('C3DialogComponent', () => {
  let component: C3DialogComponent;
  let fixture: ComponentFixture<C3DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3DialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
