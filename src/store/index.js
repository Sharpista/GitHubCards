import Vue from "vue";
import Vuex from "vuex";
import api from "../axios.js";
import router from "../router/index.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuarios: [],
  },

  getters: {
    obterUsuario(state) {
      return (nome) => {
        return state.usuarios.filter((x) => x.nome === nome)[0];
      };
    },
    dadosLocalStorage: (state) =>
      (state.usuarios = JSON.parse(localStorage.getItem("usuarios"))),
  },
  mutations: {
    adicionarUsuario(state, nome) {
      state.usuarios.push({ nome, figurinhas: [] });
    },
    editarUsuario(state, nome) {
      for(let i = 0; i < state.usuarios.length;i++) {
        if(state.usuarios.[i].nome === router.currentRoute.params.nome) {
          state.usuarios[i].nome = nome
        }
      }
    },
    adicionarFigurinha(state, { data, usuario }) {
      usuario.figurinhas.push({
        foto: data.avatar_url,
        nome: data.login,
        seguidores: data.followers,
      });
    },

    removerUsuario(state, nome) {
      state.usuarios.splice(nome, 1);
    },
    removerFigurinha(state, { usuario, figurinha }) {
      console.log("mutation");
      let pos = usuario.figurinhas.indexOf(figurinha);
      usuario.figurinhas.splice(pos, 1);
    },

    inicial(state, usuarios) {
      state.usuarios = usuarios;
    },
  },
  actions: {
    adicionarUsuario({ commit, dispatch }, nome) {
      commit("adicionarUsuario", nome);
      dispatch("salvarUsuariosLocalStorage");
    },
    removerUsuario({ commit, dispatch }, nome) {
      commit("removerUsuario", nome);
      dispatch("salvarUsuariosLocalStorage");
    },
    editarUsuario({ commit, dispatch }, nome) {
      console.log("editou", nome);
      console.log(router.currentRoute.params.nome);
      commit("editarUsuario", nome);
      dispatch("salvarUsuariosLocalStorage");
    },

    removerFigurinha({ commit }, { usuario, figurinha }) {
      console.log(usuario, figurinha);
      commit("removerFigurinha", { usuario, figurinha });
    },

    async adicionarFigurinha({ commit, dispatch }, { nome, usuario }) {
      let resp = await api.get(nome);

      commit("adicionarFigurinha", { data: resp.data, usuario: usuario });
      dispatch("salvarUsuariosLocalStorage");
    },

    salvarUsuariosLocalStorage({ state }) {
      let dados = JSON.stringify(state.usuarios);
      window.localStorage.setItem("usuarios", dados);
    },

    async inicial({ commit }) {
      let usuarios = window.localStorage.getItem("usuarios");
      if (!usuarios) {
        return;
      }
      let dados = JSON.parse(usuarios);

      let objs = [];

      for (let usuario of dados) {
        objs.push({ ...usuario });
      }
      commit("inicial", objs);
      return "carregou";
    },
  },
});
