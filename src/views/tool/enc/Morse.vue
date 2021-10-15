<template>
  <div>
    <v-textarea
        v-model.trim="input"
        auto-grow
        clearable
    ></v-textarea>
    <v-row>
      <v-col cols="12" lg="3">
        <v-btn depressed x-large block @click="swapHoriz()">
          <v-icon left>
            mdi-swap-horizontal
          </v-icon>
          交换
        </v-btn>
      </v-col>
      <v-col cols="12" lg="3">
        <v-radio-group
            v-model="enc"
            row
        >
          <v-radio
              label="ENC"
              :value="true"
          ></v-radio>
          <v-radio
              label="DEC"
              :value="false"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="4" lg="2">
        <v-combobox
            label="分隔符"
            v-model="space"
            :items="symbolOptions"
        ></v-combobox>
      </v-col>
      <v-col cols="4" lg="2">
        <v-combobox
            label="Long"
            v-model="long"
            :items="symbolOptions"
        ></v-combobox>
      </v-col>
      <v-col cols="4" lg="2">
        <v-combobox
            label="Short"
            v-model="short"
            :items="symbolOptions"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-textarea
        readonly
        :value="value"
        auto-grow
        append-outer-icon="mdi-content-copy"
        @click:append-outer="copyValue(value)"
    ></v-textarea>
  </div>
</template>

<script>
import {encode, decode} from 'xmorse'


export default {
  name: "Morse",
  data: () => ({
    input: '支持中文',
    space: '/',
    long: '-',
    short: '.',
    symbolOptions: [
      '`',
      '~',
      '!',
      '@',
      '#',
      '$',
      '%',
      '^',
      '&',
      '*',
      '(',
      ')',
      '-',
      '_',
      '=',
      '+',
      '[',
      ']',
      '{',
      '}',
      '\\',
      '|',
      ';',
      ':',
      '\'',
      '"',
      ',',
      '.',
      '<',
      '>',
      '/',
      '?',
      ' '
    ],
    enc: true // 当前模式是否是编码
  }),
  computed: {
    value() {
      return this.enc
          ? encode(this.input, {
            space: this.space,
            long: this.long,
            short: this.short
          })
          : decode(this.input, {
            space: this.space,
            long: this.long,
            short: this.short
          })
    }
  },
  methods: {
    copyValue(v) {
      // https://juejin.cn/post/6844903567480848391
      const ta = document.createElement('textarea')
      ta.setAttribute('readonly', 'readonly')
      ta.value = v
      document.body.appendChild(ta)
      ta.select()
      if (document.execCommand('copy')) {
        document.execCommand('copy')
        this.$message.success('复制成功')
      } else {
        this.$message.error('复制失败，请手动选中复制')
      }
      document.body.removeChild(ta)
    },
    swapHoriz() {
      this.input = this.value
      this.enc = !this.enc
    }
  }
}
</script>

<style scoped>

</style>