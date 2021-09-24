<template>
  <div>
    <input v-model.trim="githubUsername" @keyup.enter="search"/>
    <br>
    {{ userInfo }}
  </div>
</template>

<script>
import {getAUser} from '@/request/github/rest-api/user'

export default {
  name: 'User',
  data: () => ({
    githubUsername: '',
    userInfo: {}
  }),
  methods: {
    search() {
      getAUser(this.githubUsername).then(res => {
        this.userInfo = res
      })
    }
  }
}
</script>

<style scoped>
</style>
