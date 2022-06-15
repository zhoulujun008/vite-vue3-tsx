/*
 * @Description: 分享图表 iframe单页面入口
 */

import { createApp } from 'vue';
import App from './pages/panel';
import store from '@/store';
import i18n from './i18n/i18n';
// import Bus from './common/Bus';
window.bkVisionApp = createApp(App)
  .use(store)
  .use(i18n)
  .mount('#app');
// window.bkVisionApp.globalProperties.$Bus = Bus;

