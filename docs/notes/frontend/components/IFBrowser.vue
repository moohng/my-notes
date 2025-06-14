<template>
  <template v-if="inIFrame">
    <slot></slot>
  </template>

  <template v-else>
    <a :href="testUrl" target="_blank">点击这里进行postMessage测试</a>
  </template>
</template>

<script lang="ts" setup>
const inIFrame = window.self !== window.top; // 判断是否在iframe中

const testUrl = 'http://demo.codingmo.com/#' + window.location.href; // 目标站点地址
</script>
