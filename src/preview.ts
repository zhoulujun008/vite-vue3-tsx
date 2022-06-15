/*
 * @Description: 页面预览入口
 */


import store from './store';
import router from './router';
import { createApp } from 'vue';
import './style/index.scss';
import i18n from './i18n/i18n';
import App from './pages/preview';
// import Bus from '@/common/Bus';

window.bkVisionApp = createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');
// window.bkVisionApp.globalProperties.$Bus = Bus;