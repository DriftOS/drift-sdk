import { DriftClient } from './client';
export { DriftClient } from './client';
export * from './types';

// Convenience factory
export function createDriftClient(baseUrl: string, apiKey?: string) {
  return new DriftClient({ baseUrl, apiKey });
}