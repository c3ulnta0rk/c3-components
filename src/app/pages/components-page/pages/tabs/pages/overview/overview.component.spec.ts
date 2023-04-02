import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsOverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: TabsOverviewComponent;
  let fixture: ComponentFixture<TabsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsOverviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
