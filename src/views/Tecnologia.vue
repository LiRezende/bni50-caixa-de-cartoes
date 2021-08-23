<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50</h1>
      <h2>Área de Tecnologia</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/tecnologia/foto_evaristo_quintao.jpg"
                alt="Evaristo Quintão"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 88px"
              class="logo"
              src="../../assets/images/tecnologia/big5-technologies.png"
              alt="Logo Big5 Technologies"
            />
          </v-row>
          <v-card-title>Evaristo Quintão</v-card-title>
          <v-card-subtitle
            ><strong>Big5 Technologies</strong> | Infraestrutura de
            T.I.</v-card-subtitle
          >
          <v-card-text
            >Somos especialistas em infraestrutura de Tecnologia da Informação,
            para assessoria, consultoria e projetos em redes locais e nuvem.
            Temos mais de 15 anos de mercado e experiência em mais de 300
            projetos entregues em empresas de diferentes estados brasileiros,
            nas 3 Américas, Europa e Japão.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521992824628"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 99282-4628</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎eq@big5.tech"
                >‎<v-icon>mdi-email-outline</v-icon> eq@big5.tech</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="http://big5.tech/"
                >‎<v-icon>mdi-earth</v-icon> big5.tech</a
              ></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Tecnologia",
};
</script>

<style scoped>
.v-card__text {
  text-align: justify;
}
.v-card__subtitle {
  text-align: justify;
  font-size:16px;
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