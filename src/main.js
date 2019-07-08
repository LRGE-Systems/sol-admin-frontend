import Vue from 'vue'

import './boot'
import app from './app'
import View from './view.vue'
// import router from './router'
import './registerServiceWorker'

// View.router = app.router
// app.vm = new Vue(View).$mount('#view')

// Vue.config.productionTip = false


// update leaflet icons on boot
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

app.vm = new Vue({
  router: app.router,
  render: h => h(View),
}).$mount('#view')
