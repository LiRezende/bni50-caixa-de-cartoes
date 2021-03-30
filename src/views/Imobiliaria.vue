<template>
  <v-container>
    <div class="header">
      <h1>Caixa de Cartões BNI 50</h1>
      <h2>Área de Imobiliária</h2>
    </div>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <v-card class="card-area" elevation="20">
          <v-row class="avatars">
            <v-avatar size="150">
              <img
                src="../../assets/images/imobiliaria/foto-beatriz-serra.jpg"
                alt="Beatriz Serra"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 134px"
              class="logo"
              src="../../assets/images/imobiliaria/logo_psq.png"
              alt="Logo Pimentel Serra, Quaresma e Advogados Associados"
            />
          </v-row>
          <v-card-title>Beatriz Serra</v-card-title>
          <v-card-subtitle
            ><strong>Pimentel Serra, Quaresma e Advogados Associados</strong> |
            Direito Imobiliário e Condominial</v-card-subtitle
          >
          <v-card-text
            >Meu escritório atende a pessoas físicas e jurídicas na área do
            Direito Imobiliário e Condominial, nas áreas consultiva e
            contenciosa. O Direito Imobiliário compreende a assessoria jurídica
            na compra, venda, locação e incorporação de imóveis, tanto para
            proprietários como para proponentes, locatários e empresas
            incorporadoras. O Direito Imobiliário também inclui atuação em
            questões relativas à posse. Na área de condomínios, assessoramos
            administradoras, síndicos e condôminos nas relações de vizinhança,
            com fornecedores, cobranças, convenções, regulamentos internos e
            assembleias.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521992507592"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 99250-7592</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎beatrizserra@psq.adv.br"
                >‎<v-icon>mdi-email-outline</v-icon> beatrizserra@psq.adv.br</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="http://psq.adv.br/"
                >‎<v-icon>mdi-earth</v-icon> psq.adv.br</a
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
                src="../../assets/images/imobiliaria/foto_marcia_montalvao.jpg"
                alt="Márcia Montalvão"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 139px"
              class="logo"
              src="../../assets/images/imobiliaria/logo_sindmar_gestao_condominial.png"
              alt="Logo Sindmar Gestão Condominial"
            />
          </v-row>
          <v-card-title>Márcia Montalvão</v-card-title>
          <v-card-subtitle
            ><strong>Sindmar Gestão Condominial</strong> | Síndico
            Profissional</v-card-subtitle
          >
          <v-card-text
            >Gestão em Condomínios e Síndico Profissional.
          </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521964388649"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 96438-8649</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:sindmar.profissional@gmail.com"
                >‎<v-icon>mdi-email-outline</v-icon>
                sindmar.profissional@gmail.com</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="https://sindmargestao.com.br/"
                >‎<v-icon>mdi-earth</v-icon> sindmargestao.com.br</a
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
                src="../../assets/images/imobiliaria/foto_thiago_cesar.jpg"
                alt="Thiago Santos"
              />
            </v-avatar>
            <img
              style="width: 200px; height: 90px"
              class="logo"
              src="../../assets/images/imobiliaria/logo_grupo_lothar.png"
              alt="Logo Grupo Lothar Segurança e Vigilância"
            />
          </v-row>
          <v-card-title>Thiago Santos</v-card-title>
          <v-card-subtitle
            ><strong>Grupo Lothar Segurança e Vigilância</strong> | Segurança e
            Vigilância</v-card-subtitle
          >
          <v-card-text> Segurança e vigilância patrimonial. </v-card-text>
          <v-card-actions>
            <v-btn text
              ><a href="https://api.whatsapp.com/send?phone=5521982661444"
                ><v-icon>mdi-whatsapp</v-icon> +55 21 98266-1444</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="mailto:‎thiagocesar1044@gmail.com"
                >‎<v-icon>mdi-email-outline</v-icon>
                thiagocesar1044@gmail.com</a
              ></v-btn
            >
          </v-card-actions>
          <v-card-actions>
            <v-btn text
              ><a href="http://www.grupolothar.com.br/"
                >‎<v-icon>mdi-earth</v-icon> grupolothar.com.br</a
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
  name: "Imobiliária",
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