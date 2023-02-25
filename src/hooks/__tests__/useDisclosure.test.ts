import { renderHook, act } from '@testing-library/react-hooks';
import { useDisclosure } from '../useDisclosure';

test('should define initial state', () => {
  // Using the default prop value
  const { result } = renderHook(() => useDisclosure());
  expect(result.current.isOpen).toBe(false);

  const { result: resultTwo } = renderHook(() => useDisclosure(true));
  expect(resultTwo.current.isOpen).toBe(true);
});

test('open should make isOpen true', () => {
  const { result } = renderHook(() => useDisclosure());
  
  act(() => {
    result.current.open();
  });

  expect(result.current.isOpen).toBe(true);
});

test('close should make isOpen false', () => {
  const { result } = renderHook(() => useDisclosure(true));

  act(() => {
    result.current.close();
  });

  expect(result.current.isOpen).toBe(false);
});

test('toggle should reverse isOpen value', () => {
  const { result } = renderHook(() => useDisclosure());

  act(() => {
    result.current.toggle();
  });
  expect(result.current.isOpen).toBe(true);

  act(() => {
    result.current.toggle();
  });
  expect(result.current.isOpen).toBe(false);
});
