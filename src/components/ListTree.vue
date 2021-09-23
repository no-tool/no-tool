<template>
  <div>
    <v-list nav dense v-for="item in itemTree" :key="item.id">
      <v-list-item v-if="!item.children" :to="item.path">
        <v-list-item-icon>
          <v-icon v-text="item.action" />
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>

      <v-list-group
        v-if="item.children"
        :group="item.path"
        :key="item.id"
        v-model="item.active"
        :prepend-icon="item.action"
        no-action
      >
        <template v-if="item.children" v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>
        <div v-if="item.children">
          <ListTree Item :itemTree="item.children" />
        </div>
      </v-list-group>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'ListTree',
  props: {
    itemTree: Array
  }
}
</script>

<style scoped>
</style>