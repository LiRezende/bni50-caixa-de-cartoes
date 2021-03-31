<template>
  <div>
    <v-app-bar color="#cf2030" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>BNI 50 Ipanema</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <a href="https://www.linkedin.com/company/bni50/">
          <v-icon color="#fff">mdi-linkedin</v-icon>
        </a>
      </v-btn>
      <v-btn icon>
        <a href="https://www.instagram.com/bni50/?hl=pt-br">
          <v-icon color="#fff">mdi-instagram</v-icon>
        </a>
      </v-btn>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/about">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/interiores">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Interiores</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/financas-e-advogados">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Finanças & Advogados</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/imobiliaria">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Imobiliária</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/comunicacao">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Comunicação</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/eventos">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Eventos</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/servicos-empresariais">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Serviços Empresariais</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/desenvolvimento-humano">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Desenvolvimento Humano</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/servicos-pessoais">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Serviços Pessoais</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/tecnologia">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tecnologia</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/beleza-saude-e-bem-estar">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Beleza, Saúde & Bem Estar</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/lazer">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-user-group</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Lazer</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>