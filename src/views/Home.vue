<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50</h1>
      <h2>Aqui você encontra o contato de todos os membros de nosso grupo.</h2>
      <h3>Selecione abaixo a área de atuação desejada.</h3>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md12>
        <v-card class="card-area" elevation="0">
          <v-card-actions-group column>
            <v-btn>
              <router-link to="/engenharia-e-construcao"
                >Engenharia & Construção</router-link
              >
            </v-btn>
            <v-btn>
              <router-link to="/interiores">Interiores</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/financas-e-advogados"
                >Finanças & Advogados</router-link
              >
            </v-btn>
            <v-btn>
              <router-link to="/imobiliaria">Imobiliária</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/comunicacao">Comunicação</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/eventos">Eventos</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/servicos-empresariais"
                >Serviços Empresariais</router-link
              >
            </v-btn>
            <v-btn>
              <router-link to="/desenvolvimento-humano"
                >Desenvolvimento Humano</router-link
              >
            </v-btn>
            <v-btn>
              <router-link to="/servicos-pessoais"
                >Serviços Pessoais</router-link
              >
            </v-btn>
            <v-btn>
              <router-link to="/beleza-saude-e-bem-estar"
                >Beleza, Saúde & Bem Estar</router-link
              >
            </v-btn>
            <v-btn>
              <router-link to="/tecnologia">Tecnologia</router-link>
            </v-btn>
            <v-btn>
              <router-link to="/lazer">Lazer</router-link>
            </v-btn>
          </v-card-actions-group>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
.container {
  text-align: center;
}
.v-card__text {
  text-align: justify;
}
.v-card__subtitle {
  text-align: justify;
  font-size:16px;
}
.v-btn:not(.v-btn--round).v-size--default {
  margin: 7px;
}
a {
  text-decoration: none;
}
.v-application a {
  color: #333;
}
.header {
  color: #505050;
  text-align: center;
  margin-bottom: 30px;
}
.area {
  color: #505050;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-area {
  margin: 15px 10px 15px 10px;
}
.avatars {
  padding: 20px;
}
.logo {
  margin: 5px;
}
@media screen and (max-width: 768px) {
  a {
    font-size:13px;
    
  }
  .card-area {
    margin: 12px 2px 12px 2px;
}
}
</style>