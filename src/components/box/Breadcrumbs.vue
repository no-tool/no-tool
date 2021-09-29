<template>
  <v-breadcrumbs
      :items="breadcrumbItems"
  ></v-breadcrumbs>
</template>

<script>
import _ from "lodash"

export default {
  name: "Breadcrumbs",
  computed: {
    breadcrumbItems() {
      return _.map(this.$route.matched, (item) => {
        return {
          text: item.meta.name || item.name,
          disabled: _.isEqual(this.$route.path, item.path),
          href: item.path
        }
      })
    },
  }
}
</script>

<style scoped>

</style>