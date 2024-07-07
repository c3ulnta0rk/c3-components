import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomClientComponent } from './custom-client.component';

describe('CustomClientComponent', () => {
  let component: CustomClientComponent;
  let fixture: ComponentFixture<CustomClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomClientComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
