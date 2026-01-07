import { fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { C3FileViewer } from './file-viewer';
import { FileMetadata } from './file-metadata';

describe('C3FileViewer', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let fileViewer: C3FileViewer;

  const mockFile: FileMetadata = {
    name: 'test.jpg',
    type: 'image/jpeg',
    location: 'https://example.com/test.jpg',
  };

  const mockPdfFile: FileMetadata = {
    name: 'document.pdf',
    type: 'application/pdf',
    location: 'https://example.com/document.pdf',
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpy.get.and.returnValue(of(new Blob(['test'])));

    fileViewer = new C3FileViewer({ client: httpClientSpy as HttpClient });
  });

  describe('constructor', () => {
    it('should create with default config', () => {
      expect(fileViewer).toBeTruthy();
      expect(fileViewer.config).toBeDefined();
    });

    it('should create with custom config', () => {
      const customViewer = new C3FileViewer({
        client: httpClientSpy as HttpClient,
        config: { zoomFactor: 0.5 },
      });

      expect(customViewer.config.zoomFactor).toBe(0.5);
    });

    it('should create with initial files', () => {
      const viewerWithFiles = new C3FileViewer({
        client: httpClientSpy as HttpClient,
        files: [mockFile],
      });

      expect(viewerWithFiles.files.length).toBe(1);
    });
  });

  describe('files setter', () => {
    it('should set files and reset currentIndex', () => {
      fileViewer.files = [mockFile, mockPdfFile];

      expect(fileViewer.files.length).toBe(2);
      expect(fileViewer.currentIndex).toBe(0);
    });

    it('should emit index$ when files are set', fakeAsync(() => {
      let emittedIndex: number | undefined;
      fileViewer.index$.subscribe((index) => (emittedIndex = index));

      fileViewer.files = [mockFile];
      tick();

      expect(emittedIndex).toBe(0);
    }));

    it('should handle files with alternative versions', () => {
      const fileWithAlternatives: FileMetadata = {
        ...mockFile,
        alternativeVersions: [
          { location: 'https://example.com/test-small.jpg', contentType: 'image/jpeg', size: 1024, fileName: 'test-small.jpg' },
        ],
      };

      fileViewer.files = [fileWithAlternatives];

      // Should have original + alternative
      expect(fileViewer.filesObjectUrl.length).toBe(2);
    });
  });

  describe('navigation', () => {
    beforeEach(() => {
      fileViewer.files = [mockFile, mockPdfFile];
      fileViewer.hovered = true;
    });

    it('should go to next image', () => {
      expect(fileViewer.currentIndex).toBe(0);

      fileViewer.nextImage(null as any);

      expect(fileViewer.currentIndex).toBe(1);
    });

    it('should wrap around to first image from last', () => {
      fileViewer.currentIndex = 1;

      fileViewer.nextImage(null as any);

      expect(fileViewer.currentIndex).toBe(0);
    });

    it('should go to previous image', () => {
      fileViewer.currentIndex = 1;

      fileViewer.previousImage(null as any);

      expect(fileViewer.currentIndex).toBe(0);
    });

    it('should wrap around to last image from first', () => {
      expect(fileViewer.currentIndex).toBe(0);

      fileViewer.previousImage(null as any);

      expect(fileViewer.currentIndex).toBe(1);
    });

    it('should not navigate when not hovered and keyboard event', () => {
      fileViewer.hovered = false;
      fileViewer.config = { ...fileViewer.config, allowKeyboardNavigation: true };

      const initialIndex = fileViewer.currentIndex;
      fileViewer.nextImage(new KeyboardEvent('keydown'));

      expect(fileViewer.currentIndex).toBe(initialIndex);
    });
  });

  describe('zoom', () => {
    it('should zoom in', () => {
      fileViewer.config = { ...fileViewer.config, zoomFactor: 0.1 };
      const initialTransform = fileViewer.style.transform;

      fileViewer.zoomIn();

      expect(fileViewer.style.transform).not.toBe(initialTransform);
      expect(fileViewer.style.transform).toContain('scale');
    });

    it('should zoom out', () => {
      fileViewer.config = { ...fileViewer.config, zoomFactor: 0.1 };
      fileViewer.zoomIn(); // First zoom in
      const afterZoomIn = fileViewer.style.transform;

      fileViewer.zoomOut();

      expect(fileViewer.style.transform).not.toBe(afterZoomIn);
    });

    it('should handle scroll zoom when enabled', () => {
      fileViewer.config = { ...fileViewer.config, wheelZoom: true };
      const zoomInSpy = spyOn(fileViewer, 'zoomIn');

      const wheelEvent = new WheelEvent('wheel', { deltaY: -100 });
      const result = fileViewer.scrollZoom(wheelEvent);

      expect(zoomInSpy).toHaveBeenCalled();
      expect(result).toBe(false);
    });

    it('should zoom out on positive deltaY', () => {
      fileViewer.config = { ...fileViewer.config, wheelZoom: true };
      const zoomOutSpy = spyOn(fileViewer, 'zoomOut');

      const wheelEvent = new WheelEvent('wheel', { deltaY: 100 });
      fileViewer.scrollZoom(wheelEvent);

      expect(zoomOutSpy).toHaveBeenCalled();
    });

    it('should not handle scroll when wheelZoom is disabled', () => {
      fileViewer.config = { ...fileViewer.config, wheelZoom: false };
      const zoomInSpy = spyOn(fileViewer, 'zoomIn');

      const wheelEvent = new WheelEvent('wheel', { deltaY: -100 });
      const result = fileViewer.scrollZoom(wheelEvent);

      expect(zoomInSpy).not.toHaveBeenCalled();
      expect(result).toBe(true);
    });
  });

  describe('rotation', () => {
    it('should rotate clockwise', () => {
      fileViewer.rotateClockwise();

      expect(fileViewer.style.transform).toContain('rotate(90deg)');
    });

    it('should rotate counter-clockwise', () => {
      fileViewer.rotateCounterClockwise();

      expect(fileViewer.style.transform).toContain('rotate(-90deg)');
    });

    it('should accumulate rotations', () => {
      fileViewer.rotateClockwise();
      fileViewer.rotateClockwise();

      expect(fileViewer.style.transform).toContain('rotate(180deg)');
    });
  });

  describe('fullscreen', () => {
    it('should toggle fullscreen state', () => {
      expect(fileViewer.fullscreen$.getValue()).toBe(false);

      fileViewer.toggleFullscreen();

      expect(fileViewer.fullscreen$.getValue()).toBe(true);

      fileViewer.toggleFullscreen();

      expect(fileViewer.fullscreen$.getValue()).toBe(false);
    });

    it('should reset transform when exiting fullscreen', () => {
      fileViewer.zoomIn();
      fileViewer.rotateClockwise();
      fileViewer.toggleFullscreen(); // Enter fullscreen

      fileViewer.toggleFullscreen(); // Exit fullscreen

      expect(fileViewer.style.transform).toContain('scale(1)');
      expect(fileViewer.style.transform).toContain('rotate(0deg)');
    });
  });

  describe('reset', () => {
    it('should reset all transformations', () => {
      fileViewer.zoomIn();
      fileViewer.rotateClockwise();

      fileViewer.reset();

      expect(fileViewer.style.transform).toContain('translate(0px, 0px)');
      expect(fileViewer.style.transform).toContain('rotate(0deg)');
      expect(fileViewer.style.transform).toContain('scale(1)');
    });
  });

  describe('drag', () => {
    it('should update translate on drag', () => {
      const startEvent = new DragEvent('dragstart', {
        clientX: 100,
        clientY: 100,
      });
      fileViewer.onDragStart(startEvent);

      const dragEvent = new DragEvent('drag', {
        clientX: 150,
        clientY: 150,
      });
      fileViewer.onDragOver(dragEvent);

      expect(fileViewer.style.transform).toContain('translate(50px, 50px)');
    });
  });

  describe('loading state', () => {
    it('should set loading to false on onLoaded', () => {
      fileViewer.loading = true;

      fileViewer.onLoaded();

      expect(fileViewer.loading).toBe(false);
    });

    it('should set loading to true on onLoadStart', () => {
      fileViewer.loading = false;

      fileViewer.onLoadStart();

      expect(fileViewer.loading).toBe(true);
    });
  });

  describe('imageNotFound', () => {
    it('should emit customFile$ event', fakeAsync(() => {
      let emittedEvent: any;
      fileViewer.customFile$.subscribe((event) => (emittedEvent = event));

      fileViewer.imageNotFound(mockFile);
      tick();

      expect(emittedEvent).toBeTruthy();
      expect(emittedEvent.name).toBe('imageNotFound');
      expect(emittedEvent.fileUrl).toBe(mockFile.location);
    }));

    it('should set loading to false', () => {
      fileViewer.loading = true;

      fileViewer.imageNotFound(mockFile);

      expect(fileViewer.loading).toBe(false);
    });
  });

  describe('getOriginalName', () => {
    it('should return name from metadata if available', () => {
      const fileWithMetadata: FileMetadata = {
        ...mockFile,
        metadata: { originalName: 'original.jpg' },
      };
      fileViewer.files = [fileWithMetadata];

      const name = fileViewer.getOriginalName(fileWithMetadata);

      expect(name).toBe('original.jpg');
    });

    it('should return file name if no metadata', () => {
      fileViewer.files = [mockFile];

      const name = fileViewer.getOriginalName(mockFile);

      expect(name).toBe('test.jpg');
    });

    it('should use currentFile if no file provided', () => {
      fileViewer.files = [mockFile];

      const name = fileViewer.getOriginalName();

      expect(name).toBe('test.jpg');
    });
  });

  describe('config', () => {
    it('should merge config with defaults', () => {
      fileViewer.config = { zoomFactor: 0.3 };

      expect(fileViewer.config.zoomFactor).toBe(0.3);
      // Other defaults should be preserved
    });

    it('should merge btnIcons with defaults', () => {
      fileViewer.config = {
        btnIcons: { zoomIn: { text: 'custom-zoom-in' } },
      };

      expect(fileViewer.config.btnIcons?.zoomIn?.text).toBe('custom-zoom-in');
    });

    it('should emit config$ on config change', fakeAsync(() => {
      let emittedConfig: any;
      fileViewer.config$.subscribe((config) => (emittedConfig = config));

      fileViewer.config = { zoomFactor: 0.2 };
      tick();

      expect(emittedConfig.zoomFactor).toBe(0.2);
    }));
  });

  describe('getFile', () => {
    it('should call http client with encoded URL', () => {
      fileViewer.getFile('https://example.com/file.jpg');

      expect(httpClientSpy.get).toHaveBeenCalledWith(
        jasmine.any(String),
        jasmine.objectContaining({ responseType: 'blob' })
      );
    });

    it('should throw error when no client provided', () => {
      const viewerWithoutClient = new C3FileViewer({} as any);

      expect(() => viewerWithoutClient.getFile('test.jpg')).toThrowError(
        'No http client provided. Please provide a custom client or import HttpClientModule'
      );
    });

    it('should use customClient if provided', () => {
      const customClientSpy = jasmine.createSpy('customClient').and.returnValue(of(new Blob()));
      fileViewer.config = { ...fileViewer.config, customClient: customClientSpy };

      fileViewer.getFile('https://example.com/test.jpg');

      expect(customClientSpy).toHaveBeenCalled();
    });
  });

  describe('createObjectURL', () => {
    it('should return undefined for unsupported mime types', () => {
      const unsupportedFile: FileMetadata = {
        name: 'test.xyz',
        type: 'application/unsupported',
        location: 'https://example.com/test.xyz',
      };

      const result = fileViewer.createObjectURL(unsupportedFile);

      expect(result).toBeUndefined();
    });

    it('should cache blob URLs', fakeAsync(() => {
      const blob = new Blob(['test']);
      httpClientSpy.get.and.returnValue(of(blob));

      fileViewer.createObjectURL(mockFile)?.subscribe();
      tick();

      // Second call should use cache
      fileViewer.createObjectURL(mockFile)?.subscribe();
      tick();

      // Only one HTTP call should be made
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    }));
  });

  describe('style updates', () => {
    it('should update all transform prefixes', () => {
      fileViewer.zoomIn();

      expect(fileViewer.style.transform).toBeDefined();
      expect(fileViewer.style.msTransform).toBe(fileViewer.style.transform);
      expect(fileViewer.style.webkitTransform).toBe(fileViewer.style.transform);
      expect(fileViewer.style.oTransform).toBe(fileViewer.style.transform);
    });

    it('should apply height from config', fakeAsync(() => {
      fileViewer.config = { ...fileViewer.config, height: 500 };
      tick();

      expect(fileViewer.style.height).toBe('500px');
    }));

    it('should handle string height values', fakeAsync(() => {
      fileViewer.config = { ...fileViewer.config, height: '50vh' };
      tick();

      expect(fileViewer.style.height).toBe('50vh');
    }));
  });
});

