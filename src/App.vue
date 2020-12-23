<template>
  <v-app>
    <div class="container">
      <v-toolbar dense flat>
        <v-row>
          <v-toolbar-title class="col-4">
            <a class="titulo mt-5" href="/">
              <img src="https://i.ibb.co/C1v9hfk/Logo3-D-01.jpg" alt="" width="180px">
            </a>
            
          </v-toolbar-title>
          <v-toolbar-items
            flat
            class="col-4 justify-space-between hidden-sm-and-down"
          >
            <v-btn to="/" class="tituloNavBar" text color="#004e63">
              <router-link to="/" class="tituloNavBar">
                Home
              </router-link>
            </v-btn>

            <v-btn to="Servicios" text color="#004e63">
              <router-link to="Servicios" class="tituloNavBar">
                servicios
              </router-link>
            </v-btn>


            <v-btn to="Nosotros" text color="#004e63">
              <router-link to="Nosotros" class="tituloNavBar">
                Nosotros
              </router-link>
              
            <v-btn to="Productos" text color="#004e63">
              <router-link to="Productos" class="tituloNavBar">
                Productos
              </router-link>
            </v-btn>
            

            </v-btn>

          </v-toolbar-items>
          <v-spacer></v-spacer>

          <div class="titulo">
            <v-btn to="Login" class="ma-5 hidden-sm-and-down" outlined color="indigo" @click="">
              <router-link to="Login" class="tituloNavBar">
              Login
              </router-link>
            </v-btn>
          </div>

        </v-row>

        <div class="text-center hidden-md-and-up">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Menu
              </v-btn>
            </template>
            <v-list>
              <v-list-item 
              v-for="([title,ruta],i) in items"
              :key = "i"
              link
              :to="{name:ruta}" 
              >
                <v-list-item-title v-text="title"
               >  </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </v-toolbar>
      <router-view />
      <the-footer />
    </div>
  </v-app>
</template>

<script>
import TheFooter from "../src/components/TheFooter";

export default {
  name: "App",

  components: {
    TheFooter,
  },

  data: () => ({
      items: [
        [ 'Home','Home' ],
        ['Servicios','Servicios' ],
        [ 'Nosotros','Nosotros' ],
        ["Login","login"]
        
      ],
    }),
  }

</script>

<style scoped>
a {
  text-decoration: none;
}
a:visited {
  text-decoration: none;
  color: #004e63;
}
.v-toolbar__title {
  font-size: 40px;
}

.v-btn.v-size--default,
.v-btn.v-size--large {
  font-size: 20px;
}
.titulo{
  display: flex;
  align-items:center;
  /* position: absolute; */
}
</style>
