<template>
  <div>
    <LevelPool/>
    <router-view/>
  </div>
</template>

<script>
import LevelPool from "@/components/LevelPool"

export default {
  name: 'Level1',
  components: {
    LevelPool
  }
}
</script>

<style scoped>

</style>