<template>
  <div>
    <v-text-field
        label="任意长度字符"
        v-model.trim="text"
        clearable
        append-outer-icon="mdi-keyboard-return"
        @click:append-outer="calc"
        @keydown.enter="calc"
        :messages="combinations"
        :loading="loading"
    />
    <v-virtual-scroll
        v-if="isShowVirtualScroll"
        :items="wordList"
        :height="virtualScrollHeight"
        item-height="20"
    >
      <template v-slot:default="{ index, item}">
        <div class="d-flex">
          <span>{{ item }}</span>
          <v-spacer/>
          <span class="font-weight-light">{{ index + 1 }}</span>
        </div>
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import {calculateCombinations, createWordList} from '@/assets/js/util/math/calc/word-comb'
import _ from 'lodash'

export default {
  name: "WordComb",
  data: () => ({
    text: '',
    loading: false,
    wordList: []
  }),
  computed: {
    isShowVirtualScroll() {
      return !_.isEmpty(this.wordList)
    },
    virtualScrollHeight() {
      return this.$vuetify.breakpoint.height - 252
    },
    combinations() {
      if (this.text) {
        const combinations = calculateCombinations(this.text)
        return `共有 ${combinations} 种组合 ${combinations > 5040 ? '(大于7位不同字符组合的运算可能会使您的浏览器崩溃)' : ''}`
      }
      return ''
    }
  },
  methods: {
    calc() {
      if (this.text) {
        this.wordList = null
        this.loading = true
        this.wordList = createWordList([], '', this.text)
        this.loading = false
      }
    }
  }
}
</script>

<style scoped>
</style>