import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFilm, faStar, faCirclePlay, faHeart, faArrowLeftLong, faMagnifyingGlass, faEarthAmerica } from '@fortawesome/free-solid-svg-icons';
import {faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import "@/assets/css/styles.css";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

library.add(faFilm, faStar, faCirclePlay, faHeart, faArrowLeftLong, faMagnifyingGlass, faFacebookSquare, faInstagram, faTwitter, faEarthAmerica);

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
