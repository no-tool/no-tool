<template>
  <div>
    <div ref="searchInput" class="mb-4">
      <v-text-field
          type="text"
          autofocus
          clearable
          solo-inverted
          flat
          rounded
          hide-details
          v-model.trim="keyword"
          append-outer-icon="mdi-keyboard-return"
          @click:append-outer="search"
          @keydown.enter="search"
      ></v-text-field>
    </div>
    <div>
      <v-virtual-scroll
          :items="results"
          :height="resultsVirtualScrollHeight"
          item-height="100"
      >
        <template v-slot:default="{ item }">
          <span v-html="item.hit"></span><br/>
          <span v-html="item.hit"></span><br/>
          <span v-html="item.hit"></span><br/>
          <span v-html="item.hit"></span>
        </template>
      </v-virtual-scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalSearch',
  data: () => ({
    keyword: '',
    results: [
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
      {
        hit: 'xxx<span style="color: red">123</span>xxx...'
      },
    ]
  }),
  props: {
    extHeight: { // 组件外额外高度，用以正确设置虚拟列表高度
      type: Number,
      default: 0
    }
  },
  computed: {
    resultsVirtualScrollHeight() {
      // const otherHeight
      //   = this.$refs.searchInput.offsetHeight || 48
      //   + 40
      const otherHeight = this.extHeight + 48 + 40
      if (this.$vuetify.breakpoint.mobile) {
        return this.$vuetify.breakpoint.height - otherHeight
      } else {
        return this.$vuetify.breakpoint.height * 0.6 - otherHeight
      }
    }
  },
  methods: {
    search() {
    }
  }
}
</script>

<style scoped>
</style>