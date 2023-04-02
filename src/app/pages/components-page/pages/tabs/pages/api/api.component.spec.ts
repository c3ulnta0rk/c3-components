import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsApiComponent } from './api.component';

describe('ApiComponent', () => {
  let component: TabsApiComponent;
  let fixture: ComponentFixture<TabsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsApiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
