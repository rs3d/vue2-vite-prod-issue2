<script>
import { defineComponent } from 'vue'
// import MySliderComponent from './components/MySliderComponent.vue':
const Test = () => import('./components/Test.vue')

export default defineComponent({
  name: 'App',
  components: {
    Test,
    MySliderComponent,
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
