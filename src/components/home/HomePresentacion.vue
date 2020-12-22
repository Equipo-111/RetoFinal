<template>
  <v-container class="seccionPresentacion">
    <v-row>
      <div class="col-12 col-md-6">
        <h1 class="tituloPresentacion">3D Max</h1>
        <p>
         Contamos con servicio de impresión 3D de alta calidad, modelado 3D y una amplia gama de impresoras 3D industriales y de escritorio.
        </p>
        <v-row class="justify-lg-start justify-md-space-between">
          <div class="col-lg-12">
            <div class="Boton1">
              <v-btn rounded color="#004e63" dark>
                <router-link to="Servicios">
                  impresoras 3D
                </router-link>
              </v-btn>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="">
              <v-btn rounded color="white" light>
                Aprende mas
              </v-btn>
            </div>
          </div>
        </v-row>
      </div>
      <div class="col-6 text-center">
        <v-carousel 
        :show-arrows="false"
        cycle
        height="350"
        interval="3000"
        delimiter-icon="mdi-minus"
        class="hidden-sm-and-down">


          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
          </v-carousel-item>
        </v-carousel>
        <!-- <img src="@/assets/impresora.jpg" alt="impresora" height="400px" /> -->
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePresentacion",
  data() {
    return {
      items: [
        {
          src: 'https://i.ibb.co/ysKtQR4/Carousel1-01.jpg',
        },
        {
          src: "https://i.ibb.co/dGyQ8Sn/Carousel2-01.jpg",
        },
        {
          src: "https://i.ibb.co/rbttxLG/Carousel3.jpg",
        }
      ],
    };
  },
};
</script>

<style scoped>
.seccionPresentacion {
  margin-top: 50px;
  padding-left: 25px;
}

.tituloPresentacion {
  margin-bottom: 50px;
}
h1 + p {
  font-size: 25px;
}

a {
  text-decoration: none;
  
}
a:visited {
  text-decoration: none;
  color: white;
  
}
</style>
