import { renderHook, act } from '@testing-library/react';
import { useDisclosure } from '../useDisclosure';

describe('useDisclosure', () => {
  it('should initialize isOpen false as default', () => {
    // Arrange
    const { result } = renderHook(() => useDisclosure());

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('should initialize isOpen with the value passed with the prop', () => {
    // Arrange
    const { result } = renderHook(() => useDisclosure(true));

    // Assert
    expect(result.current.isOpen).toBe(true);
  });

  it('should open isOpen', () => {
    // Arrange
    const { result } = renderHook(() => useDisclosure());
    
    // Act
    act(() => {
      result.current.open();
    });

    // Assert
    expect(result.current.isOpen).toBe(true);
  });

  it('should close isOpen', () => {
    // Arrange
    const { result } = renderHook(() => useDisclosure(true));

    // Act
    act(() => {
      result.current.close();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });

  it('should toggle isOpen', () => {
    // Arrange
    const { result } = renderHook(() => useDisclosure());

    // Act
    act(() => {
      result.current.toggle();
    });

    // Assert
    expect(result.current.isOpen).toBe(true);

    // Act
    act(() => {
      result.current.toggle();
    });

    // Assert
    expect(result.current.isOpen).toBe(false);
  });
});
