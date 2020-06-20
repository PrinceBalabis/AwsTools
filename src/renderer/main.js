import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue) // Install BootstrapVue
Vue.use(IconsPlugin) // Optionally install the BootstrapVue icon components plugin

// plugins/helpers
import plugins from './plugins/helpers';
Vue.use(plugins);

// SVG inline
import { InlineSvgPlugin } from 'vue-inline-svg';
Vue.use(InlineSvgPlugin);

// Eva icons
import EvaIcons from 'vue-eva-icons'
Vue.use(EvaIcons)

// Add Global mixin
import Mixins from './helpers/mixins/Mixins.vue';
Vue.mixin(Mixins);

// Axios
import { setupAxios } from './plugins/axios'
setupAxios();

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: '<App/>'
}).$mount('#app')
