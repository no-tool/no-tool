<template>
  <v-app-bar
      app
      flat
      shrink-on-scroll
      :src="headerBgImg"
      scroll-threshold="500"
  >
    <v-btn
        v-if="$vuetify.breakpoint.mobile"
        color="header-icon"
        icon
        @click="TOGGLE_DRAWER"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      class="header-icon"
      @click="TOGGLE_DRAWER"
    /> -->
    <!-- <v-app-bar-title>IACG</v-app-bar-title> -->
    <v-app-bar-title>
      <router-link to="/">
        <v-img
            alt="logo_32x32.png"
            max-height="32"
            max-width="32"
            :src="require('../../assets/img/logo_32x32.png')"
        />
      </router-link>
    </v-app-bar-title>

    <v-spacer/>

    <div>
      <v-btn
          color="header-icon"
          icon
          :to="{
            path: '/edit',
            query: {
              height: $vuetify.breakpoint.height - 128 - 12 * 2
            }
          }"
      >
        <v-icon>mdi-pencil-outline</v-icon>
      </v-btn>

      <ThemeToggle color="header-icon"/>

      <v-btn color="header-icon" icon @click="isOpenSearchDialog = true">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>

    <!-- 搜索 search dialog -->
    <v-dialog
        v-model="isOpenSearchDialog"
        scrollable
        :fullscreen="$vuetify.breakpoint.mobile"
        :transition="
          $vuetify.breakpoint.mobile ? 'dialog-bottom-transition' : undefined
        "
        :max-width="$vuetify.breakpoint.mobile ? undefined : '1150px'"
    >
      <v-card>
        <v-card-title>
          <v-icon>SEARCH</v-icon>
          <v-spacer/>
          <v-btn icon @click="isOpenSearchDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <GlobalSearch :ext-height="62"/>
        </v-card-text>
        <!-- <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text>
                  I accept
                </v-btn>
              </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import GlobalSearch from '../GlobalSearch'
import ThemeToggle from "@/components/ThemeToggle"
import {mapMutations} from "vuex";

export default {
  name: 'BoxHeader',
  components: {
    GlobalSearch,
    ThemeToggle
  },
  data: () => ({
    isOpenSearchDialog: false,
    isOpenContributionDialog: false
  }),
  computed: {
    headerBgImg() {
      return this.$vuetify.theme.dark ? require('@/assets/img/header_bg_1920x128_yande.re.620509_lazy.png') : require('@/assets/img/header_bg_1920x128_yande.re.620509.png')
    }
  },
  methods: {
    ...mapMutations('boxAside', ['TOGGLE_DRAWER'])
  }
}
</script>

<style scoped>
</style>