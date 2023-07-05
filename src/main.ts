import { createApp } from 'vue';
import 'normalize.css';
import './style.scss';
import App from './App.vue';
import router from './router/index';

const app = createApp(App);

// 插件注册
app.use(router);

app.mount('#app');
