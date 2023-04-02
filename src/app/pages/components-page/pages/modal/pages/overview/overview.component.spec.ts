import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: ModalOverviewComponent;
  let fixture: ComponentFixture<ModalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
