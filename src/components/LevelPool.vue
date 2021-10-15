<template>
  <div v-if="notFinal">
    <div v-if="children[0].children" v-for="child in children" :key="child.path">
      <v-subheader><router-link :to="`${$route.path}/${child.path}`" class="text-decoration-none">{{ child.meta.title }}</router-link></v-subheader>
      <v-row>
        <v-col cols="12" lg="6" v-for="(last, index) in child.children" :key="index">
          <router-link :to="`${$route.path}/${child.path}/${last.path}`" class="text-decoration-none d-flex">
            <span>{{ last.meta.title }}</span>
            <v-spacer/>
            <span>{{ last.meta.liveOn }}</span>
          </router-link>
        </v-col>
      </v-row>
    </div>
    <v-row v-else>
      <v-col cols="12" lg="6" v-for="(last, index) in children" :key="index">
        <router-link :to="`${$route.path}/${last.path}`" class="text-decoration-none d-flex">
          <span>{{ last.meta.title }}</span>
          <v-spacer/>
          <span>{{ last.meta.liveOn }}</span>
        </router-link>
      </v-col>
    </v-row>
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
    children() {
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