<template>
  <v-app>
    <BoxAside />
    <BoxHeader />
    <v-main>
      <!-- v-container组件 加 fill-height属性 实现垂直居中 -->
      <v-container>
        <v-scroll-x-transition mode="out-in">
          <router-view />
        </v-scroll-x-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BoxAside from './BoxAside'
import BoxHeader from './BoxHeader'

export default {
  name: "Box",
  data: () => ({
  }),
  components: {
    BoxAside,
    BoxHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
