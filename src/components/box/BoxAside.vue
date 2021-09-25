<template>
  <v-navigation-drawer v-model="drawer" app>
    <div class="pa-4 d-flex justify-center">
      <router-link to="/">
        <v-img
            alt="logo_200x200.png"
            max-width="100"
            :src="logoImgSrc"
        />
      </router-link>
    </div>

    <v-divider/>

    <AsideMenu :menu="require('@/assets/mock/aside-menu.json')"/>

    <template v-slot:append>
      <BoxFooter/>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapMutations} from 'vuex'

import BoxFooter from './BoxFooter'
import AsideMenu from "./AsideMenu"

export default {
  name: 'BoxAside',
  components: {
    BoxFooter,
    AsideMenu
  },
  data: () => ({
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.boxAside.drawer
      },
      set(value) {
        this.UPDATE_DRAWER(value)
      }
    },
    logoImgSrc() {
      return this.$vuetify.theme.dark ? require('../../assets/img/no-tool-logo-500x200-white.png') : require('../../assets/img/no-tool-logo-500x200-black.png')
    }
  },
  methods: {
    ...mapMutations('boxAside', ['UPDATE_DRAWER'])
  }
}
</script>

<style scoped>
</style>