export const initMock = async () => {
  if (import.meta.env.MODE === 'development') {
    const { worker } = await import('@/mocks/browser');
    worker.start();
  }
}
