<template>
  <v-btn
      :color="color"
      icon
      @click="toggleTheme"
  >
    <v-icon>{{ $vuetify.theme.dark ? "mdi-white-balance-sunny" : "mdi-weather-night" }}</v-icon>
  </v-btn>
</template>

<script>
import {storageConstant} from '@/common/storage-constant.js'
import {mapMutations} from 'vuex'
import storage from "good-storage"

export default {
  name: "ThemeToggle",
  props: {
    color: String
  },
  methods: {
    ...mapMutations('boxAside', ['TOGGLE_DRAWER']),
    toggleTheme() {
      const currentDark = !storage.get(storageConstant.THEME_DARK)
      storage.set(storageConstant.THEME_DARK, currentDark)
      this.$vuetify.theme.dark = currentDark
    }
  }
}
</script>

<style scoped>

</style>