<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50 Ipanema</h1>
      <h2>Área de Eventos</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-avatar size="150">
            <img
              src="https://www.bniconnectglobal.com/web/open/networkViewProfileImage/5fe288d20cf2acd5d34680ba.jpg"
              alt="Bruno Penna"
            />
          </v-avatar>
          <v-card-title>Bruno Penna</v-card-title>
          <v-card-subtitle
            ><strong>Melhor Compra do CADEG</strong> |
            Distribuidora</v-card-subtitle
          >
          <v-card-text
            >Distribuidora de hortifruti. Atendemos atacado e varejo. Vendemos para pessoa física e jurídica.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521964815955"
                ><v-icon>mdi-whatsapp</v-icon>+55 21 96481-5955</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎brunopenna@mcdocadeg.com.br"
                >‎<v-icon>mdi-email-outline</v-icon>brunopenna@mcdocadeg.com.br</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://www.melhorcompradocadeg.com.br/"
                >‎<v-icon>mdi-earth</v-icon>melhorcompradocadeg.com.br</a
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
                src="https://www.bniconnectglobal.com/web/open/networkViewProfileImage/5a95862644f4ad1a5ad4d9c0.jpg"
                alt="Ligia Brusamolin"
              />
            </v-avatar>
            <img
              src="http://andreafiorini.com.br/wp-content/uploads/2015/01/AF_logo_lg-300x79.png"
              alt="Logo Andréa Fiorini Arquitetura"
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
                ><v-icon>mdi-whatsapp</v-icon>+55 (21) 98441-8877</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎ligia@molin.space"
                >‎<v-icon>mdi-email-outline</v-icon> ligia@molin.space</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://molin.space/"
                >‎<v-icon>mdi-earth</v-icon>molin.space</a
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
  name: "Home",
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
.area {
  color: #505050;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-area {
  margin: 10px;
}
.avatars {
  padding: 20px;
}
</style>