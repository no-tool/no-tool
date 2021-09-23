import Vue from 'vue'
import Vuex from 'vuex'

import demo from './modules/demo'
import user from './modules/user'
import boxAside from './modules/box-aside'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        demo,
        user,
        boxAside
    }
})