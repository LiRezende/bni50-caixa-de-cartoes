<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50</h1>
      <h2>Área de Eventos</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/eventos/foto_bruno_penna.jpg"
                alt="Bruno Penna"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 109px"
              class="logo"
              src="../../assets/images/eventos/logo-melhor-compra-do-cadeg.png"
              alt="Logo Melhor Compra do CADEG"
            />
          </v-row>
          <v-card-title>Bruno Penna</v-card-title>
          <v-card-subtitle
            ><strong>Melhor Compra do CADEG</strong> |
            Distribuidora</v-card-subtitle
          >
          <v-card-text
            >Distribuidora de hortifruti. Atendemos atacado e varejo. Vendemos
            para pessoa física e jurídica.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521964815955"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 96481-5955</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎brunopenna@mcdocadeg.com.br"
                >‎<v-icon>mdi-email-outline</v-icon>
                brunopenna@mcdocadeg.com.br</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://www.melhorcompradocadeg.com.br/"
                >‎<v-icon>mdi-earth</v-icon> melhorcompradocadeg.com.br</a
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
                src="../../assets/images/eventos/foto_luiz_adriano.jpg"
                alt="Luiz Adriano"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 116px"
              class="logo"
              src="../../assets/images/eventos/folivora_logo.png"
              alt="Logo Folivora Gin"
            />
          </v-row>
          <v-card-title>Luiz Adriano</v-card-title>
          <v-card-subtitle
            ><strong>Folivora Gin</strong> | Produtos Alimentícios -
            Bebidas</v-card-subtitle
          >
          <v-card-text
            >Destilaria exclusiva de GIN situado na serra dos órgãos na cidade
            de Teresópolis aonde destilamos o FOLIVORA GIN. Atendemos a todo o
            Brasil no Atacado ou Varejo.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521993368570"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 99336-8570</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎luizadrianorj@gmail.com"
                >‎<v-icon>mdi-email-outline</v-icon> luizadrianorj@gmail.com</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://www.folivoragin.com/"
                >‎<v-icon>mdi-earth</v-icon> folivoragin.com</a
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
                src="../../assets/images/eventos/foto_margareth_galves.jpg"
                alt="Margareth Galves"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 37px"
              class="logo"
              src="../../assets/images/eventos/limppo_multiservicos_logo.png"
              alt="Logo Limppo Multiserviços"
            />
          </v-row>
          <v-card-title>Margareth Galves</v-card-title>
          <v-card-subtitle
            ><strong>Limppo Multiserviços</strong> | Limpeza -
            Manutenção</v-card-subtitle
          >
          <v-card-text>Terceirização de mão-de-obra. </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521981248571"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98124-8571</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎margareth.galves@limppo.com.br"
                >‎<v-icon>mdi-email-outline</v-icon>
                margareth.galves@limppo.com.br</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://limppo.com.br/"
                >‎<v-icon>mdi-earth</v-icon> limppo.com.br</a
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
  name: "Eventos",
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
.logo {
  margin: 5px;
}
</style>