// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import { setProjectAnnotations } from '@storybook/react';
import * as previewAnnotations from './preview';
 
const annotations = setProjectAnnotations([previewAnnotations]);
// Minimal setup for Storybook Vitest browser tests.
// Polyfills missing browser APIs that may not exist in the test environment.

// Polyfill ResizeObserver if absent
declare global {
  interface Window {
    ResizeObserver?: any;
    __VITEST_SETUP__: boolean;
  }
}

if (typeof window !== 'undefined') {
  if (!window.ResizeObserver) {
    // Simple noop ResizeObserver for tests
    window.ResizeObserver = class {
      constructor(_cb?: any) {}
      observe() {}
      unobserve() {}
      disconnect() {}
    } as any;
  }

  // Ensure requestAnimationFrame exists
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 16) as unknown as number;
  }

  // Marker so we can detect this setup ran
  window.__VITEST_SETUP__ = true;
}

export {};
