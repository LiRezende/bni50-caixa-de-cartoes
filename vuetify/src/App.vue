<template>
  <v-app>
    <App-Top-Bar/>
    <v-main>
      <router-view/>     
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar'
export default {
  name: 'App',
  components: {
    AppTopBar
  }
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
