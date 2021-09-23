import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/scroll-reset.css'
import '@mdi/font/css/materialdesignicons.css'
import colors from 'vuetify/lib/util/colors'
import storage from 'good-storage'
import {storageConstant} from '@/common/storage-constant.js'

Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi'
    },
    theme: {
        dark: storage.get(storageConstant.THEME_DARK, true),
        themes: {
            light: {
                'bg-color': '#f5f5f5',
                'header-icon': colors.grey.lighten5,
                'heart': colors.pink.lighten2
            },
            dark: {
                'heart': colors.pink.lighten2
            }
        }
    }
}

export default new Vuetify(opts)