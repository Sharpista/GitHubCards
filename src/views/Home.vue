<template>
  <div class="home">
    <div>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="nomeUsuario" label="Nome" solo></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn
            large
            color="green"
            id="btn"
            @click.prevent="adicionarUsuario(nomeUsuario)"
            >Adicionar Usuario</v-btn
          >
        </v-col>
      </v-row>
    </div>

    <Tabela></Tabela>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabela from "@/components/TabelaUsuario";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  components: { Tabela },

  data() {
    return {
      nomeUsuario: "",
    };
  },
  computed: {
    ...mapGetters(["dadosLocalStorage"]),
  },
  methods: {
    ...mapActions(["adicionarUsuario"]),
  },
};
</script>
<style>
</style>
