import Vue from 'vue'
import App from './App.vue'
import storage from 'good-storage'
import {storageConstant} from './common/storage-constant.js'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import Message from "vue-m-message" // https://mengdu.github.io/m-message/index.html#/
import 'vue-m-message/dist/index.css'

Vue.config.productionTip = false

Vue.use(Message)

new Vue({
    render: h => h(App),
    router,
    store,
    vuetify,
    mounted() {
        if (!storage.has(storageConstant.THEME_DARK)) {
            storage.set(storageConstant.THEME_DARK, true)
        }
    }
}).$mount('#app')
