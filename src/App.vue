<script>
import { defineComponent } from 'vue'
// const Test = () => import('./components/Test.vue'),

export default defineComponent({
  name: 'App',
  /*components: {
    Test:
  },*/

  get myTestComponent() {
    return Test: () => import('./components/Test.vue'),
  },
})
</script>

<template>
  <div id="app">
    <img src="@/assets/logo.svg" alt="Vite logo" />
    <Test />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
