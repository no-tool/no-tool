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

    <ListTree :itemTree="itemTree"/>

    <template v-slot:append>
      <BoxFooter/>
    </template>
  </v-navigation-drawer>
</template>

<script>
import {mapMutations} from 'vuex'

import BoxFooter from './BoxFooter'
import ListTree from '../ListTree'

export default {
  name: 'BoxAside',
  components: {
    BoxFooter,
    ListTree
  },
  data: () => ({
    itemTree: [
      {
        id: '2',
        path: '/t2',
        title: 't2',
        action: 'mdi-silverware-fork-knife',
        children: [
          {
            id: '3',
            path: '/t2-1',
            title: 't2-1',
            action: 'mdi-ticket',
          },
          {
            id: '4',
            path: '/t2-2',
            title: '2-2',
            action: 'mdi-silverware-fork-knife',
            children: [
              {
                id: '5',
                path: '/t2-2-1',
                title: 't2-2-1',
                action: 'mdi-silverware-fork-knife'
              },
              {
                id: '6',
                path: '/t2-2-2',
                title: 't2-2-2',
                action: 'mdi-silverware-fork-knife',
                children: [
                  {
                    id: '7',
                    path: '/t2-2-2-1',
                    title: 't2-2-2-1',
                    action: ''
                  }, {
                    id: '8',
                    path: '/t2-2-2-2',
                    title: 't2-2-2-2',
                    action: 'mdi-silverware-fork-knife'
                  },
                ]
              },
              {
                id: '9',
                path: '/t2-2-3',
                title: 't2-2-3',
                action: 'mdi-silverware-fork-knife',
              },
            ]
          }
        ]
      }
    ]
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