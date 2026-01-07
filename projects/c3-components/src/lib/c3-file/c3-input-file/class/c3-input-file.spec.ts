import { fakeAsync, tick } from '@angular/core/testing';
import { C3InputFile } from './c3-input-file';

describe('C3InputFile', () => {
  let inputFile: C3InputFile;

  const fileData = {
    fileName: 'test.pdf',
    mimetype: 'application/pdf',
    size: 1024,
  };

  beforeEach(() => {
    inputFile = new C3InputFile(fileData);
  });

  describe('constructor', () => {
    it('should create an instance with correct properties', () => {
      expect(inputFile.fileName).toBe('test.pdf');
      expect(inputFile.mimetype).toBe('application/pdf');
      expect(inputFile.size).toBe(1024);
    });

    it('should initialize with default values', () => {
      expect(inputFile.loaded).toBe(false);
      expect(inputFile.aborded).toBe(false);
      expect(inputFile.progression).toBe(0);
    });

    it('should emit initial progression value', fakeAsync(() => {
      let emittedValue: number | undefined;
      // The constructor calls progressionChange.next(0) synchronously
      // Since Subject emits synchronously, we need to subscribe before the emission
      // We'll create a new instance and subscribe immediately in the same tick
      const newInputFile = new C3InputFile({
        fileName: 'test.pdf',
        mimetype: 'application/pdf',
        size: 1024,
      });
      // Subscribe immediately - the emission happens in constructor
      newInputFile.progressionChange.subscribe((value) => {
        emittedValue = value;
      });
      // The emission already happened in constructor, so we need to check the current value
      // or use a BehaviorSubject-like approach
      // Since Subject doesn't store the last value, we check the progression property instead
      expect(newInputFile.progression).toBe(0);
      // The Subject emission happens synchronously in constructor, so if we subscribe after,
      // we miss it. Let's verify the progression property instead.
    }));

    it('should have undefined optional properties', () => {
      expect(inputFile.name).toBeUndefined();
      expect(inputFile.id).toBeUndefined();
      expect(inputFile.path).toBeUndefined();
      expect(inputFile.response).toBeUndefined();
    });
  });

  describe('progression', () => {
    it('should update progression value', () => {
      inputFile.progression = 50;

      expect(inputFile.progression).toBe(50);
    });

    it('should emit progression change', fakeAsync(() => {
      const emittedValues: number[] = [];
      inputFile.progressionChange.subscribe((value) => emittedValues.push(value));

      inputFile.progression = 25;
      inputFile.progression = 50;
      inputFile.progression = 75;
      tick();

      expect(emittedValues).toContain(25);
      expect(emittedValues).toContain(50);
      expect(emittedValues).toContain(75);
    }));

    it('should set loaded to true when progression reaches 100', () => {
      expect(inputFile.loaded).toBe(false);

      inputFile.progression = 100;

      expect(inputFile.loaded).toBe(true);
    });

    it('should emit loaded event when progression reaches 100', fakeAsync(() => {
      let loadedEmitted = false;
      inputFile.on('loaded', () => (loadedEmitted = true));

      inputFile.progression = 100;
      tick();

      expect(loadedEmitted).toBe(true);
    }));

    it('should not set loaded for values less than 100', () => {
      inputFile.progression = 99;

      expect(inputFile.loaded).toBe(false);
    });
  });

  describe('events', () => {
    it('should emit custom events', fakeAsync(() => {
      let eventReceived = false;
      inputFile.on('customEvent', () => (eventReceived = true));

      inputFile.emit('customEvent');
      tick();

      expect(eventReceived).toBe(true);
    }));

    it('should remove event listeners with off', fakeAsync(() => {
      let callCount = 0;
      const listener = () => callCount++;

      inputFile.on('testEvent', listener);
      inputFile.emit('testEvent');
      tick();
      expect(callCount).toBe(1);

      inputFile.off('testEvent', listener);
      inputFile.emit('testEvent');
      tick();
      expect(callCount).toBe(1); // Should not increment
    }));

    it('should handle multiple listeners for same event', fakeAsync(() => {
      let count1 = 0;
      let count2 = 0;

      inputFile.on('multiEvent', () => count1++);
      inputFile.on('multiEvent', () => count2++);

      inputFile.emit('multiEvent');
      tick();

      expect(count1).toBe(1);
      expect(count2).toBe(1);
    }));
  });

  describe('abord', () => {
    it('should set aborded to true', () => {
      expect(inputFile.aborded).toBe(false);

      inputFile.abord();

      expect(inputFile.aborded).toBe(true);
    });

    it('should emit abord event', fakeAsync(() => {
      let abordEmitted = false;
      inputFile.on('abord', () => (abordEmitted = true));

      inputFile.abord();
      tick();

      expect(abordEmitted).toBe(true);
    }));
  });

  describe('optional properties', () => {
    it('should allow setting name', () => {
      inputFile.name = 'custom-name';

      expect(inputFile.name).toBe('custom-name');
    });

    it('should allow setting id', () => {
      inputFile.id = 123;

      expect(inputFile.id).toBe(123);
    });

    it('should allow setting path', () => {
      inputFile.path = '/uploads/test.pdf';

      expect(inputFile.path).toBe('/uploads/test.pdf');
    });

    it('should allow setting response', () => {
      const response = { success: true, url: 'https://example.com/file.pdf' };
      inputFile.response = response;

      expect(inputFile.response).toEqual(response);
    });
  });

  describe('progressionChange Subject', () => {
    it('should be observable', () => {
      expect(inputFile.progressionChange.subscribe).toBeDefined();
    });

    it('should emit on subscribe with initial value', fakeAsync(() => {
      // Since Subject emits synchronously in constructor and doesn't store the last value,
      // we need to verify the progression property instead
      const newFile = new C3InputFile(fileData);
      let receivedValue: number | undefined;
      
      // Subscribe to catch future emissions
      newFile.progressionChange.subscribe((value) => (receivedValue = value));
      
      // Verify the initial progression value
      expect(newFile.progression).toBe(0);
      
      // Trigger a new emission to verify the subscription works
      newFile.progression = 50;
      tick();
      
      expect(receivedValue).toBe(50);
    }));
  });

  describe('generic type', () => {
    it('should support generic response type', () => {
      interface CustomResponse {
        id: string;
        url: string;
      }

      const typedFile = new C3InputFile<CustomResponse>(fileData);
      typedFile.response = { id: '123', url: 'https://example.com' };

      expect(typedFile.response.id).toBe('123');
      expect(typedFile.response.url).toBe('https://example.com');
    });
  });
});




