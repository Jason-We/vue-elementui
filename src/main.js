import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import JsonExcel from 'vue-json-excel'
import excel_export from './utils/excel_export'
import Print from 'vue-print-nb'
Vue.use(Print);

Vue.config.productionTip = false
Vue.component('downloadExcel', JsonExcel)
Vue.prototype.excel_export = excel_export
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
