<template>
  <input v-model="debouncedValue" placeholder="输入内容" />
  <p>防抖后的值修改看看: {{ debouncedValue }}</p>
</template>

<script>
import { customRef } from "vue";
function useDebouncedRef(initialValue, delay = 300) {
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

export default {
  setup() {
    const debouncedValue = useDebouncedRef("");
    return {
      debouncedValue,
    };
  },
};
</script>
