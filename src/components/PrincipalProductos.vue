<template>
  <v-container class="pt-5">
    <h1 class="text-center pt-5">PRODUCTOS</h1>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in articulos" :key="i" cols="4">
          <v-card class="mx-auto my-12" max-width="374" color="#004e63" dark>
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" :src="item.imagen"></v-img>

            <v-card-title v-text="item.nombre"></v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>

              <div
                class="my-4 subtitle-1"
                v-text="'$' + item.precio_venta"
              ></div>

              <div class="pb-5" v-text="item.descripcion"></div>
              <v-btn elevation="14"> Comprar</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    articulos: [],
  }),
  created() {
    this.listar();
  },

  methods: {
    listar() {
      axios
        .get("http://localhost:3000/api/articulo/list", {
          headers: {
            token: this.$store.state.token,
          },
        })
        .then((response) => {
          this.articulos = response.data;
          console.log(this.articulos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>