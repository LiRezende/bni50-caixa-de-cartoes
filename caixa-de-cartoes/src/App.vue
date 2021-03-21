<template>
  <v-app>
      <App-Top-Bar/>
    <v-main>
      <router-view/>     
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/AppTopBar";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    AppTopBar,
  },
};
</script>


<style lang="scss">

</style>
