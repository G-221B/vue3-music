import { createApp } from 'vue';
import { createPinia } from 'pinia';

import 'normalize.css';
import './style.scss';
import App from './App.vue';
import router from '@/router/index';

const app = createApp(App);
const pinia = createPinia();

// 插件注册
app.use(router);
app.use(pinia);

app.mount('#app');
