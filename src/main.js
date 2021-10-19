import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import MyPlugin from "./utils/antd.js";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import JImage from '@/components/image'
Vue.use(JImage);
// Vue.use(MyPlugin)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
