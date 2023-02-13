import { useState, useCallback } from 'react';

/**
 * A hook to manage the state of a disclosure component.
 */
export const useDisclosure = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(!isOpen), []);

  return { isOpen, open, close, toggle };
}
