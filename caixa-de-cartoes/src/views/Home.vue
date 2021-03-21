<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50 Ipanema</h1>
      <h2>Aqui você encontra o contato de todos os membros de nosso grupo.</h2>
    </div>
    <div class="area">
      <h3>Atividades de Engenharia & Construção</h3>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-avatar size="150">
            <img
              src="https://www.bniconnectglobal.com/web/open/networkViewProfileImage/5fe288d20cf2acd5d34680ba.jpg"
              alt="André Rodrigues Motta"
            />
          </v-avatar>
          <v-card-title> André Rodrigues Motta </v-card-title>
          <v-card-subtitle
            >Rodrigues & Motta: Mapeamento de Obras</v-card-subtitle
          >
          <v-card-text
            >Assinatura Mensal de Plataforma Web, com informações de obras no
            Grande Rio de Janeiro. As obras são capturadas por inteligência em
            Big Data, onde posteriormente uma equipe treinada entra em contato
            com o profissional ou proprietário e coletada dados como estágio da
            obra, informações de e-mail, redes sociais, além de perguntar sobre
            o que está precisando orçar naquele momento. Estas informações são
            inseridas nas respectivas obras, com data de contato dentre outras.
            Com estas informações, nossos clientes vão atrás das oportunidades,
            que são atualizadas semanalmente. Nosso objetivo é ligar lojistas,
            prestadores de serviços e comerciantes de produtos, materiais e
            serviços para uma residência, diretamente com as oportunidades
            indicadas na plataforma. A plataforma atende a mais de setenta tipos
            de produtos, materiais e serviços necessários para uma residência ou
            escritório.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521972645788"
                ><v-icon>mdi-whatsapp</v-icon> (21) 97264-5788</a
              ></v-btn
            >
            <v-btn text
              ><a href="mailto:‎aluisnr@gmail.com"
                >‎<v-icon>mdi-email-outline</v-icon> aluisnr@gmail.com</a
              ></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-avatar size="150">
            <img
              src="https://www.bniconnectglobal.com/web/open/networkViewProfileImage/5a95862644f4ad1a5ad4d9c0.jpg"
              alt="Andráa Fiorini"
            />
          </v-avatar>
          <v-card-title> Andréa Fiorini </v-card-title>
          <v-card-subtitle
            >Andrea Fiorini Arquitetura: Arquiteto</v-card-subtitle
          >
          <v-card-text
            >Projetos de arquitetura, projetos para condomínios, legalizações da
            Prefeitura , projetos de interiores
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521999864022"
                ><v-icon>mdi-whatsapp</v-icon> (21) 99986-4022</a
              ></v-btn
            >
            <v-btn text
              ><a href="mailto:‎andrea@andreafiorini.com.br"
                >‎<v-icon>mdi-email-outline</v-icon>
                andrea@andreafiorini.com.br</a
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
}
.area {
  color: #505050;
  margin-top: 20px;
  margin-bottom: 20px;
}
.card-area {
  margin: 10px;
}
</style>