<template>
  <div v-if="notFinal">
    {{ c }}
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "LevelPool",
  computed: {
    notFinal() {
      return !this.$route.meta.liveOn
    },
    c() {
      let children = _.filter(this.$router.options.routes, item => {
        return !_.isEqual('*', item.path) && !_.isEqual('/', item.path)
      })
      const paths = this.$route.path.replace('/', '').split('/')
      paths.forEach(path => {
        children.forEach(c => {
          if (_.isEqual(c.path.replace('/', ''), path)) {
            children = c.children
          }
        })
      })
      console.log(children)
      console.log(this.$route)
      return children
    }
  },
}
</script>

<style scoped>

</style>