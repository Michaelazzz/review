import Vue from 'nativescript-vue'
import App from './components/App'
// import VueDevtools from 'nativescript-vue-devtools'

// Vue.use(VueDevtools)

import store from './store/store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
