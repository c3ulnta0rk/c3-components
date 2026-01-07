import { TestBed } from '@angular/core/testing';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { C3SafeUrlPipe } from './c3-safe-url.pipe';

describe('C3SafeUrlPipe', () => {
  let pipe: C3SafeUrlPipe;
  let sanitizerSpy: jasmine.SpyObj<DomSanitizer>;
  const mockSafeUrl = {} as SafeResourceUrl;

  beforeEach(() => {
    sanitizerSpy = jasmine.createSpyObj('DomSanitizer', [
      'bypassSecurityTrustResourceUrl',
    ]);
    sanitizerSpy.bypassSecurityTrustResourceUrl.and.returnValue(mockSafeUrl);

    TestBed.configureTestingModule({
      providers: [
        C3SafeUrlPipe,
        { provide: DomSanitizer, useValue: sanitizerSpy },
      ],
    });

    pipe = TestBed.inject(C3SafeUrlPipe);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform()', () => {
    it('should return empty string for null url', () => {
      const result = pipe.transform(null);

      expect(result).toBe('');
      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).not.toHaveBeenCalled();
    });

    it('should call bypassSecurityTrustResourceUrl for valid url', () => {
      const url = 'https://example.com/resource';

      const result = pipe.transform(url);

      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
      expect(result).toBe(mockSafeUrl);
    });

    it('should handle relative URLs', () => {
      const url = '/api/files/document.pdf';

      pipe.transform(url);

      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
    });

    it('should handle blob URLs', () => {
      const url = 'blob:https://example.com/12345-abcde';

      pipe.transform(url);

      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
    });

    it('should handle data URLs', () => {
      const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEA';

      pipe.transform(url);

      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
    });

    it('should handle empty string as truthy value', () => {
      const url = '';

      const result = pipe.transform(url);

      // Empty string is falsy in JavaScript, so it should return ''
      expect(result).toBe('');
    });

    it('should handle URLs with special characters', () => {
      const url = 'https://example.com/file?name=test+file&id=123';

      pipe.transform(url);

      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
    });

    it('should handle URLs with hash fragments', () => {
      const url = 'https://example.com/page#section';

      pipe.transform(url);

      expect(sanitizerSpy.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
    });
  });
});
