import { TestBed } from '@angular/core/testing';
import {
  ApplicationRef,
  Component,
  ComponentRef,
  Renderer2,
  RendererFactory2,
  PLATFORM_ID,
} from '@angular/core';
import { C3InjectorService } from './injector';

@Component({
  selector: 'test-injected',
  template: '<div class="test-injected">Injected Component</div>',
  standalone: true,
})
class TestInjectedComponent {}

describe('C3InjectorService', () => {
  let service: C3InjectorService;
  let applicationRef: ApplicationRef;
  let rendererSpy: jasmine.SpyObj<Renderer2>;
  let attachViewSpy: jasmine.Spy;
  let detachViewSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.resetTestingModule();
    
    rendererSpy = jasmine.createSpyObj('Renderer2', [
      'createElement',
      'createText',
      'appendChild',
      'insertBefore',
      'removeChild',
      'selectRootElement',
      'setAttribute',
      'removeAttribute',
      'setStyle',
      'removeStyle',
      'setProperty',
      'removeProperty',
      'addClass',
      'removeClass',
      'setValue',
      'listen',
      'parentNode',
      'nextSibling',
      'querySelector',
      'querySelectorAll',
      'destroy',
    ]);

    const mockContainer = document.createElement('div');
    const mockTextNode = document.createTextNode('');
    rendererSpy.createElement.and.returnValue(mockContainer);
    rendererSpy.createText.and.returnValue(mockTextNode);
    rendererSpy.selectRootElement.and.returnValue(mockContainer);
    // Make appendChild actually append to simulate real behavior
    // Make appendChild actually append to document.body to simulate real behavior
    rendererSpy.appendChild.and.callFake((parent: any, child: any) => {
      if (parent === document.body && child) {
        document.body.appendChild(child);
      }
    });

    const rendererFactory = {
      createRenderer: () => rendererSpy,
    };

    TestBed.configureTestingModule({
      providers: [
        C3InjectorService,
        { 
          provide: RendererFactory2, 
          useValue: rendererFactory,
        },
        {
          provide: Renderer2,
          useFactory: (factory: RendererFactory2) => factory.createRenderer(null, null),
          deps: [RendererFactory2],
        },
        { provide: PLATFORM_ID, useValue: 'browser' },
      ],
    });

    applicationRef = TestBed.inject(ApplicationRef);
    attachViewSpy = spyOn(applicationRef, 'attachView').and.callThrough();
    detachViewSpy = spyOn(applicationRef, 'detachView').and.callThrough();
    service = TestBed.inject(C3InjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('injectComponent()', () => {
    it('should create container element', () => {
      service.injectComponent(TestInjectedComponent);

      expect(rendererSpy.createElement).toHaveBeenCalledWith('div');
    });

    it('should attach view to application ref', () => {
      const result = service.injectComponent(TestInjectedComponent);

      expect(attachViewSpy).toHaveBeenCalled();
    });

    it('should return ComponentRef', () => {
      const result = service.injectComponent(TestInjectedComponent);

      expect(result).toBeDefined();
    });
  });

  describe('removeComponent()', () => {
    it('should detach view from application ref', () => {
      const componentRef = service.injectComponent(TestInjectedComponent);
      if (!componentRef) {
        fail('ComponentRef should be defined');
        return;
      }

      // Reset spy to only count calls from removeComponent
      detachViewSpy.calls.reset();
      const destroySpy = spyOn(componentRef, 'destroy');

      service.removeComponent(componentRef);

      expect(detachViewSpy).toHaveBeenCalledWith(componentRef.hostView);
      expect(destroySpy).toHaveBeenCalled();
    });

    it('should destroy the component', () => {
      const componentRef = service.injectComponent(TestInjectedComponent);
      if (!componentRef) {
        fail('ComponentRef should be defined');
        return;
      }

      const destroySpy = spyOn(componentRef, 'destroy');

      service.removeComponent(componentRef);

      expect(destroySpy).toHaveBeenCalled();
    });

    it('should remove element from DOM', () => {
      const componentRef = service.injectComponent(TestInjectedComponent);
      if (!componentRef) {
        fail('ComponentRef should be defined');
        return;
      }

      // Verify element is in DOM
      const element = componentRef.location.nativeElement;
      expect(element.parentNode).toBeTruthy();
      expect(element.parentNode).toBe(document.body);

      // Create spy before calling removeComponent
      const parentNode = element.parentNode as Node;
      const removeChildSpy = spyOn(parentNode, 'removeChild').and.callThrough();

      service.removeComponent(componentRef);

      expect(removeChildSpy).toHaveBeenCalledWith(element);
    });

    it('should handle element without parent node', () => {
      const componentRef = service.injectComponent(TestInjectedComponent);
      if (!componentRef) {
        fail('ComponentRef should be defined');
        return;
      }

      // Remove parent node
      const parentNode = componentRef.location.nativeElement.parentNode;
      if (parentNode) {
        parentNode.removeChild(componentRef.location.nativeElement);
      }

      const destroySpy = spyOn(componentRef, 'destroy');

      // Should not throw
      expect(() => service.removeComponent(componentRef)).not.toThrow();
      expect(destroySpy).toHaveBeenCalled();
    });
  });
});

describe('C3InjectorService on server', () => {
  let service: C3InjectorService;
  let rendererSpy: jasmine.SpyObj<Renderer2>;

  beforeEach(() => {
    TestBed.resetTestingModule();
    
    rendererSpy = jasmine.createSpyObj('Renderer2', [
      'createElement',
      'appendChild',
      'addClass',
    ]);

    const rendererFactory = {
      createRenderer: () => rendererSpy,
    };

    TestBed.configureTestingModule({
      providers: [
        C3InjectorService,
        { 
          provide: RendererFactory2, 
          useValue: rendererFactory,
        },
        {
          provide: Renderer2,
          useFactory: (factory: RendererFactory2) => factory.createRenderer(null, null),
          deps: [RendererFactory2],
        },
        { provide: PLATFORM_ID, useValue: 'server' },
      ],
    });

    service = TestBed.inject(C3InjectorService);
  });

  it('should return void on server platform', () => {
    const result = service.injectComponent(TestInjectedComponent);

    expect(result).toBeUndefined();
  });
});

