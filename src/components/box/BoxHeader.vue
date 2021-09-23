<template>
  <v-app-bar
      app
      flat
      hide-on-scroll
  >
    <v-btn
        v-if="$vuetify.breakpoint.mobile"
        icon
        @click="TOGGLE_DRAWER"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <!-- <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.mobile"
      @click="TOGGLE_DRAWER"
    /> -->
    <!-- <v-app-bar-title>IACG</v-app-bar-title> -->

    <v-spacer/>

    <div>
      <ThemeToggle/>

      <v-btn icon @click="isOpenSearchDialog = true">
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
  computed: {},
  methods: {
    ...mapMutations('boxAside', ['TOGGLE_DRAWER'])
  }
}
</script>

<style scoped>
</style>