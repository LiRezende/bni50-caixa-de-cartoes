<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50</h1>
      <h2>Área de Serviços Pessoais</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/servicos_pessoais/foto-anderson-vitorino.jpg"
                alt="Anderson Vitorino"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 49px"
              class="logo"
              src="../../assets/images/servicos_pessoais/logo_valdir_e_vinicius.png"
              alt="Logo Valdir e Vinicius Ótica"
            />
          </v-row>
          <v-card-title>Anderson Vitorino</v-card-title>
          <v-card-subtitle
            ><strong>Valdir e Vinicius</strong> | Ótica</v-card-subtitle
          >
          <v-card-text
            >Somos uma empresa familiar com mais de 35 anos de experiência no
            segmento de ótica. Oferecemos uma vasta gama de produtos das mais
            respeitosas marcas, para atender com eficiência, qualidade e
            personalidade a todos os nossos clientes.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521981818012"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98181-8012</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎avitorinorj@gmail.com"
                >‎<v-icon>mdi-email-outline</v-icon> avitorinorj@gmail.com</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="http://www.valdireviniciusotica.com.br/"
                >‎<v-icon>mdi-earth</v-icon> valdireviniciusotica.com.br</a
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
                src="../../assets/images/servicos_pessoais/foto_cynthia_selly.jpg"
                alt="Cynthia Selly"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 84px"
              class="logo"
              src="../../assets/images/servicos_pessoais/logo_we_sure.png"
              alt="Logo Wesure Seguros Integrados"
            />
          </v-row>
          <v-card-title>Cynthia Selly</v-card-title>
          <v-card-subtitle
            ><strong>Wesure Seguros Integrados</strong> | Seguros
            Pessoais</v-card-subtitle
          >
          <v-card-text
            >Especialista em desenvolver apólices de seguro de vida
            personalizadas para profissionais liberais, empresários, médicos,
            famílias, com o foco em: proteção financeira, proteção pessoal,
            proteção familiar, inventário e sucessão empresarial. - Plano de
            Saúde Adesão - Previdência Privada - Consórcio - Responsabilidade
            Civil Profissional Entre outos produtos e soluções para você e sua
            família.</v-card-text
          >
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521988702499"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98870-2499</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:cynthia@wesure.com.br"
                >‎<v-icon>mdi-email-outline</v-icon> cynthia@wesure.com.br</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://www.wesure.com.br/"
                >‎<v-icon>mdi-earth</v-icon> wesure.com.br</a
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
  name: "Serviços Pessoais",
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