import { ComponentFixture, TestBed } from '@angular/core/testing';
import { C3FileDisplayIconComponent } from './c3-file-display-icon.component';

describe('C3FileDisplayIconComponent', () => {
  let component: C3FileDisplayIconComponent;
  let fixture: ComponentFixture<C3FileDisplayIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C3FileDisplayIconComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(C3FileDisplayIconComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.componentRef.setInput('fileType', 'image/jpeg');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('displayedIcon', () => {
    it('should return image for webp', () => {
      fixture.componentRef.setInput('fileType', 'image/webp');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('image');
    });

    it('should return image for png', () => {
      fixture.componentRef.setInput('fileType', 'image/png');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('image');
    });

    it('should return image for jpeg', () => {
      fixture.componentRef.setInput('fileType', 'image/jpeg');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('image');
    });

    it('should return image for jpg', () => {
      fixture.componentRef.setInput('fileType', 'image/jpg');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('image');
    });

    it('should return play_circle for mp4', () => {
      fixture.componentRef.setInput('fileType', 'video/mp4');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('play_circle');
    });

    it('should return play_circle for webm', () => {
      fixture.componentRef.setInput('fileType', 'video/webm');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('play_circle');
    });

    it('should return picture_as_pdf for pdf', () => {
      fixture.componentRef.setInput('fileType', 'application/pdf');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('picture_as_pdf');
    });

    it('should return description for msword', () => {
      fixture.componentRef.setInput('fileType', 'application/msword');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('description');
    });

    it('should return description for docx', () => {
      fixture.componentRef.setInput(
        'fileType',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('description');
    });

    it('should return content_copy for unknown types', () => {
      fixture.componentRef.setInput('fileType', 'application/unknown');
      fixture.detectChanges();
      expect(component.displayedIcon()).toBe('content_copy');
    });
  });

  describe('color', () => {
    it('should return text-primary for images', () => {
      fixture.componentRef.setInput('fileType', 'image/jpeg');
      fixture.detectChanges();
      expect(component.color()).toBe('text-primary');
    });

    it('should return text-secondary for videos', () => {
      fixture.componentRef.setInput('fileType', 'video/mp4');
      fixture.detectChanges();
      expect(component.color()).toBe('text-secondary');
    });

    it('should return text-error for pdf', () => {
      fixture.componentRef.setInput('fileType', 'application/pdf');
      fixture.detectChanges();
      expect(component.color()).toBe('text-error');
    });

    it('should return text-success for word documents', () => {
      fixture.componentRef.setInput('fileType', 'application/msword');
      fixture.detectChanges();
      expect(component.color()).toBe('text-success');
    });

    it('should return text-gray for unknown types', () => {
      fixture.componentRef.setInput('fileType', 'application/unknown');
      fixture.detectChanges();
      expect(component.color()).toBe('text-gray');
    });
  });
});




