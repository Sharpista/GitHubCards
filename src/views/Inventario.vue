<template>
  <div>
    <v-app-bar color="darken" dense dark>
      <v-toolbar-title id="titulo">Inventário</v-toolbar-title>
    </v-app-bar>
    <div>
      <div>
        <div class="primeira">
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="novoNome"
                label="Nome Usuário"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-btn
                large
                color="green"
                id="btn"
                @click.prevent="editarUsuario(novoNome)"
                >Confirmar</v-btn
              >
            </v-col>
          </v-row>
        </div>

        <div>
          <v-row>
            <v-col cols="12" sm="6" md="3">
              <v-text-field
                v-model="nomeFigurinha"
                label="Figurinha"
                solo
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="3">
              <v-btn
                large
                color="blue"
                id="btn"
                @click.prevent="
                  adicionarFigurinha({ nome: nomeFigurinha, usuario: usuario })
                "
                >Adicionar Figurinha</v-btn
              >
            </v-col>
          </v-row>
          <div>
            <v-app-bar color="darken" dense dark>
              <v-toolbar-title id="titulo">Minhas Figurinhas</v-toolbar-title>
            </v-app-bar>
          </div>
        </div>
        <div class="container" id="vlist">
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
            v-for="(figurinha, key) in usuario.figurinhas"
            :key="key"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  {{ figurinha.nome }}
                </div>
                <v-list-item-title class="headline mb-2">
                  SEGUIDORES
                </v-list-item-title>
                <v-list-item-subtitle>{{
                  figurinha.seguidores
                }}</v-list-item-subtitle>
                <v-btn @click.prevent="removerFigurinha({ usuario, figurinha })"
                  >Remove</v-btn
                >
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey">
                <img :src="figurinha.foto" alt="Usuario" />
              </v-list-item-avatar>
            </v-list-item>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Inventario",

  data() {
    return {
      nomeFigurinha: "",
      novoNome: "",
    };
  },
  methods: {
    ...mapActions(["adicionarFigurinha", "removerFigurinha", "editarUsuario"]),
  },

  computed: {
    ...mapGetters(["obterUsuario"]),

    usuario() {
      return this.obterUsuario(this.$route.params.nome);
    },
  },
};
</script>
<style>
.primeira {
  display: inline;
}

#list {
  display: inline;
}
#btn {
  display: inline;
}
#vlist {
  display: flexbox;
}
</style>
