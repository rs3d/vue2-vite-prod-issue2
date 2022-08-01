<script>
import { defineComponent } from 'vue'
import Test from './components/Test.vue'

export default defineComponent({
  name: 'App',
  components: {
    Test,
  },
})
</script>

<template>
  <div id="app">
    <img src="@/assets/logo.svg" alt="Vite logo" />
    <!--<HelloWorld msg="Hello Vue 2 + Vite 3" />-->
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
