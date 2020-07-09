import Vue from 'vue'
import App from './App.vue'
import BaseCmp1 from './components/base-cmp1.vue'

Vue.config.productionTip = false

Vue.component('base-cmp1', BaseCmp1)

new Vue({
  render: h => h(App),
}).$mount('#app')
