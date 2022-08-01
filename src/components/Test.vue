<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

// 1. Comment the comment below
export interface DeleteThisInterface {}

@Component
export default class Test extends Vue {
  mounted() {
    console.log('Test.vue')
  }
}
</script>

<template>
  <div class="example">
    <h3>Test.vue</h3>
    <p>See file comments in <code>src/components/Test.vue</code></p>
  </div>
</template>

<style lang="scss" scoped>
.example {
  border: 1px solid red;
  padding: 1rem;
  border-radius: 1rem;
  text-align: left;
}
code {
  background: #eee;
  padding: 5px;
}
</style>
