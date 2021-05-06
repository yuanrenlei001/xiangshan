// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import echarts from 'echarts'
import App from './App'
import router from './router'
Vue.prototype.$echarts = echarts
Vue.use(ElementUI);
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title;
        Vue.prototype.title = to.meta.title;
    }
    const type = to.meta.type
    // 判断该路由是否需要登录权限
    next()
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
