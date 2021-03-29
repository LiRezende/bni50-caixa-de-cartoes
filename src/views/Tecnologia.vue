<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50 Ipanema</h1>
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
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/tecnologia/foto_ligia_brusamolin.jpg"
                alt="Ligia Brusamolin"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 79px"
              class="logo"
              src="../../assets/images/tecnologia/logo-molin-space.png"
              alt="Logo Molin Space Desenvolvimento Web"
            />
          </v-row>
          <v-card-title>Ligia Brusamolin</v-card-title>
          <v-card-subtitle
            ><strong>Molin Space: Desenvolvimento Web</strong> | Desenvolvimento
            de Sites e E-commerce</v-card-subtitle
          >
          <v-card-text
            >Agência de Desenvolvimento Web & Mobile. Desenvolvemos, fazemos a
            manutenção e otimizamos: sites, lojas virtuais, landing pages, blogs
            e aplicativos. Também temos nosso próprio produto: um sistema
            delivery para bares e restaurantes.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521984418877"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98441-8877</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text wrap
              ><a href="mailto:‎ligia@molin.space"
                >‎<v-icon>mdi-email-outline</v-icon> ligia@molin.space</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://molin.space/"
                >‎<v-icon>mdi-earth</v-icon> molin.space</a
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
.card-area {
  margin: 10px;
}
.avatars {
  padding: 20px;
}
.logo {
  margin: 5px;
}
</style>