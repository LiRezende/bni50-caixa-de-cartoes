<template>
  <v-card>
    <v-footer>
      <v-btn icon>
        <a href="https://web.facebook.com/bni50rj/">
          <v-icon color="#fff">mdi-facebook</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a href="https://www.instagram.com/bni50/?hl=pt-br">
          <v-icon color="#fff">mdi-instagram</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a href="https://www.linkedin.com/company/bni50/">
          <v-icon color="#fff">mdi-linkedin</v-icon>
        </a>
      </v-btn>
      <v-container>
        {{ new Date().getFullYear() }} © BNI 50 — Todos os direitos reservados. <a href="molin.space">Desenvolvido por Molin Space.</a>
      </v-container>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.theme--light.v-footer {
    background-color:#cf2030;
    color:#fff;

}
a {
    text-decoration: none;
    
}
.v-application a {
    color:#fff;

} 
</style>