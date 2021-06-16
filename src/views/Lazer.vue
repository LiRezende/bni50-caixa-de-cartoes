<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50</h1>
      <h2>Área de Lazer</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/lazer/foto_eduardo_penna.jpg"
                alt="Eduardo Penna"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 120px"
              class="logo"
              src="../../assets/images/lazer/emporio_gourmet_show_logo.png"
              alt="Logo Empório Gourmet Show"
            />
          </v-row>
          <v-card-title>Eduardo Penna</v-card-title>
          <v-card-subtitle
            ><strong>Empório Gourmet Show</strong> | Empório</v-card-subtitle
          >
          <v-card-text
            >Somos um Empório de alimentos e bebidas premium no Cadeg ( Mercado Municipal 
            do Rio de Janeiro). Temos loja física, loja virtual e atendemos também por 
            Delivery. Temos como principais produtos: Vinhos e Espumantes, Bacalhau, 
            queijos e frios, azeites e massas, doces e chocolates. Nossos principais 
            clientes são: Buffets, Casas de festas, Chef de cozinha, Cerimonialistas, 
            e todas as pessoas que gostam de produtos e serviços diferenciados.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521980851837"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98085-1837</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text wrap
              ><a href="mailto:‎e.pennasoares@gmail.com"
                >‎<v-icon>mdi-email-outline</v-icon> e.pennasoares@gmail.com</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://www.emporioshow.com.br/"
                >‎<v-icon>mdi-earth</v-icon> emporioshow.com.br</a
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
  name: "Lazer",
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