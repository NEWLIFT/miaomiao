import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios';
Vue.prototype.axios = axios;
//过滤组件
Vue.filter('setWH',(url , arg)=>{
    return url.replace(/w\.h/,arg);
});
//滑动加载组件
import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);
//Loading组件
import Loading from '@/components/Loading'
Vue.component('Loading' , Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
