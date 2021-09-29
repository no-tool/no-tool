<template>
  <div>
    <v-text-field
        label="格式"
        v-model.trim="pattern"
    ></v-text-field>
    <v-text-field
        label="格式化"
        v-model.trim="datetimeFormat"
    ></v-text-field>
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "Time",
  data: () => ({
    pattern: 'YYYY-MM-DD HH:mm:ss',
    datetimeFormat: ''
  }),
  mounted() {
    const now = moment()
    this.datetimeFormat = now.format(this.pattern)
  }
}
</script>

<style scoped>

</style>