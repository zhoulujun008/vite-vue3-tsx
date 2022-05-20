import App from './App'
import store from './store'
import router from './router'
import { createApp } from 'vue'
// // 全量引入 bkui-vue
// import bkui from 'bkui-vue'
// // 全量引入 bkui-vue 样式
// import 'bkui-vue/dist/style.css'
createApp(App)
    .use(router)
    .use(store)
    // .use(bkui)
    .mount('#app')
