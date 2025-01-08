import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: DialogApiComponent;
  let fixture: ComponentFixture<DialogApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
