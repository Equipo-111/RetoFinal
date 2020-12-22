<template>
  <v-app id="inspire">
    <v-app-bar dark app class="navBar" height=80>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title dark class="white--text">Administracion</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon class="mr-5" @click="salir()">
        <v-icon>mdi-logout</v-icon>
        <span>Salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-card class="mx-auto" width="300">
        <v-list>
          <v-list-item :to="{ name: 'Home' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>

            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-group :value="false" prepend-icon="mdi-archive">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Produccion</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, ruta], i) in produccion"
              :key="i"
              :to="{ name: ruta }"
              @click="cambioDeVentana"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group
            v-if="this.$store.state.user.rol === 'Administrador'"
            :value="false"
            prepend-icon="mdi-account-circle"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Permisos</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="([title, icon, ruta], i) in usuarios"
              @click="cambioDeVentana"
              :key="i"
              :to="{ name: ruta }"
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-main class="fondo">
      <v-container>
        <template v-if="condicion">
          <v-row class="text-center">
            <v-col cols="12">
              <v-img
                :src="require('../assets/3d-impresora.svg')"
                class="my-3"
                contain
                height="200"
              />
            </v-col>

            <v-col class="mb-4">
              <h1 class="display-2 font-weight-bold mb-3">Bienvenido</h1>
            </v-col>
          </v-row>
        </template>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "AdminComponente",

  components: {},

  data: () => ({
    drawer: null,
    condicion: true,
    produccion: [
      ["Categoria", "mdi-book", "Categoria"],
      ["Articulo", "mdi-axe", "Articulo"],
    ],
    usuarios: [["Usuarios", "mdi-badge-account", "Usuario"]],
  }),

  created() {
    this.$store.dispatch("autoLogin");
  },

  methods: {
    salir() {
      this.$store.dispatch("salir");
    },
    cambioDeVentana(){
      this.condicion = false;
    }
  },
};
</script>
