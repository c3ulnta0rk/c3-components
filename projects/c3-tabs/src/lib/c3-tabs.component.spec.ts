import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C3TabsComponent } from './c3-tabs.component';

describe('C3TabsComponent', () => {
  let component: C3TabsComponent;
  let fixture: ComponentFixture<C3TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C3TabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C3TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
