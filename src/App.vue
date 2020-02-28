<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <CalorieForm /> 
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import CalorieForm from './components/CalorieForm/CalorieForm';
// import { example } from './apiCalls.js'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    CalorieForm
  },
  //   async created() {
  //   try {
  //     let res = await example();
  //     console.log(res)
  //   } catch {
  //     (err) => console.log(err)
  //     }
  // }
}
</script>

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
