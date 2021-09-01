import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'


/*
 * Includes and Imports
 */


/*
 * Settings
 */

// Force SSL
if(window.location.protocol != "https:" && window.location.hostname.indexOf('localhost')===-1) {
  location.replace(`https:${location.href.substring(location.protocol.length)}`)  
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
