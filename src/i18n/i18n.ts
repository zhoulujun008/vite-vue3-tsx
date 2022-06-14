import Vue from 'vue';
import VueI18n from 'vue-i18n';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'; // import locale
import { getCookie } from '@/utils';
import chineseJson from '../lang/zh-cn.json';
import englishJson from '../lang/en.json';
Vue.use(VueI18n);
let currentLang = getCookie('blueking_language') || 'zhCN';
if (currentLang === 'en') {
  currentLang = 'enUS';
  dayjs.locale('en');
} else {
  currentLang = 'zhCN';
  dayjs.locale('zh-cn');
}
const i18n = new VueI18n({
  locale: getCookie('blueking_language') || 'zh-cn',
  fallbackLocale: 'zh-cn',
  silentTranslationWarn: true,
  messages: {
    en: { ...englishJson },
    'zh-cn': { ...chineseJson },
  },
});
window.i18n = i18n;
export default i18n;
