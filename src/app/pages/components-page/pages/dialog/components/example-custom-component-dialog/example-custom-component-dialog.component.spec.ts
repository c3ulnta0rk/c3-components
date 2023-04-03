import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCustomComponentDialogComponent } from './example-custom-component-dialog.component';

describe('ExampleCustomComponentDialogComponent', () => {
  let component: ExampleCustomComponentDialogComponent;
  let fixture: ComponentFixture<ExampleCustomComponentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleCustomComponentDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleCustomComponentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
