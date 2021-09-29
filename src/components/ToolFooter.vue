<template>
  <v-footer
      v-if="$route.meta.liveOn"
      padless
      color="rgba(255, 255, 255, 0)"
      class="d-flex justify-center mt-3"
  >
    <span class="text--disabled font-weight-light">
      Goes live on {{ liveOn }}
    </span>
  </v-footer>
</template>

<script>
import moment from 'moment'
import {LIVE_ON_PATTERN} from "@/common/tool-constant"

export default {
  name: "ToolFooter",
  computed: {
    liveOn() {
      return moment(this.$route.meta.liveOn, LIVE_ON_PATTERN).format('MMM Do YYYY')
    }
  }
}
</script>

<style scoped>

</style>