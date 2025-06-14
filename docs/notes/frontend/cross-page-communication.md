---
title: 浏览器跨页面通信
---

# {{ $frontmatter.title }}

跨页面通信通常是指不同标签页、不同窗口以及页面与iframe之间的通信。
  
常见的通信方式有以下几种：

**同源**

- cookie：一般前端不允许操作cookie，常用于客户端页面之间同步登录状态；
- localStorage/sessionStorage <Badge type="tip" text="推荐" />：通过 `storage` 事件进行实时数据同步，有大小限制；
- BroadcastChannel <Badge type="tip" text="推荐" />：html5新增的API，通过广播与监听进行通信；
- SharedWorker：SharedWorker作为中间人，转发消息；

**跨域**

- URL参数：简单直接，有长度限制，不安全，一次性单向传递；
- postMessage <Badge type="tip" text="推荐" />：目前比较推荐的一种跨页面通信方案；

## WebStorage通信

在同源页面之间，如果需要存储数据可以选择此方案。比如：主题同步、配置信息同步。

```javascript
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = localStorage.getItem('test-switch-theme');
// 存储
localStorage.setItem('test-switch-theme', theme === 'auto' ? (isDark ? 'light' : 'dark') : (theme === 'light' ? 'dark' : 'light'));

// 监听
window.addEventListener('storage', function(e) {
  if (e.key === 'test-switch-theme') {
    console.log(e.newValue);
    document.querySelector('.VPSwitchAppearance')?.click();
  }
});
```

将当前页面用一个新标签页/窗口打开，然后点击下面按钮进行测试。

<button @click="switchTheme">主题切换</button>

<p v-if="theme">这条消息只会在另一侧窗口发生变化：{{ theme }}</p>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const theme = ref('');

onMounted(() => {
  // 监听
  window.addEventListener('storage', function(e) {
    if (e.key === 'test-switch-theme') {
      console.log(e.newValue);
      theme.value = e.newValue;
      document.querySelector('.VPSwitchAppearance')?.click();
    }
  });
});

const switchTheme = () => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = localStorage.getItem('test-switch-theme');
  // 存储
  localStorage.setItem('test-switch-theme', theme === 'auto' ? (isDark ? 'light' : 'dark') : (theme === 'light' ? 'dark' : 'light'));
};
</script>

## BroadcastChannel通信

## PostMessage通信
