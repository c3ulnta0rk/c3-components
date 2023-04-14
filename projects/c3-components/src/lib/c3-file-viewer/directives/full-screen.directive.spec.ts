import { ElementRef } from '@angular/core';
import { FullScreenDirective } from './full-screen.directive';
import { TestBed } from '@angular/core/testing';

describe('FullScreenDirective', () => {
  it('should create an instance', () => {
    const el = TestBed.inject(ElementRef);
    const directive = new FullScreenDirective(el);
    expect(directive).toBeTruthy();
  });
});
