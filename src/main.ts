import App from './pages/main';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import './style/index.scss';
// // 全量引入 bkui-vue
// import bkui from 'bkui-vue'
// // 全量引入 bkui-vue 样式
import 'bkui-vue/dist/style.css';
createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
