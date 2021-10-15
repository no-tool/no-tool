<template>
  <div>
    <LevelPool/>
    <v-scroll-x-transition mode="out-in">
      <router-view/>
    </v-scroll-x-transition>
  </div>
</template>

<script>
import LevelPool from "@/components/LevelPool"

export default {
  name: 'Level1',
  components: {
    LevelPool
  }
}
</script>

<style scoped>

</style>