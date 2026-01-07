import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { C3DownloadService } from './c3-download.service';

describe('C3DownloadService', () => {
  let service: C3DownloadService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        C3DownloadService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });

    service = TestBed.inject(C3DownloadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('download()', () => {
    it('should call HttpClient.get with responseType blob', () => {
      const mockBlob = new Blob(['test content'], { type: 'text/plain' });
      httpClientSpy.get.and.returnValue(of(mockBlob));

      service.download('https://example.com/file.txt');

      expect(httpClientSpy.get).toHaveBeenCalledWith(
        'https://example.com/file.txt',
        jasmine.objectContaining({ responseType: 'blob' })
      );
    });

    it('should return an Observable of Blob', (done) => {
      const mockBlob = new Blob(['test content'], { type: 'text/plain' });
      httpClientSpy.get.and.returnValue(of(mockBlob));

      service.download('https://example.com/file.txt').subscribe({
        next: (blob) => {
          expect(blob).toEqual(mockBlob);
          expect(blob instanceof Blob).toBe(true);
          done();
        },
        error: done.fail,
      });
    });

    it('should handle different file URLs', () => {
      const mockBlob = new Blob([''], { type: 'application/pdf' });
      httpClientSpy.get.and.returnValue(of(mockBlob));

      // Test with relative URL
      service.download('/api/files/document.pdf');
      expect(httpClientSpy.get).toHaveBeenCalledWith(
        '/api/files/document.pdf',
        jasmine.objectContaining({ responseType: 'blob' })
      );

      // Test with absolute URL
      service.download('https://cdn.example.com/assets/image.png');
      expect(httpClientSpy.get).toHaveBeenCalledWith(
        'https://cdn.example.com/assets/image.png',
        jasmine.objectContaining({ responseType: 'blob' })
      );
    });

    it('should handle URLs with query parameters', () => {
      const mockBlob = new Blob([''], { type: 'application/octet-stream' });
      httpClientSpy.get.and.returnValue(of(mockBlob));

      service.download('https://example.com/file?token=abc123&version=2');

      expect(httpClientSpy.get).toHaveBeenCalledWith(
        'https://example.com/file?token=abc123&version=2',
        jasmine.objectContaining({ responseType: 'blob' })
      );
    });

    it('should handle URLs with special characters', () => {
      const mockBlob = new Blob([''], { type: 'text/plain' });
      httpClientSpy.get.and.returnValue(of(mockBlob));

      service.download('https://example.com/files/document%20name.txt');

      expect(httpClientSpy.get).toHaveBeenCalledWith(
        'https://example.com/files/document%20name.txt',
        jasmine.objectContaining({ responseType: 'blob' })
      );
    });
  });
});

