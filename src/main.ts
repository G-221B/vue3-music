import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'normalize.css';
import './style.scss';
import 'virtual:svg-icons-register'; // svg注册
import App from './App.vue';
import SvgIcon from '@/components/SvgIcon/index.vue';
import router from '@/router/index';

const app = createApp(App);
const pinia = createPinia();

// 插件注册
app.use(router);
app.use(pinia);

// 全局组件注册
app.component('SvgIcon', SvgIcon);

app.mount('#app');
