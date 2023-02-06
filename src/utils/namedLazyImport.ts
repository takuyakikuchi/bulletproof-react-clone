import React from 'react';

/**
 * An abstraction function to import a named module with React.lazy
 * @see https://github.com/facebook/react/issues/14603#issuecomment-726551598
 * @example const { Home } = named:azyImport(() => import("./Home.tsx"), "Home");
 */
export function namedLazyImport<
  T extends React.ComponentType<unknown>,
  I extends { [K2 in K]: T },
  K extends keyof I
>(
  factory: () => Promise<I>, 
  name: K
): I {
  return Object.create({
    [name]: React.lazy(() => factory().then((module) => ({ default: module[name]}))),
  });
}
