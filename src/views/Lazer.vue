<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50 Ipanema</h1>
      <h2>Área de Lazer</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/lazer/foto-bruno-simoes.jpg"
                alt="Bruno Simões"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 119px"
              class="logo"
              src="../../assets/images/lazer/o_camarao_logo.png"
              alt="Logo O Camarão"
            />
          </v-row>
          <v-card-title>Bruno Simões</v-card-title>
          <v-card-subtitle
            ><strong>O Camarão</strong> | Restaurante</v-card-subtitle
          >
          <v-card-text
            >Restaurante especializado em frutos do mar com foco em camarão.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521980323111"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98032-3111</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎bruno_simoesrj@yahoo.com.br"
                >‎<v-icon>mdi-email-outline</v-icon> bruno_simoesrj@yahoo.com.br</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://ocamarao.com/"
                >‎<v-icon>mdi-earth</v-icon> ocamarao.com</a
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
                src="../../assets/images/lazer/foto_eduardo_penna.jpg"
                alt="Ligia Brusamolin"
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