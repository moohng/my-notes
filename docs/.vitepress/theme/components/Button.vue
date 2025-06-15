<template>
  <button class="my-button" :class="{ primary }">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineProps<{
  // Define any props if needed
  primary?: boolean;
}>();
</script>

<style lang="scss" scoped>
.my-button {
  background-color: var(--vp-button-alt-bg);
  color: var(--vp-button-alt-text);
  border: none;
  text-align: center;
  padding: 0.4em 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.3em;

  &:hover {
    background-color: var(--vp-button-alt-hover-bg); 
  }
  &:active {
    background-color: var(--vp-button-alt-active-bg);
  }

  &.primary {
    color: var(--vp-button-brand-text);
    background-color: var(--vp-button-brand-bg);
  }
  &.primary:hover {
    background-color: var(--vp-button-brand-hover-bg); 
  }
  &.primary:active {
    background-color: var(--vp-button-brand-active-bg);
  }
}
</style>
