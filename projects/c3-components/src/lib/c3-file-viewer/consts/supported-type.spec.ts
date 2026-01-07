import { SUPPORTED_MIME_TYPES, isMimeTypeSupported } from './supported-type';

describe('supported-type', () => {
  describe('SUPPORTED_MIME_TYPES', () => {
    it('should be an array', () => {
      expect(Array.isArray(SUPPORTED_MIME_TYPES)).toBe(true);
    });

    it('should contain PDF mime type', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('application/pdf');
    });

    it('should contain common image types', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('image/jpeg');
      expect(SUPPORTED_MIME_TYPES).toContain('image/png');
      expect(SUPPORTED_MIME_TYPES).toContain('image/gif');
      expect(SUPPORTED_MIME_TYPES).toContain('image/webp');
    });

    it('should contain SVG type', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('image/svg+xml');
    });

    it('should contain AVIF type', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('image/avif');
    });

    it('should contain BMP type', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('image/bmp');
    });

    it('should contain ICO type', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('image/x-icon');
    });

    it('should contain video types', () => {
      expect(SUPPORTED_MIME_TYPES).toContain('video/mp4');
      expect(SUPPORTED_MIME_TYPES).toContain('video/webm');
      expect(SUPPORTED_MIME_TYPES).toContain('video/ogg');
    });
  });

  describe('isMimeTypeSupported()', () => {
    describe('supported types', () => {
      it('should return true for application/pdf', () => {
        expect(isMimeTypeSupported('application/pdf')).toBe(true);
      });

      it('should return true for image/jpeg', () => {
        expect(isMimeTypeSupported('image/jpeg')).toBe(true);
      });

      it('should return true for image/png', () => {
        expect(isMimeTypeSupported('image/png')).toBe(true);
      });

      it('should return true for image/gif', () => {
        expect(isMimeTypeSupported('image/gif')).toBe(true);
      });

      it('should return true for image/webp', () => {
        expect(isMimeTypeSupported('image/webp')).toBe(true);
      });

      it('should return true for image/svg+xml', () => {
        expect(isMimeTypeSupported('image/svg+xml')).toBe(true);
      });

      it('should return true for image/avif', () => {
        expect(isMimeTypeSupported('image/avif')).toBe(true);
      });

      it('should return true for image/bmp', () => {
        expect(isMimeTypeSupported('image/bmp')).toBe(true);
      });

      it('should return true for image/x-icon', () => {
        expect(isMimeTypeSupported('image/x-icon')).toBe(true);
      });

      it('should return true for video/mp4', () => {
        expect(isMimeTypeSupported('video/mp4')).toBe(true);
      });

      it('should return true for video/webm', () => {
        expect(isMimeTypeSupported('video/webm')).toBe(true);
      });

      it('should return true for video/ogg', () => {
        expect(isMimeTypeSupported('video/ogg')).toBe(true);
      });
    });

    describe('unsupported types', () => {
      it('should return false for text/plain', () => {
        expect(isMimeTypeSupported('text/plain')).toBe(false);
      });

      it('should return false for text/html', () => {
        expect(isMimeTypeSupported('text/html')).toBe(false);
      });

      it('should return false for application/json', () => {
        expect(isMimeTypeSupported('application/json')).toBe(false);
      });

      it('should return false for application/javascript', () => {
        expect(isMimeTypeSupported('application/javascript')).toBe(false);
      });

      it('should return false for audio/mpeg', () => {
        expect(isMimeTypeSupported('audio/mpeg')).toBe(false);
      });

      it('should return false for audio/wav', () => {
        expect(isMimeTypeSupported('audio/wav')).toBe(false);
      });

      it('should return false for application/zip', () => {
        expect(isMimeTypeSupported('application/zip')).toBe(false);
      });

      it('should return false for application/octet-stream', () => {
        expect(isMimeTypeSupported('application/octet-stream')).toBe(false);
      });
    });

    describe('edge cases', () => {
      it('should return false for empty string', () => {
        expect(isMimeTypeSupported('')).toBe(false);
      });

      it('should return false for unknown type', () => {
        expect(isMimeTypeSupported('unknown/type')).toBe(false);
      });

      it('should be case sensitive', () => {
        expect(isMimeTypeSupported('IMAGE/JPEG')).toBe(false);
        expect(isMimeTypeSupported('Image/Jpeg')).toBe(false);
      });

      it('should handle mime type with parameters', () => {
        // Standard mime type check doesn't include parameters
        expect(isMimeTypeSupported('image/jpeg; charset=utf-8')).toBe(false);
      });
    });
  });
});




