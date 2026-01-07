import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3InputFileTriggerComponent } from './c3-input-file-trigger.component';

describe('C3InputFileTriggerComponent', () => {
  let component: C3InputFileTriggerComponent;
  let fixture: ComponentFixture<C3InputFileTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [C3InputFileTriggerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3InputFileTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have clicked output', () => {
    expect(component.clicked).toBeDefined();
  });

  it('should emit clicked event on click', () => {
    const emitSpy = spyOn(component.clicked, 'emit');
    const mockEvent = new MouseEvent('click');

    component.click(mockEvent);

    expect(emitSpy).toHaveBeenCalledWith(mockEvent);
  });

  it('should render button with text', () => {
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Ajouter des fichiers');
  });

  it('should trigger click method when button is clicked', () => {
    const clickSpy = spyOn(component, 'click');
    const button = fixture.nativeElement.querySelector('button');

    button.click();

    expect(clickSpy).toHaveBeenCalled();
  });
});




