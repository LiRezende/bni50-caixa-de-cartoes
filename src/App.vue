<template>
  <v-app>
    <App-Top-Bar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <App-Footer />
    </v-footer>
  </v-app>
</template>

<script>
import AppTopBar from "./components/AppTopBar";
import AppFooter from "./components/AppFooter";
export default {
  name: "App",
  data: () => ({
    drawer: false,
    group: null,
  }),
  components: {
    AppTopBar,
    AppFooter,
  },
};
</script>


<style lang="scss">
p {
  text-align: justify;
}
.v-footer {
  justify-content: center;
}
.theme--light.v-footer {
  background-color:#cf2030;
}
</style>
