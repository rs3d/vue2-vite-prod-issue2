<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyComponent extends Vue {
  mounted() {
    console.log(this.name)
  }
}
</script>

<template>
  <div class="example">
    <h3>MyComponent.vue</h3>
    <p>See file comments in <code>src/components/MyComponent.vue</code></p>
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
