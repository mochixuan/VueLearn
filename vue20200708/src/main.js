import Vue from 'vue'
import App from './App.vue'
import BaseCmp1 from './components/base-cmp1.vue'
import Vuex from 'vuex'
import {storeObj} from './store/store'

Vue.config.productionTip = false
Vue.component('base-cmp1', BaseCmp1)

Vue.use(Vuex);
const store = new Vuex.Store(storeObj);


new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
