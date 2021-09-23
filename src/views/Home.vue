<template>
  <div>
    <p v-for="i in 500" :key="i">
      {{i}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
