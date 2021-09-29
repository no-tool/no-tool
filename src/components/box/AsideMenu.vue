<template>
  <div>
    <v-list
        v-if="menu"
        expand
        dense
        nav
    >
      <div v-for="level1 in menu" :key="level1.path">
        <v-list-item v-if="!level1.children" :to="level1.path">
          <v-list-item-icon>
            <v-icon>{{ level1.mdi }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ level1.title }}</v-list-item-title>
        </v-list-item>

        <v-list-group
            v-if="level1.children"
            :group="level1.path"
            :prepend-icon="level1.mdi"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ level1.title }}</v-list-item-title>
          </template>

          <div v-for="level2 in level1.children" :key="level2.path">
            <v-list-item v-if="!level2.children" :to="level2.path">
              <v-list-item-icon>
                <v-icon></v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ level2.title }}</v-list-item-title>
              <v-list-item-icon>
                <v-icon>{{ level2.mdi }}</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-list-group
                v-if="level2.children"
                :group="level2.path"
                no-action
                sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ level2.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                  v-for="level3 in level2.children" :key="level3.path"
                  :to="level3.path"
              >
                <v-list-item-title>{{ level3.title }}</v-list-item-title>
                <v-list-item-icon>
                  <v-icon>{{ level3.mdi }}</v-icon>
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
export default {
  name: "AsideMenu",
  // props: ['menu'],
  computed: {
    menu() {
      return require('@/assets/mock/aside-menu.json')
    }
  }
}
</script>

<style scoped>

</style>