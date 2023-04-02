import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3ModalComponent } from './c3-modal.component';

describe('C3ModalComponent', () => {
  let component: C3ModalComponent;
  let fixture: ComponentFixture<C3ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
