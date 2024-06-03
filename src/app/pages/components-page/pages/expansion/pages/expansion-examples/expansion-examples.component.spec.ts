import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionExamplesComponent } from './expansion-examples.component';

describe('ExpansionExamplesComponent', () => {
  let component: ExpansionExamplesComponent;
  let fixture: ComponentFixture<ExpansionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
