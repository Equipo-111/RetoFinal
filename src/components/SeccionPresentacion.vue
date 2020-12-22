
<template>

  <v-container class="seccionPresentacion">
   <v-carousel class="hidden-md-and-down">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
    </v-carousel>
   <v-row>
      <div class="col-6">
        <h1 class="tituloPresentacion">3D Max</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dolore dol
        </p>
        <v-row class="justify-lg-start justify-md-space-between">
          <div class="col-lg-12">
            <div class="">
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
        
        <img src="../assets/impresora.jpg" alt="impresora" height="400px" />
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SeccionPresentacion",
  data() {
    return {
      item: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
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
</style>
