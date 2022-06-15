import App from './pages/main';
import store from './store';
import router from './router';
import { createApp } from 'vue';
import './style/index.scss';
import i18n from './i18n/i18n';
// import { useI18n } from 'vue-i18n';
// const { t } = useI18n();
window.bkVisionApp = createApp(App)
  .use(router)
  .use(store)
  .use(i18n)
  .mount('#app');
// window.bkVisionApp.globalProperties.$t = t;
