<template>
  <div>
    <v-text-field
        label="GitHub username"
        v-model.trim="githubUsername"
        clearable
        append-outer-icon="mdi-account-search-outline"
        @click:append-outer="search"
        @keydown.enter="search"
        :error-messages="msgErr"
    />
    <v-skeleton-loader
        v-if="loading"
        class="mt-2"
        type="list-item-avatar-two-line, table-tbody"
    />

    <v-card v-if="result">
      <v-card-text>
        <div class="d-flex">
          <span>{{ result.login }}</span>
          <v-spacer/>
          <span>{{ result.id }}</span>
        </div>
        <div class="d-flex justify-center mt-4">
          <v-avatar
              size="256"
          >
            <img
                :src="result.avatar_url"
                :alt="result.login"
            >
          </v-avatar>
        </div>
        <div class="d-flex justify-center mt-4">
          <v-chip-group column>
            <v-chip :href="result.html_url">
              <v-icon left>mdi-github</v-icon> GitHub
            </v-chip>
            <v-chip :href="result.repos_url">
              Repos {{result.public_repos}}
            </v-chip>
          </v-chip-group>
        </div>
        <div>
          <v-subheader>全部信息</v-subheader>
          <v-simple-table>
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
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import {getAUser} from '@/request/github/rest-api/user'

export default {
  name: 'GetAUser',
  data: () => ({
    githubUsername: '',
    // result: {
    //   "login": "youthred",
    //   "id": 42837131,
    //   "node_id": "MDQ6VXNlcjQyODM3MTMx",
    //   "avatar_url": "https://avatars.githubusercontent.com/u/42837131?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/youthred",
    //   "html_url": "https://github.com/youthred",
    //   "followers_url": "https://api.github.com/users/youthred/followers",
    //   "following_url": "https://api.github.com/users/youthred/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/youthred/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/youthred/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/youthred/subscriptions",
    //   "organizations_url": "https://api.github.com/users/youthred/orgs",
    //   "repos_url": "https://api.github.com/users/youthred/repos",
    //   "events_url": "https://api.github.com/users/youthred/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/youthred/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "name": null,
    //   "company": null,
    //   "blog": "",
    //   "location": null,
    //   "email": null,
    //   "hireable": null,
    //   "bio": null,
    //   "twitter_username": null,
    //   "public_repos": 7,
    //   "public_gists": 0,
    //   "followers": 0,
    //   "following": 0,
    //   "created_at": "2018-08-30T11:48:30Z",
    //   "updated_at": "2021-09-16T08:57:12Z"
    // },
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
