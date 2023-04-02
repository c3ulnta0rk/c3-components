import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsExamplesComponent } from './examples.component';

describe('ExamplesComponent', () => {
  let component: TabsExamplesComponent;
  let fixture: ComponentFixture<TabsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabsExamplesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TabsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
