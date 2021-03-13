// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import axios from 'axios'
import VueAxios from 'vue-axios'
import myHeader from './components/MyHeader'
import myContent from './components/MyContent'
import myFooter from './components/MyFooter'

Vue.use(ViewUI);
Vue.use(VueAxios, axios);
axios.defaults.baseURL = 'http://localhost:8081'
Vue.config.productionTip = false

Vue.component('myHeader', myHeader)
Vue.component('myContent', myContent)
Vue.component('myFooter', myFooter)

/* eslint-disable no-new */
new Vue(
  {
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
  }
)
