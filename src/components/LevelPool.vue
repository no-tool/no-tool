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
      return true
    },
    r() {
      let routes = {
        children: _.filter(this.$router.options.routes, item => {
          return !_.isEqual('*', item.path) && !_.isEqual('/', item.path)
        })
      }
      const paths = this.$route.path.replace('/', '').split('/')
      paths.forEach(path => {
        routes.children.forEach(c => {
          if (_.isEqual(c.path.replace('/', ''), path)) {
            routes.children = c.children
          }
        })
      })
      console.log(routes.children)
      console.log(this.$route)
    }
  },
}
</script>

<style scoped>

</style>