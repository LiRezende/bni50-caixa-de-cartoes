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
.v-btn:not(.v-btn--round).v-size--default {
  margin: 7px;
}
p {
  text-align: justify;
}
.theme--light.v-footer {
  background-color:#cf2030;
}
</style>
