export const isFunction = (obj: unknown): obj is typeof Function =>
  typeof obj === 'function';
