<template>
  <template v-if="!inIFrame">
    <h2>测试</h2>
    <h3>跨域发送postMessage消息</h3>
    <button :class="$style.btn" @click="sendMessage">发送postMessage消息</button>
  </template>

<template v-else>
  <a :href="testUrl" target="_blank">点击这里进行postMessage测试</a>
</template>
</template>

<script lang="ts" setup>
const inIFrame = window.self !== window.top; // 判断是否在iframe中

const testUrl = 'http://demo.codingmo.com/#' + window.location.href; // 目标站点地址

const sendMessage = () => {
  const targetOrigin = '*'; // 替换为目标域名
  const message = { text: 'Hello from another domain!' };
  
  // 发送消息到目标窗口
  window.parent.postMessage(message, targetOrigin);
  console.log('postMessage message sent:', message);
};
</script>

<style module>
.btn {
  padding: 4px 12px;
  border: 1px solid #ccc;
}
</style>
