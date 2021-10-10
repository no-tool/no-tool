<template>
  <div>
    <v-list
        v-if="routes"
        expand
        dense
        nav
    >
      <div v-for="level1 in routes" :key="level1.path">
        <v-list-item v-if="!level1.children" :to="level1.path">
          <v-list-item-icon>
            <v-icon>{{ level1.meta.mdi }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ level1.meta.title }}</v-list-item-title>
        </v-list-item>

        <v-list-group
            v-if="level1.children"
            :group="level1.path"
            :prepend-icon="level1.meta.mdi"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ level1.meta.title }}</v-list-item-title>
          </template>

          <div v-for="level2 in level1.children" :key="`${level1.path}/${level2.path}`">
            <v-list-item v-if="!level2.children" :to="`${level1.path}/${level2.path}`">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ level2.meta.title }}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{ level2.meta.mdi }}</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-group
                v-if="level2.children"
                :group="`${level1.path}/${level2.path}`"
                no-action
                sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ level2.meta.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  v-for="level3 in level2.children" :key="`${level1.path}/${level2.path}/${level3.path}`"
                  :to="`${level1.path}/${level2.path}/${level3.path}`"
              >
                <v-list-item-title>{{ level3.meta.title }}</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>{{ level3.meta.mdi }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-group>
          </div>

        </v-list-group>
      </div>
    </v-list>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "AsideMenu",
  computed: {
    routes() {
      return _.filter(this.$router.options.routes, item => {
        return !_.isEqual('*', item.path)
      })
    }
  }
}
</script>

<style scoped>

</style>