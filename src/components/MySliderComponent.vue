<script lang="ts">
import { Component, Vue, Mixins } from 'vue-property-decorator'
import VueSlider from 'vue-slider-component'

@Component({
  components: {
    VueSlider,
  },
})
export default class MySliderComponent extends Vue {
  get myTestComponent() {
    return {
      MyComponent: lib.MyComponent,
    }
  }

  value = 0

  mounted() {
    console.log('Test.vue')
  }
}
</script>

<template>
  <div class="example">
    <h3>Test.vue</h3>
    <!--<vue-slider v-model="value"></vue-slider>-->
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
