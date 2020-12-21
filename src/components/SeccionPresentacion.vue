<template>
  <v-container class="seccionPresentacion">
    <v-row>
      <div class="col-6">
        <h1 class="tituloPresentacion">3D Max</h1>
        <p>
          Contamos con servicio de impresion 3D de alta calidad, modelado 3D y una amplia gama de impresoras 3D industriales y de escritorio.
        </p>
        <v-row class="justify-lg-start justify-md-space-between">
          <div class="col-lg-12">
            <div class="">
              <v-btn rounded color="#004e63" dark>
                impresoras 3D
              </v-btn>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="">
              <v-btn rounded color="white" light >
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
