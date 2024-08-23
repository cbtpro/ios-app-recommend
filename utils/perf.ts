export function debounce<T extends (...args: any[]) => any>(
  fn: T, 
  delay: number, 
  immediate: boolean = false
): (...args: Parameters<T>) => void {
  let timeoutId: number | undefined;

  return (...args: Parameters<T>) => {
    const callNow = immediate && !timeoutId;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => {
      timeoutId = undefined;
      if (!immediate) {
        fn(...args);
      }
    }, delay);

    if (callNow) {
      fn(...args);
    }
  };
}

export default { debounce };
