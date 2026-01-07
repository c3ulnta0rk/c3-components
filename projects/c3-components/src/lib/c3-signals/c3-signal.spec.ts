import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { c3Signal } from './c3-signal';

describe('c3Signal', () => {
  // Since c3Signal uses Angular's effect(), we need to run in injection context
  // For this test, we'll test the basic functionality that doesn't require injection context

  describe('creation', () => {
    it('should create a signal with initial value', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(42);

        expect(signal.get()).toBe(42);
      });
    });

    it('should create a signal with string initial value', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal('hello');

        expect(signal.get()).toBe('hello');
      });
    });

    it('should create a signal with object initial value', () => {
      TestBed.runInInjectionContext(() => {
        const obj = { name: 'test', count: 5 };
        const signal = c3Signal(obj);

        expect(signal.get()).toEqual(obj);
      });
    });

    it('should create a signal with array initial value', () => {
      TestBed.runInInjectionContext(() => {
        const arr = [1, 2, 3];
        const signal = c3Signal(arr);

        expect(signal.get()).toEqual(arr);
      });
    });

    it('should create a signal with null initial value', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal<string | null>(null);

        expect(signal.get()).toBeNull();
      });
    });

    it('should create a signal with undefined initial value', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal<number | undefined>(undefined);

        expect(signal.get()).toBeUndefined();
      });
    });
  });

  describe('get()', () => {
    it('should return the current value', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(100);

        expect(signal.get()).toBe(100);
      });
    });
  });

  describe('set value', () => {
    it('should update the signal value', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(0);

        signal.value = 10;

        expect(signal.get()).toBe(10);
      });
    });

    it('should allow multiple value updates', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(0);

        signal.value = 1;
        signal.value = 2;
        signal.value = 3;

        expect(signal.get()).toBe(3);
      });
    });
  });

  describe('update()', () => {
    it('should update value using function', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(5);

        signal.update((current) => current * 2);

        expect(signal.get()).toBe(10);
      });
    });

    it('should pass current value to update function', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(10);

        signal.update((current) => current + 5);

        expect(signal.get()).toBe(15);
      });
    });

    it('should work with object values', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal({ count: 0 });

        signal.update((current) => ({ count: current.count + 1 }));

        expect(signal.get().count).toBe(1);
      });
    });

    it('should work with array values', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal<number[]>([1, 2]);

        signal.update((current) => [...current, 3]);

        expect(signal.get()).toEqual([1, 2, 3]);
      });
    });
  });

  describe('value$ observable', () => {
    it('should have value$ as an observable', () => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(0);

        expect(signal.value$).toBeDefined();
        expect(typeof signal.value$.subscribe).toBe('function');
      });
    });

    it('should emit values when signal changes', fakeAsync(() => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(0);
        const emittedValues: number[] = [];

        // Subscribe to value$ - it may or may not emit initial value immediately
        signal.value$.subscribe((value) => emittedValues.push(value));
        tick();

        // Trigger change detection to run the effect
        signal.value = 1;
        TestBed.flushEffects();
        tick();

        signal.value = 2;
        TestBed.flushEffects();
        tick();

        // Changes (1, 2) should be emitted
        // Initial value (0) may or may not be emitted depending on implementation
        expect(emittedValues).toContain(1);
        expect(emittedValues).toContain(2);
        // If initial value is emitted, it should be 0
        if (emittedValues.length > 2) {
          expect(emittedValues).toContain(0);
        }
      });
    }));

    it('should emit initial value on subscribe', fakeAsync(() => {
      TestBed.runInInjectionContext(() => {
        const signal = c3Signal(42);
        let emittedValue: number | undefined;

        signal.value$.subscribe((value) => (emittedValue = value));

        // The effect should run and emit the initial value
        TestBed.flushEffects();
        tick();

        expect(emittedValue).toBe(42);
      });
    }));
  });

  describe('type safety', () => {
    it('should maintain type through operations', () => {
      TestBed.runInInjectionContext(() => {
        interface User {
          id: number;
          name: string;
        }

        const userSignal = c3Signal<User>({ id: 1, name: 'John' });

        userSignal.update((user) => ({ ...user, name: 'Jane' }));

        const result = userSignal.get();
        expect(result.id).toBe(1);
        expect(result.name).toBe('Jane');
      });
    });

    it('should work with boolean values', () => {
      TestBed.runInInjectionContext(() => {
        const boolSignal = c3Signal(false);

        expect(boolSignal.get()).toBe(false);

        boolSignal.value = true;

        expect(boolSignal.get()).toBe(true);
      });
    });
  });
});




