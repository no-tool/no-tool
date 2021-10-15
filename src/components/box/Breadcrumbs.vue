<template>
  <v-breadcrumbs
      :items="breadcrumbItems"
  >
<!--    <template v-slot:item="{ item }">-->
<!--      <v-breadcrumbs-item-->
<!--          :to="item.to"-->
<!--          :disabled="item.disabled"-->
<!--      >-->
<!--        {{ item.text }}-->
<!--      </v-breadcrumbs-item>-->
<!--    </template>-->
  </v-breadcrumbs>
</template>

<script>
import _ from "lodash"

export default {
  name: "Breadcrumbs",
  computed: {
    breadcrumbItems() {
      return _.map(this.$route.matched, (item) => {
        return {
          exact: true,
          text: item.meta.title || item.name,
          disabled: _.isEqual(this.$route.path, item.path),
          to: item.path
        }
      })
    },
  }
}
</script>

<style scoped>

</style>