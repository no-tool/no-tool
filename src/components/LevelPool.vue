<template>
  <div v-if="notFinal">level pool {{ r }}</div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "LevelPool",
  mounted() {
    // const route = this.$route
    // console.log(this.$router)
    // console.log(route)
    // const paths = route.path.replace('/', '').split('/')
    // console.log(paths)
    // const toolRoutes = _.filter(this.$router.options.routes, item => {
    //   return !_.isEqual('*', item.path) && !_.isEqual('/', item.path)
    // })
    // console.log(toolRoutes)
    // _.forEach(paths, (p, i) => {
    //   console.log(p, i)
    // })


  },
  computed: {
    notFinal() {
      return false
    },
    r() {
      const toolRoutes = _.filter(this.$router.options.routes, item => {
        return !_.isEqual('*', item.path) && !_.isEqual('/', item.path)
      })
      let routes = {
        children: toolRoutes
      };
      const route = this.$route.matched;
      for (let i = 0; i < route.length - 1; i++) {
        routes = routes.children.find((e) => (e.name === route[i].name));
      }
      console.log(routes.children)
    }
  }
}
</script>

<style scoped>

</style>