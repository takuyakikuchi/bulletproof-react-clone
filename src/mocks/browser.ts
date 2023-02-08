import { setupWorker } from 'msw';
import { handlers } from './handlers';

/**
 * This configures a Service Worker with the given request handlers.
 * @see https://mswjs.io/docs/getting-started/integrate/browser#configure-worker
 */ 
export const worker = setupWorker(...handlers);
