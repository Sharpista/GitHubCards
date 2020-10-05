<template>
  <v-container class="container">
    <v-simple-table dark class="tabela">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Nome</th>
            <th class="text-left">Quantidade</th>
            <th class="text-left">Remover</th>
            <th class="text-left">Inventário</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, key) in usuarios" :key="key">
            <td>{{ usuario.nome }}</td>
            <td>{{ qtdFigurinhas(usuario) }}</td>
            <td>
              <v-btn
                color="deep-purple accent-4"
                @click.prevent="removerUsuario(key)"
                >Remover</v-btn
              >
            </td>
            <td>
              <v-btn color="deep-purple accent-4"
                ><router-link
                  :to="{ name: 'inventario', params: { nome: usuario.nome } }"
                  >Adicionar</router-link
                >
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "TabelaUsuario",
  computed: {
    ...mapState(["usuarios"]),
  },
  methods: {
    qtdFigurinhas(usuario) {
      return usuario.figurinhas.length;
    },

    ...mapActions(["removerUsuario"]),
  },
};
</script>
<style>
</style>
