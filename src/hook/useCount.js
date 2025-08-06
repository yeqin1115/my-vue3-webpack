import { customRef } from "vue";
export function useDebouncedRef(initialValue, delay = 1000) {
  let timeout;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return initialValue;
      },
      set(newValue) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          initialValue = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
