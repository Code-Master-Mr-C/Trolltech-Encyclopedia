import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueTouch from 'vue-touch'
import VueLazyload from 'vue-lazyload'

import selected from "./views/selected/index.vue"
Vue.use(VueLazyload,{
  preLoad: 1,
  error: 'dist/error.png',
  loading: '../assets/5-121204193R5-50.gif',
  attempt: 3
})
Vue.use(VueTouch, {name: 'v-touch'});
Vue.use(VueAxios, axios);
Vue.use(VueRouter);
const routes = [{
	path: "/selected",
	component:selected
},{
	path: "/video",
	component:require("./views/video/index.vue")
},{
	path: "/satin",
	component:require("./views/satin/index.vue")
},{
	path: "/find",
	component:require("./views/find/index.vue")
},
{ path: '*', redirect: '/selected' }];

const router = new VueRouter({
	routes:routes
})
new Vue({
  el: '#app',
  router,
 components:{
 	app
 }
});
window.router = router;
