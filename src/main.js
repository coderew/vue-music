// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import router from './router'
import store from './store'

import 'src/common/stylus/index.styl'
/*  eslint-disable no-unused-vars */
import VConsole from 'vconsole'
console.log('test')

fastclick.attach(document.body)
Vue.use(VueLazyload, {
    loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
