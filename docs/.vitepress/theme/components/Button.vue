<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.my-button {
  background-color: var(--vp-button-brand-bg);
  border: none;
  color: var(--vp-button-brand-text);
  text-align: center;
  padding: 0.4em 0.8em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  border-radius: 0.3em;

  &:hover {
    background-color: var(--vp-button-brand-hover-bg); 
  }
  &:active {
    background-color: var(--vp-button-brand-active-bg);
  }
}
</style>
