<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import lib from './my-lib'

@Component
export default class Test extends Mixins({
  components: {
    ...lib,
    MyComponent2: lib.MyComponent,
    MyComponent3: () => import('./MyComponent.vue'),
  },
}) {
  get myTestComponent() {
    return {
      MyComponent: lib.MyComponent,
    }
  }

  mounted() {
    console.log('Test.vue')
  }
}
</script>

<template>
  <div class="example">
    <h3>Test.vue</h3>

    <MyComponent />
    <MyComponent2 />
    <MyComponent3 />

    <component :is="'h3'" v-text="'component :is="'h3'"'" />

    <component :is="myTestComponent.MyComponent" />
    <!---->
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
