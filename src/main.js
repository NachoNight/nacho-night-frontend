import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import peerConnect from './middleware/peerConnect';

Vue.mixin({
  methods: {
    peerId: peerConnect,
  },
});

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
