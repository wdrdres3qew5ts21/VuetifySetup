// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css'; // Ensure you are using css-loader
import App from './App';
import BannerSlide from './components/BannerSlide';
import NavHeader from './components/NavHeader';
import NavFooter from './components/NavFooter';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.component('NavHeader', NavHeader); //  import component แล้วใส่เข้าไปข้างใน
Vue.component('NavFooter', NavFooter);
Vue.component('BannerSlide', BannerSlide);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //  นำไฟล์ config router มาใส่ข้างใน
  components: {
    App,
  },
  template: '<App/>',
});
