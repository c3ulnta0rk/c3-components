import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionApiComponent } from './expansion-api.component';

describe('ExpansionApiComponent', () => {
  let component: ExpansionApiComponent;
  let fixture: ComponentFixture<ExpansionApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpansionApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
