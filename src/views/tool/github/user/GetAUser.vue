<template>
  <div>
    <v-text-field
        label="GitHub username"
        v-model.trim="githubUsername"
        append-outer-icon="mdi-account-search-outline"
        @click:append-outer="search"
        @keydown.enter="search"
        :error-messages="msgErr"
    />
    <v-skeleton-loader
        v-if="loading"
        type="article"
    />
    <div v-if="result">
      <div class="d-flex justify-center">
        <v-avatar
            size="128"
        >
          <img
              :src="result.avatar_url"
              :alt="result.login"
          >
        </v-avatar>
      </div>
      <v-simple-table class="mt-6">
        <template v-slot:default>
          <thead>
          <tr>
            <th class="text-left">
              Item
            </th>
            <th class="text-left">
              Value
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(v, k) in result"
              :key="k"
          >
            <td>{{ k }}</td>
            <td>{{ v }}</td>
          </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import {getAUser} from '@/request/github/rest-api/user'

export default {
  name: 'GetAUser',
  data: () => ({
    githubUsername: '',
    result: null,
    loading: false,
    msgErr: null
  }),
  methods: {
    search() {
      if (this.githubUsername) {
        this.loading = true
        this.msgErr = null
        this.result = null
        getAUser(this.githubUsername)
            .then(res => {
              this.msgErr = null
              this.result = res.data
            })
            .catch(e => {
              this.msgErr = `Search failed: ${e}`
              this.result = null
            })
            .finally(() => this.loading = false)
      }
    }
  }
}
</script>

<style scoped>
</style>
