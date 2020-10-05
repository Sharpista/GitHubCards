<template>
  <v-app>
    <v-navigation-drawer app permanent clipped width="180" id="nav">
      <v-list>
        <v-list-item :to="{ name: 'home' }">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content> Home </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="darken" dark elevation="0" clipped-left>
      <v-toolbar-title>Figurinhas</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "App",

  methods: {
    ...mapActions(["salvarUsuariosLocalStorage"]),
  },
  computed: {
    ...mapState(["usuarios"]),
    ...mapGetters(["dadosLocalStorage"]),
  },
  beforeMount() {
    this.$store.dispatch("inicial").then((x) => console.log(x));
  },
};
</script>

<style lang="scss"></style>
