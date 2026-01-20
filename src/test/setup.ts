// Minimal test setup for jsdom environment
// Mock ResizeObserver which isn't provided by jsdom
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// @ts-ignore
global.ResizeObserver = global.ResizeObserver || ResizeObserverMock;

// Provide requestAnimationFrame for tests (jsdom has it but ensure availability)
if (typeof global.requestAnimationFrame === 'undefined') {
  // @ts-ignore
  global.requestAnimationFrame = (cb: FrameRequestCallback) => setTimeout(cb, 0) as any;
}
