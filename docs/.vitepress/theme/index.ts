import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';

import MyButton from './components/Button.vue';

import './global.scss';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 给应用添加全局属性
    app.config.globalProperties.isProd = import.meta.env.PROD; // 判断是否为生产环境
    // 可以在这里注册全局组件或插件
    app.component('MyButton', MyButton);
  },
} as Theme;
